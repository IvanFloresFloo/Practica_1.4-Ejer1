function encontrarNumeroMasGrande(array) {
    if (array.length === 0) {
      return null; // Devuelve null si el array está vacío
    }
    
    let numeroMasGrande = array[0];
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] > numeroMasGrande) {
        numeroMasGrande = array[i];
      }
    }
    
    return numeroMasGrande;
  }
  
  function calcularNumeroMasGrande() {
    const numerosInput = document.getElementById("numerosInput").value;
    const numerosArray = numerosInput.split(",").map(Number);
    
    const resultado = encontrarNumeroMasGrande(numerosArray);
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "El número más grande es: " + resultado;
  }
  