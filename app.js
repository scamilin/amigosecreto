//Almacenamiento de nombres.

let amigosSecretos = [];

//Función para agregar amigos.

function agregarAmigo() {
    
    let amigosUsuario = document.getElementById('amigo').value;

    //Validación de la entrada
     if (amigosUsuario === '' ) {
        
        alert ('El nombre ingresado no es válido, vuelve a intentar por favor.');
        return;
       //Actualizar el array de amigos 
    } else {
        amigosSecretos.push(amigosUsuario);
        evaluarLista();
        console.log(amigosSecretos);
        limpiarCaja();
    }

}

//Limpiar el campo de entrada

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

//Evaluar lista

function evaluarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML="";
    for(let i=0; i < amigosSecretos.length; i++){
        let nombresLista = document.createElement("li");
        nombresLista.textContent=amigosSecretos[i];
        listaAmigos.appendChild(nombresLista);
    
    }

}

//Sortear amigos

function sortearAmigo(){
    if (amigosSecretos.length < 2){
        alert ('Lo sentimos. No hay amigos suficientes para sortear. Agrega al menos uno más.')
        return;
    } else {
        let indiceSorteo = Math.floor(Math.random()*amigosSecretos.length);
        const amigoAleatorio = amigosSecretos[indiceSorteo];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>¡Tu amigo secreto será: </>${amigoAleatorio} </li>`;
    }

}
