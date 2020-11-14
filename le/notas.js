const faker = require("faker");

function random(min, max) {
  return parseInt(Math.random() * (max - min) + min, 10);
}

for (let i = 0; i < 40; i++) {
  var randomSentense = faker.lorem.sentences();

  console.log(
    `INSERT INTO nota (id, texto, usuario_id) VALUES (${random(
      0,
      100000
    )}, "${randomSentense.slice(0, 450)}", "88876151315");\n`
  );
}
