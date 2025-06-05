const chance = 10;

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function doSummerChores(name) {
  console.log(`It's time to start your chores, ${name}.`);
  mowYard(name, weedEat);
}

function mowYard(name, weedEatCallback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    weedEatCallback(name, trimHedges);
  }, 2000);
}

function weedEat(name, trimHedgesCallback) {
  if (getRandomNumber(100) < chance) {
    console.log(`${name} fell asleep after mowing the yard.`);
  } else {
    setTimeout(() => {
      console.log(`${name} finished using the weed eater.`);
      trimHedgesCallback(name, collectWood);
    }, 1500);
  }
}

function trimHedges(name, collectWoodCallback) {
  if (getRandomNumber(100) < chance) {
    console.log(`${name} fell asleep after weed eating the yard.`);
  } else {
    setTimeout(() => {
      console.log(`${name} finished trimming the hedges.`);
      collectWoodCallback(name, waterGarden);
    }, 1000);
  }
}

function collectWood(name, waterGardenCallback) {
  if (getRandomNumber(100) < chance) {
    console.log(`${name} fell asleep after trimming the hedges.`);
  } else {
    setTimeout(() => {
      console.log(`${name} finished collecting wood.`);
      waterGardenCallback(name, finishedChores);
    }, 2500);
  }
}

function waterGarden(name, finishChoresCallback) {
  if (getRandomNumber(100) < chance) {
    console.log(`${name} fell asleep after collecting wood.`);
  } else {
    setTimeout(() => {
      console.log(`${name} finished watering the garden.`);
      finishChoresCallback(name);
    }, 500);
  }
}

function finishedChores(name) {
  console.log(`${name} finished all their chores!`);
}

doSummerChores("James", mowYard);
