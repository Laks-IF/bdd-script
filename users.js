const faker = require("faker");

for (let i = 0; i < 40; i++) {
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomSentense = faker.lorem.sentence();

  console.log(
    `INSERT INTO users (name, email, bio)
    VALUES ("${randomName}", "${randomEmail}", "${randomSentense.slice(
      0,
      40
    )}");`
  );
}
