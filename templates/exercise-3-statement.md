#### 3 - Agregar funcionalidad a un botón y utilizar setInterval

En el archivo `./exercises/3.js` se provee un función para resolver este ejercicio. Dentro de esta función
escriba un código que clone la tabla resultante del ejercicio 2 que debería estar contenida dentro de un div
con id `exercise-result-2` y agreguela al div `resultDiv`.
Luego dar funcionalidad al botón que está en el div `sourceDiv`. Este botón debe, al ser
presionado, comenzar a cambiar cada 2 segundos, de manera aleatoria el color de alguna de las filas
donde están los datos con un color también aleatorio. Una vez presionado el botón este debe cambiar su texto a `Detener` y al ser presionado debe volver al texto que tenía originalmente y detener el funcionamiento del cambio de color aleatorio.

**Nota:**
- Utilizar `addEventListener` para reconocer el click en el botón
- Utilizar `cloneNode(true)` para clonar
la tabla del ejercicio 2
- Utilizar `setInterval()` para cambiar los colores de las filas aleatoriamente.

**Tip:** Para obtener un número aleatorio entre 0 y < x, utilice esta expresión: `Math.trunc(Math.random() * x)`
