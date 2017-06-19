// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html


 

FUNCIONES = {};

FUNCIONES.validarUser = function ()
{
    var usuarioElem = document.querySelector("#user");  
    var passElem = document.querySelector("#pass");
    
    var loginOKelem = document.querySelector("#loginOK"); 
    var loginErroresElem = document.querySelector("#loginError"); 
    
    
    if( usuarioElem.value.length > 0            
            && usuarioElem.value.length <= 100      
            ){                                       
            
            loginOKelem.innerHTML +=  "Hola " ;          
            loginOKelem.innerHTML += usuarioElem.value; 
            document.getElementById("contUser").style.display = "none"; 
            

        }else{                                         
            loginErroresElem.innerHTML += "la contraseña o el usuario son incorrectos";  

    }
            
 /**                         alert("PRUEBA: pasa por false");     */   

};
