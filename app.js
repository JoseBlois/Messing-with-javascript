function reiniciar(){
    var ul = document.getElementById("lista");
    var X = ul.getElementsByTagName("li");
    var i;
    for (i = 0 ; i < X.length ; i ++ ) // (I%2 = 0)
    {                 
        X[i].textContent=("...");
    }
}
function todo(){
    var ul = document.getElementById("lista");
    var X = ul.getElementsByTagName("li");
    var i;
    var b = document.getElementById("numero1").value

    for (i = 0 ; i < X.length ; i ++ ) // (I%2 = 0)
    {                 
        X[i].textContent=(b);
    }
}

function escritura(){
    var c = parseFloat( document.getElementById("numero2").value) - 1;
    var primerElemento = document.getElementsByTagName("li")[c];
    var b = document.getElementById("numero1").value;
    primerElemento.textContent=( b );
 }
 function aumentar() {
    var x = document.getElementById("numero2").value;
    x ++ ;
    document.getElementById("numero2").value=(x);
 }
   /*    //1.- Crear el elemento
 var elemento = document.createElement("h2");
//2.- Crear el nodo de texto
var contenido = document.createTextNode(c);
//3.- Añadir el nodo de texto al elemento
elemento.appendChild(contenido);
//4.- Agregar atributos al elemento
//elemento.setAttribute("align","center");
//5.- Agregar el elemento al documento
document.getElementById("demo").appendChild(elemento); */ 

(function(){
    var boton = document.getElementById("generator"),
    escritor = document.getElementById("escritor"),
    reinicio = document.getElementById("reinicio"),
    todos = document.getElementById("todos"),
    itemGen = document.getElementById("itemGen1"),
    btnInsertar = document.getElementById("btn-insertar");
    var lista = document.getElementById("lista-frutas");
    var frutas = lista.getElementsByTagName("li");
    var inputs = lista.querySelectorAll("input");
    console.log(lista);

    for (let i = 0; i < frutas.length ; i++) {
        frutas[i].addEventListener("click",EditItem);
        inputs[i].addEventListener("blur",upItem);
        inputs[i].addEventListener("keypress",ItemKeyPress);
        
    }
    function EditItem(){
        this.className = "edit";
        var input = this.querySelector("input");
        input.focus();
        input.setSelectionRange(0, input.value.length);
    }
    function upItem(){
/*             var x = this.previousElementSibling;
        console.log(x); */
        this.previousElementSibling.textContent = this.value
        this.parentNode.className="";
    }
    function ItemKeyPress(e){
        if (e.keyCode === 13){
            upItem.call(this);
        }

    }

    boton.addEventListener( "click" , generar);
    escritor.addEventListener( "click" , escritura);
    reinicio.addEventListener("click", reiniciar);
    todos.addEventListener("click",todo);
    itemGen1.addEventListener("click",generarItem);
    itemGen2.addEventListener("click",generarItem);
    itemGen3.addEventListener("click",generarItem);
    btnInsertar.addEventListener("click",insertar);

    var tarea =  document.getElementById("texto");
    tarea.addEventListener("keypress",function(e){
        if (e.keyCode === 13){
            insertar.call(this);
        } 
    })
    
    function insertar(){
    var x = document.getElementById("texto").value;
    if (x != " " && x !== ""){
    var elemento = document.createElement("p");
    var c = document.getElementById("texto").value;
    var contenido = document.createTextNode(c);
    elemento.appendChild(contenido);
    elemento.className="parra";
    document.getElementById("list").appendChild(elemento);
    document.getElementById("texto").value="";

    var arreglo = document.getElementById("list").childNodes;
    // console.log(arreglo)
    var o = arreglo.length-1;
    arreglo[o].addEventListener("click",remover);
    /* for (var i = 0; i < arreglo.length; i++) {
        arreglo[i].addEventListener("click",remover);
        console.log(arreglo[i])
    } */

        }
    }
    function remover(){
       var L = this.parentElement ;
       L.removeChild(this);// THIS ES COMO SELF EN SMALLTALK.
       
    }

function generar(){
    var xd = document.getElementById("generator");
    xd.setAttribute("onclick"," ")
    xd.setAttribute("style","display:none;")
    var x,i,o,y,c;
    for (let i = 0; i < 3; i++) {
        for (let o = 0; o < 3 ; o++) {
           x = document.createElement("div");
           x.addEventListener("click",cambio);
           document.getElementById("cont").appendChild(x);
           
        }   
    }
}
function cambio(){
    if (this.className == "negro"){
        this.className = "";
    }
    else {
        this.className = "negro";
    }
}
function generarItem(e){
    var elemento;
    var clon;
    var x = document.getElementById(e.target.id);
    if (x.id == "itemGen1") {
         elemento = document.getElementById("plato1");
         elemento.removeAttribute("id")
         clon = elemento.cloneNode(true);
         elemento.id ="plato1";
        }
    else {
        if (x.id == "itemGen2"){
             elemento = document.getElementById("plato2");
             elemento.removeAttribute("id")
             clon = elemento.cloneNode(true);
             elemento.id = "plato2";
        }
        else {
            if (x.id == "itemGen3"){
             elemento = document.getElementById("plato3");
             elemento.removeAttribute("id")
             clon = elemento.cloneNode(true);
             elemento.id = "plato3";
            }
        }
    }
    var a = document.getElementById("item-container");
    a.appendChild(clon)
}
var global = [1,2,5];
var prueba = function(x){
    console.log(x);
    x[2] = 4;
    console.log(x);
}
prueba(global);
console.log(global);
    
}())