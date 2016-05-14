describe("tirarLosDados", function() {
  it("tirarLosDados() siempre devuelve números entre 1 y 6", function() {
    assert(tirarLosDados() >= 1);
    assert(tirarLosDados() >= 1);
    assert(tirarLosDados() >= 1);
    assert(tirarLosDados() >= 1);
    assert(tirarLosDados() <= 6);
    assert(tirarLosDados() <= 6);
    assert(tirarLosDados() <= 6);
    assert(tirarLosDados() <= 6);
  });
  it("tirarLosDados() genera todos los números entre 1 y 6", function() {
    var tiradasSucesivas = new Array(100).fill(1).map(x => tirarLosDados());
    assert(tiradasSucesivas.indexOf(1) >= 0, "genera el 1");
    assert(tiradasSucesivas.indexOf(2) >= 0, "genera el 2");
    assert(tiradasSucesivas.indexOf(3) >= 0, "genera el 3");
    assert(tiradasSucesivas.indexOf(4) >= 0, "genera el 4");
    assert(tiradasSucesivas.indexOf(5) >= 0, "genera el 5");
    assert(tiradasSucesivas.indexOf(6) >= 0, "genera el 6");
  })
})