Para cerrar, ahora que ya vimos cómo usar el `if`, es momento de un pequeño recordatorio:
si usás adecuadamente las expresiones booleanas, ¡no es necesario utilizar esta estructura de control!

Supongamos que queremos desarrollar una función `esMayorDeEdad`, que nos diga si alguien tiene
18 años o más. Una tentación es escribir lo siguiente:

```javascript
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
```

Sin embargo, **este `if` es totalmente innecesario**, dado que la expresión `edad >= 18` ya es booleana:

```javascript
function esMayorDeEdad(edad) {
  return edad >= 18;
}
```

Mucho más simple, ¿no? :wink:

> Veamos si queda claro: escribí la función
