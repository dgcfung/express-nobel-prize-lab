const { Prize } = require('./models');
const { data } = require('./prizes');

function parseData() {
  const prizes = data.prizes.map(prize => ({
    year: prize.year,
    category: prize.category,
    motivation: prize.motivation
  }));

  return prizes;
}

async function seedDb() {
  const prizes = parseData();
  await Prize.bulkCreate(prizes);

  console.log('all done');
}

async function main() {
  try {
    await seedDb();
  } catch(e) {
    console.log(e);
  } finally {
    process.exit();
  }
}

main();
