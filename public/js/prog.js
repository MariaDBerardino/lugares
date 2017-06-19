/* 
Marilu
 */

 

FUNCIONES = {};

FUNCIONES.validarUser = function ()
{
    var usuarioElem = document.querySelector("#user");  
    var passElem = document.querySelector("#pass");
    
    var loginOKelem = document.querySelector("#loginOK"); 
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
            
 /**                         alert("PRUEBA: pasa por false");     */   

};
