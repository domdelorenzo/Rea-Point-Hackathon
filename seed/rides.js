const db = require('../db');
const Ride = require('../models/ride');

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

const main = async () => {
  const rides = [
    {
      name: 'The Raptor',
      description: 'Scream until you puke!',
      image:
        'https://detroit.cbslocal.com/wp-content/uploads/sites/15909782/2015/08/raptor_061-1.jpg?w=775&h=436&crop=1',
      heightRequirement: 60
    },
    {
      name: 'The Mantis',
      description: 'AHHHHHHHH!',
      image:
        'http://www.destination360.com/north-america/us/ohio/images/s/mantis-cedar-point.jpg',
      heightRequirement: 48
    }
  ];
  await Ride.insertMany(rides);
  console.log(`MongoDB is riding America's roller coast!`);
};
const run = async () => {
  await main();
  db.close();
};

run();
