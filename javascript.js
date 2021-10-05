String.prototype.replaceAt=function(index, character) {
     return this.substr(0, index) + character + this.substr(index+character.length); }

const palabras =['carro','celular','uriel','rivero'];
const palabra= palabras[Math.floor(Math.random()*palabras.length)]
let palabrasseparadas= palabra.replace(/./g,"-");





document.querySelector('#output').innerHTML = palabrasseparadas;


document.querySelector('#calcular').addEventListener('click',() =>
{ 
    const letra = ahorcado.querySelector('#letra').value;
    alert (palabra);
    let hasfallado=true;
    for (const i in palabra){
        if(letra==palabra[i]){
         
            palabrasseparadas = palabrasseparadas.replaceAt(i*2, letra);
             hasfallado= false;
        }
    }
    ALERT (palabrasseparadas);
    if (hasfallado){
    alert("hasfallado");
    }

    
});

