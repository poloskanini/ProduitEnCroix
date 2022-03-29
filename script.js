// CROSS PRODUCT RULE === numberTwo * numberThree = numberOne * RESULT
  
const crossCalculate = () => {
  let numberOne = parseFloat(document.getElementById("numberOne").value);
  let numberTwo = parseFloat(document.getElementById("numberTwo").value);
  let numberThree = parseFloat(document.getElementById("numberThree").value);

  // Resultat

  if(isNumeric(numberOne) && isNumeric(numberTwo) && isNumeric(numberThree)) {
    document.getElementById("myResult").value = Math.round((numberTwo * numberThree) / numberOne * 100) / 100;
    console.log(isNumeric(numberOne))
  } else {
    alert('⚠️ Veuillez entrer un nombre uniquement')
  }

  // if (Number.isInteger(numberOne && numberTwo && numberThree)) {
  //   document.getElementById("myResult").value = Math.round((numberTwo * numberThree) / numberOne * 100) / 100;
  // } else {
  //   alert('Veuillez entrer un nombre uniquement');
  // };
};

// isNumeric function
function isNumeric(input) {
  return (input - 0) == input && (''+input).trim().length > 0;
};

// Ajout de ENTER pour lancer crossCalculate()
document.addEventListener('keydown', (event) => {
  if(event.key === "Enter") {
    crossCalculate();
    event.preventDefault();
  }
});

document.getElementById('myResult').readOnly = true;
