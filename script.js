// CROSS PRODUCT RULE === numberTwo * numberThree = numberOne * RESULT
  
const crossCalculate = () => {
  let numberOne = parseFloat(document.getElementById("numberOne").value);
  let numberTwo = parseFloat(document.getElementById("numberTwo").value);
  let numberThree = parseFloat(document.getElementById("numberThree").value);

  // Resultat
  if (Number.isInteger(numberOne && numberTwo && numberThree)) {
    document.getElementById("myResult").value = Math.round((numberTwo * numberThree) / numberOne * 100) / 100;
  } else {
    alert('Veuillez entrer un nombre uniquement');
  }
}

// Ajout de ENTER pour lancer crossCalculate()
document.addEventListener('keydown', (event) => {
  if(event.key === "Enter") {
    crossCalculate();
    event.preventDefault();
  }
})