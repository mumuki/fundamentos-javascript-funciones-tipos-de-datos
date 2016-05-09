Además de los operadores básicos matemáticos `+`, `-`, `/` y `*`, existen muchas otras funciones matemáticas comunes, algunas de las cuales ya vienen con JavaScript y están listas para ser usadas.

Sin emabargo, la sintaxis de estas funciones matemáticas es _apenitas_ difernte de lo que veníamos haciendo hasta ahora; hay que prefijarlas con `Math.`. Por ejemplo, la función que devuelve el valor absoluto de un número es `Math.abs`:

```javascript
function dobleDelAbsoluto(numero) {
   return 2 * Math.abs(numero);
}
```