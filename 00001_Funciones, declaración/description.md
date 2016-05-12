Empecemos por lo fácil: al igual que en Gobstones, en JavaScript las **funciones** son unas de nuestras herramientas fundamentales: podremos declararlas una vez, y luego usarlas múltiples veces. 

Sin embargo, casi siempre que aprendés un lenguaje nuevo, te vas a topar con un pequeño detalle: **tiene otra sintaxis** :disappointed_relieved: ¡Y este caso no es la excepción! 

¿Será muy difícil aprender la nueva sintaxis? Veamos: 

```javascript
function doble(numero) {
   return 2 * numero;
}
```

Como ves es diferente, pero no tanto. Si la comparás con su equivalente Gobstones...

```gobstones
function doble(numero) { 
  return (2* numero)
}
```

...notarás que la diferencia es que los paránetesis al rededor del return no son necesarios, y que ĺa última línea la terminamos con `;`. 

> Veamos si se va entendiendo: escribí ahora una función `mitad`, que tome un número y devuelva su mitad. 

