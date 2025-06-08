// I like this better than I do the callbacks.
// I think I like async/await best.
const chance = 10;

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

// each promise will be written basically the same way
function mowYard(name) {
  // we return a new promise that resolves in X ms.
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve();
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    if (getRandomNumber(100) < chance) {
      reject(new Error("Fell asleep"));
    } else {
      setTimeout(() => {
        console.log(`${name} finished using the weed eater.`);
        resolve();
      }, 1500);
    }
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    if (getRandomNumber(100) < chance) {
      reject(new Error("Fell asleep"));
    } else {
      setTimeout(() => {
        console.log(`${name} finished trimming the hedges.`);
        resolve();
      }, 1000);
    }
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    if (getRandomNumber(100) < chance) {
      reject(new Error("Fell asleep"));
    } else {
      setTimeout(() => {
        console.log(`${name} finished collecting wood.`);
        resolve();
      }, 2500);
    }
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    if (getRandomNumber(100) < chance) {
      reject(new Error("Fell asleep"));
    } else {
      setTimeout(() => {
        console.log(`${name} finished watering the garden.`);
        resolve();
      }, 500);
    }
  });
}

function finishedChores(name) {
  console.log(`${name} finished all their chores!`);
}

function doSummerChores(name) {
  console.log(`It's time to start your chores, ${name}.`);

  // This starts the chain.
  // If the promise resolves successfully, the next is chained.
  // If any promise rejects, it will break the chain.
  return mowYard(name)
    .then(() => weedEat(name)) // process return from mowYard.
    .then(() => trimHedges(name)) // process return from weedEat.
    .then(() => collectWood(name)) // process return from trimHedges.
    .then(() => waterGarden(name)) // process return from collectWood
    .then(() => finishedChores(name)) // process return from waterGarden.  IF execution makes it this far, all chores are complete.
    .catch((error) => {
      // A promise was rejected (they fell asleep).
      console.log(`${name} fell asleep during their chores.`);
    });
}

// Start the chores
doSummerChores("James");
