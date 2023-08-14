const txtnombre=document.querySelector("#txtnombre");
const respondernombre=document.querySelector("#respondenombre");

txtnombre.addEventListener("input", (event)=>{
    const sunombre=event.target.value;
    respondernombre.innerHTML="<p> Hola, Como estas <span>"+sunombre+ "</span> un gusto conocerte</p>"
})