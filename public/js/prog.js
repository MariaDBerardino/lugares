/* 
Marilu
 */

 

FUNCIONES = {};

FUNCIONES.validarUser = function ()
{
    var usuarioElem = document.querySelector("#user");  
    var passElem = document.querySelector("#pass");
    
    var loginOKelem = document.querySelector("#comentarios"); 
    var loginErroresElem = document.querySelector("#loginError"); 
    
    var visitantesElem = document.querySelector("#visitantes");
    
    
    if( usuarioElem.value.length > 0            
            && usuarioElem.value.length <= 100      
            ){                                       
            
            loginOKelem.innerHTML =  "Hola " ;          
            loginOKelem.innerHTML += usuarioElem.value; 
/*            document.getElementById("contUser").style.display = "none";  */
            visitantesElem.innerHTML +=1  ;
            
            

        }else{                                         
            loginErroresElem.innerHTML += "la contraseña o el usuario son incorrectos";  

    }

};

FUNCIONES.cargarhtml = function (laurl)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", laurl);
    xhr.onreadystatechange = function () {
        if( xhr.readyState === 4 ){
            if( xhr.status === 200 ){
                //alert( xhr.responseText );
                var panelito = document.querySelector("#contajax");
                panelito.innerHTML = xhr.responseText;
             /// PANEL_MENSAJES
        }else{
            var panelito = document.querySelector("#contajax");
            panelito.innerHTML = "Error" ; 
                }
            }
        };


        xhr.send();
 };         



