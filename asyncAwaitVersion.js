// I like this better than I do the callbacks.
// I think I like async/await best.
const firstName = "James";
const chance = 40;
let fellAsleep = false;

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

// each promise will be written basically the same way
// the only difference here is we make it async so we can await it later.
async function mowYard(name) {
  // we return a new promise that resolves in X ms.
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve();
    }, 2000);
  });
}

async function weedEat(name) {
  return new Promise((resolve, reject) => {
    if (getRandomNumber(100) < chance) {
      fellAsleep = true;
      reject(new Error("Fell asleep"));
    } else {
      setTimeout(() => {
        console.log(`${name} finished using the weed eater.`);
        resolve();
      }, 1500);
    }
  });
}

async function trimHedges(name) {
  return new Promise((resolve, reject) => {
    if (getRandomNumber(100) < chance) {
      fellAsleep = true;
      reject(new Error("Fell asleep"));
    } else {
      setTimeout(() => {
        console.log(`${name} finished trimming the hedges.`);
        resolve();
      }, 1000);
    }
  });
}

async function collectWood(name) {
  return new Promise((resolve, reject) => {
    if (getRandomNumber(100) < chance) {
      fellAsleep = true;
      reject(new Error("Fell asleep"));
    } else {
      setTimeout(() => {
        console.log(`${name} finished collecting wood.`);
        resolve();
      }, 2500);
    }
  });
}

async function waterGarden(name) {
  return new Promise((resolve, reject) => {
    if (getRandomNumber(100) < chance) {
      fellAsleep = true;
      reject(new Error("Fell asleep"));
    } else {
      setTimeout(() => {
        console.log(`${name} finished watering the garden.`);
        resolve();
      }, 500);
    }
  });
}

async function doSummerChores(name) {
  console.log(`It's time to start your chores, ${name}.`);

  // Unlike promises we don't need to chain with .then(...).
  // await each async function, if they fall asleep we will
  // catch and reject/print the sleep message.
  try {
    await mowYard(name);
    await weedEat(name);
    await trimHedges(name);
    await collectWood(name);
    await waterGarden(name);
  } catch (error) {
    console.log(`${name} fell asleep during their chores.`);
  }
}

// Start the chores
doSummerChores(firstName).then(() => {
  if (!fellAsleep) console.log(`${firstName} finished all their chores!`);
});
