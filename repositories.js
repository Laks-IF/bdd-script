const faker = require("faker");

for (let i = 25; i < 15 + 25; i++) {
  var randomSentense1 = faker.lorem.sentence();
  var randomSentense2 = faker.lorem.sentence();

  console.log(
    `INSERT INTO repositories (title, description, ownerId)
    VALUES (
        "${randomSentense1.slice(0, 40).replace(/ /g, "-")}", 
        "${randomSentense2.slice(0, 40)}", 
        ${i}
    );`
  );
}
