
const txtName = document.getElementById("name");
const txthours = document.getElementById("hours");
const txtOutput = document.getElementById("output");

const btnCalculate = document.getElementById("calculate");

btnCalculate.addEventListener("click",btnCalculate);

function calculate(){
    const hourlyRate = 250;

    const name = txtName.value;
    const hours = parseInt(txthours);

    const takehome = hourlyRate * hours;
    txtOutput.innerText = `${name} worked ${hours} hours Take home pay is: Rs. ${takehome.toFixed(2)}`;
}