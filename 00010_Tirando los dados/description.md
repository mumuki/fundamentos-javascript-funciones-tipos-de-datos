Una última función interesante que veremos es `Math.random()`, que sirve para generar números _aleatorios_: cada vez que llamamos a esta función, nos devolverá un número diferente, entre 0 y 1.

Por ejemplo, una serie de llamados sucesivos a esta función podría arrojar los siguientes resultados:

```javascript
ム Math.random()
0.978089472046122
ム Math.random()
0.020517095923423767
ム Math.random()
0.02496219240128994
```

Sin embargo, estos números no parecen ser muy útiles: si queremos, por ejemplo, números enteros alteatorios, `Math.random()` no nos resuelve nuestro problema. ¿O sí?

> Desafío: escribí una función `tirarLosDados` que devuelva números aleatorios entre el 1 y el 6.
>
> Por ejemplo:
>
> ```javascript
> ム tirarLosDados()
> 5
> ム tirarLosDados()
> 2
> ム tirarLosDados()
> 2
> ム tirarLosDados()
>```
>
> Recordá que si te trabás podés consultar la ayuda :smile: