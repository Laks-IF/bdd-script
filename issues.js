const faker = require("faker");

for (let i = 6; i < 19; i++) {
  var randomSentense1 = faker.lorem.sentence();
  var randomSentense2 = faker.lorem.sentence();

  let m = getRandomInt(12);
  let d = getRandomInt(26);

  m = m >= 10 ? m : "0" + m;
  d = d >= 10 ? d : "0" + d;

  console.log(`
    INSERT INTO issues (title, description, originalIssue, createdAt, userId, repositoryId)
    VALUES (
        "${randomSentense1.slice(0, 40)}", 
        "${randomSentense2.slice(0, 40)}", 
        true, 
        "${2020 - 50 + getRandomInt(50)}-${m}-${d}", 
        ${25 + getRandomInt(10)}, 
        ${5 + getRandomInt(10)}
    );
  `);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
