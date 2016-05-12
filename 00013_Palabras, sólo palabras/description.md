Muchas veces queremos escribir programas que trabajen con texto :page_facing_up:: querremos saber cuantas palabras hay en un libro, o convertir minúsculas a mayúsculas, o saber en que parte de un texto está otro. 

Para este tipo de problemas, tenemos los _strings_, también llamados _cadenas de caracteres_: 

* `"Ahora la bebe tiene que dormir en la cuna"`
* `'El hierro nos ayuda jugar'`
* `"¡Hola Miguel!"`

Como se observa, todos los strings están encerrados entre comillas simples o dobles. ¡Da igual usar unas u otras! Pero sé consistente: por ejemplo, si abriste comilla doble, tenés que cerrar comilla doble. Además, un string puede estar formado por (casi) cualquier carácter: letras, números, símbolos, espacios, etc. 

¿Y qué podemos hacer con los string? Por ejemplo, compararlos, como a cualquier otro valor: 

```javascript
ム "hola" === "Hola"
false

ム "todo el mundo" === "todo el mundo"
true
```

> Veamos si queda claro: escribí la función `esFinDeSemana` que tome un string que represente el nombre de un día de la semana, y nos diga si es `"sábado"` o `"domingo"` 
> 
> ```javascript
> ム esFinDeSemana("sábado")
> true
> ム esFinDeSemana("martes")
> false
> ```

