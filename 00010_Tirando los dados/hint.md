Este desafío tiene varias cuestiones para atacar:

1. Obtener números más grandes: `Math.random()` te da números mayores o iguales a 0, y menores a 1, pero nosotros queremos que sean mayores a 1.
1. Obtener números enteros: `Math.random()` te da números con coma.

Para lo primero, tenemos, una sugerencia: la multiplicación es tu amiga. Por ejemplo:

```javascript
ム Math.random() * 10
1.4824109198525548
ム Math.random() * 10
7.549292491748929
ム Math.random() * 10
0.12051541358232498
```

Como ves, esto de devuelve números mayores o iguales a 0 y menores a 10. No parece resolver todo el problema, pero es un avance :grin:

Para lo segundo, revisá las funciones que vimos en el punto anterior :wink:


