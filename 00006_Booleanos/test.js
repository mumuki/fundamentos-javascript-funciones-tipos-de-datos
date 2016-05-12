describe("estaEntre", function() {
  it("estaEntre(10, 1, 10) es false", function() {
    assert(!estaEntre(10, 1, 10));
  });
  it("estaEntre(12, 1, 10) es false", function() {
    assert(!estaEntre(12, 1, 10));
  });
  it("estaEntre(200, 54, 112) es false", function() {
    assert(!estaEntre(200, 54, 112));
  });
  it("estaEntre(67, 0, 100) es true", function() {
    assert(estaEntre(67, 0, 100));
  });
  
})