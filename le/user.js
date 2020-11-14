const faker = require("faker");

function random(min, max) {
  return parseInt(Math.random() * (max - min) + min, 10);
}

function withN(n) {
  return Array.from({ length: n })
    .map((_) => Math.floor(random(0, 9)))
    .join("");
}

function getCpf() {
  return withN(11);
}

function randomRg() {
  return withN(9);
}

for (let i = 0; i < 40; i++) {
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomEnd = faker.address.zipCode();
  var randomEndC = faker.address.zipCode();
  var randomCpf = getCpf();
  var randomTel = faker.phone.phoneNumber();

  console.log(
    `INSERT INTO usuario (nome, cpf, endereco, telefone, email, id, rg, referencia_comercial)
    VALUES ("${randomName}", "${randomCpf}", "${randomEnd}", "${randomTel}", "${randomEmail}", ${random(
      0,
      100000
    )}, "${randomRg()}", "${randomEndC}");\n`
  );
}
