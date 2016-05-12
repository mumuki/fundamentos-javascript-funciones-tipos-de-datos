¿Y esto con qué se come? Digo, ehm.... ¿como se usan estas funciones? ¿Cómo hago para pasarle parámetros y obtener un resultado? 

¡Simple! Basta con poner el nombre de la funcion, y entre paréntesis, su argumentos, como veníamos haciendo: 

```javascript
doble(3)
```

¡Y además podemos usarlas dentro de otras funciones! Por ejemplo: 

```javascript
function doble(numero) {
  return 2 * numero
}

function siguienteDelDoble(numero) {
   return doble(numero) + 1;
}
```

> Veamos si se entiende: escribí una función 
