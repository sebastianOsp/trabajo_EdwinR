const note1 = document.getElementById("first-note");
const note2 = document.getElementById("second-note");
const note3 = document.getElementById("third-note");
const response = document.getElementById("response");
const calculate = document.getElementById("btn-calculate");

calculate.addEventListener("click",CalculateFinalNote);

function finalNote(){
    if ((note1.value) > 5 || (note2.value) > 5 || (note3.value) > 5){
        response.textContent = "Invalid number"
    }else{
        return (Number(note1.value) * 0.3) + (Number(note2.value) * 0.30) + (Number(note3.value) * 0.40);
    }
        
}
function CalculateFinalNote(){
    let final = finalNote();
    if (final>5) {
     response
    }else if (final>4.5 && final<=5.0){
        response.textContent = "Su nota es excelente";
    }else if (final>=3.5 && final<=4.5){
        response.textContent = "Su nota es buena";
    }else if (final>= 2.0 && final<3.5){
        response.textContent = "Perdio la materia pero la puede recuperar";
    }else{
        response.textContent = "Debe repetir la materia";
    }
}