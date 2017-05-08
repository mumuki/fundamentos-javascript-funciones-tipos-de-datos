_Hagamos un alto en nuestro camino y miremos las funciones `Math.max` y `Math.min`, que nos pueden ahorrar más trabajo del que parece_.

Necesitamos una función que diga cuánta plata queda en tu cuenta (que tiene un cierto saldo) si extráes un cierto monto: 

```javascript
ム extraer(100, 30)
70
```

Pero como no queremos que te quedes en negativo, si el monto a extraer es mayor al saldo, nuestro saldo debe quedar en cero. 

```javascript
ム extraer(100, 120)
0
```

Y acá probablemente estés pensando: _en Gobstones esto lo puedo resolver con `if`_. ¡Y tenés razón! Pero vamos a pensarlo de otra forma: estamos poniendo un _tope inferior_ a la resta, que no puede dar menos de cero :open_mouth:. 

> En otras palabras, `extraer` devuelve el máximo entre la resta `saldo - monto`  y `0`. ¿Te animás a completar esta otra posible solución que está en el editor?
> 
