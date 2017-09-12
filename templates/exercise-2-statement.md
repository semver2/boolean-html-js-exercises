#### 2 - Crear una tabla dinámicamnte a partir de procesar texto en formato JSON

En el archivo `./exercises/2.js` se provee un función para resolver este ejercicio. Dentro de esta función
escriba un código que dado una definición JSON dibuje una tabla y basado en un array de objectos.
Se debe usar la etiqueta `<table>` y utilizar `<thead>` y `<th>` para los headers de la tabla y `<tbody>`, `<tr>` y `<td>` para las columnas y filas con el contenido.
La table resultante debe quedar dentro del div `resultDiv`.

**Nota:** Utilizar `JSON.parse()` para transformar el texto en el div `sourceDiv` en un objeto y usar `Object.keys` para obtener
las `key` de cada objeto que serviran de titulo para las columnas. Basta con obtener las keys del primer objeto para usar esas como nombre de las columnas.
