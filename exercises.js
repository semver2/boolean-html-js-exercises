document.addEventListener("DOMContentLoaded", () => {


    (() => {
        //////////////////// EJERCICIO 1 ////////////////////////////////////////
        const texto = document.getElementById('ejercicio-1').textContent.trim();
        const div = document.getElementById('resultado-ejercicio-1');

        let size = 12;
        let aumenta = true;

        for(let i=0; i< texto.length; i++){
            const span = document.createElement("span");
            const letra = document.createTextNode(texto[i]);
            if (texto[i] !== ' ') {
                span.style.fontSize = size + 'px';
            }
            span.appendChild(letra);
            div.appendChild(span);

            if (i%6 === 0 && i !== 0) {
                aumenta = !aumenta;
            }
            size = aumenta ? size+6 : size-6;
        }
        //////////////////// FIN EJERCICIO 1 ////////////////////////////////////////
    })();


    (() => {
        ///////////////////// EJERCICIO 2 ////////////////////////////////////////
        const div = document.getElementById('resultado-ejercicio-2');
        const gente = JSON.parse(document.getElementById("ejercicio-2").textContent);
        const keys = Object.keys(gente.people[0]);
        const table = document.createElement('table');
        const thead = document.createElement('thead');

        const tbody = document.createElement('tbody');

        keys.forEach((data)=>{
            const th = document.createElement('th');

            th.appendChild(document.createTextNode(data));
            thead.appendChild(th);
        })

        gente.people.forEach((data)=>{
            const tr = document.createElement('tr');

            keys.forEach(( key => {
                 const td = document.createElement('td');
                 td.appendChild(document.createTextNode(data[key]));
                 tr.appendChild(td);
            }))
            tbody.appendChild(tr);
        })

        table.appendChild(thead);
        table.appendChild(tbody);
        div.appendChild(table);
        ///////////////////// FIN EJERCICIO 2 ////////////////////////////////////////
    })();
});
