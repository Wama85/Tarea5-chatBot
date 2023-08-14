const txtnombre=document.querySelector("#txtnombre");
const respondernombre=document.querySelector("#respondenombre");
const txtgenero=document.querySelector("#txtgenero");

txtnombre.addEventListener("keyup", (event)=>{
    const sunombre=event.target.value;
    const genero=txtgenero.value;

    respondernombre.style.display="block";
    if(genero=='MASCULINO'){
        respondernombre.innerHTML="<p> Hola, Cómo esta Sr. <span>"+sunombre+ "</span> un gusto conocerte</p>"
    }
    else{
        respondernombre.innerHTML="<p> Hola, Cómo esta Sra. <span>"+sunombre+ "</span> un gusto conocerte</p>"
    }

    txtgenero.addEventListener('click',()=>{
        txtnombre.value="";
        respondernombre.style.display="none";

    })

})