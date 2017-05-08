_Hagamos un alto en nuestro camino y miremos las funciones `Math.max` y `Math.min`, que nos pueden ahorrar más trabajo del que parece_.

Necesitamos una función que diga cuánta plata queda en tu cuenta (que tiene un cierto saldo) si extráes un cierto monto. Y como no queremos que te quedes en negativo, si el monto a extraer es mayor al saldo, simplemente devovlerá cero. Una posible solución es la siguiente:

```javascript
function extraer(saldo, monto) {
  if (monto > saldo) {
    return 0; 
  } else {
    return saldo - monto; 
  }
}
```

Hasta acá, nada nuevo. Peeeero, esto podemos pensarlo de otra forma: estamos poniendo un _tope inferior_ a la resta, que no puede dar menos de cero. 

> En otras palabras, `extraer` devuelve el máximo entre la resta `saldo - monto`  y `0`. ¿Te animás a completar esta otra posible solución que está en el editor?

