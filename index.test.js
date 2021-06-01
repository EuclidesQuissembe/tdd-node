const test = require("tape");
const index = require("./index");

test("Aplicar desconto", (t) => {
  t.assert(index.aplicarDesconto(10, 5) === 5, "Descontou correctamente");
  t.end();
});

test("Apliacar desconto grande", (t) => {
  t.assert(index.aplicarDesconto(5, 10) === 0, "Descontou correctamente");
  t.end();
});
