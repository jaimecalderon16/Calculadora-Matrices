var tabla1 = document.getElementById('tabla1');
var tabla2 = document.getElementById('tabla2');
var resultadoTabla = document.getElementById('resultado');

// Función para cargar la matriz desde el formulario
function cargarMatriz() {
  // Obtener el valor de filas y columnas del formulario
  var filas = parseInt(document.getElementById('filas').value);
  var columnas = parseInt(document.getElementById('columnas').value);

  // Obtener las tablas y limpiar su contenido
  tabla1.innerHTML = '';
  tabla2.innerHTML = '';
  resultadoTabla.innerHTML = '';

  // Crear las filas y columnas en las tablas
  for (var i = 0; i < filas; i++) {
    var fila1 = tabla1.insertRow(i);
    var fila2 = tabla2.insertRow(i);
    var filaResultado = resultadoTabla.insertRow(i);
    for (var j = 0; j < columnas; j++) {
      var celda1 = fila1.insertCell(j);
      var celda2 = fila2.insertCell(j);
      var celdaResultado = filaResultado.insertCell(j);
      // Crear un campo de entrada para cada celda de las matrices
      var input1 = document.createElement('input');
      var input2 = document.createElement('input');
      input1.type = 'number';
      input2.type = 'number';
      celda1.appendChild(input1);
      celda2.appendChild(input2);
    }
  }
}

// Función para realizar la operación seleccionada
function realizarOperacion(operacion) {
  // Obtener las tablas y el número de filas y columnas
  var filas = tabla1.rows.length;
  var columnas = tabla1.rows[0].cells.length;

  // Obtener las matrices de las tablas
  var matriz1 = obtenerMatriz(tabla1, filas, columnas);
  var matriz2 = obtenerMatriz(tabla2, filas, columnas);

  // Realizar la operación seleccionada
  var resultado;
  if (operacion === 'suma') {
    resultado = sumarMatrices(matriz1, matriz2);
  } else if (operacion === 'resta') {
    resultado = restarMatrices(matriz1, matriz2);
  } else if (operacion === 'multiplicacion') {
    resultado = multiplicarMatrices(matriz1, matriz2);
  }

  // Mostrar el resultado en la tabla correspondiente
  mostrarMatriz(resultado, resultadoTabla);
}

// Función para obtener una matriz a partir de una tabla
function obtenerMatriz(tabla, filas, columnas) {
  var matriz = [];
  for (var i = 0; i < filas; i++) {
    var fila = tabla.rows[i];
    var filaMatriz = [];
    for (var j = 0; j < columnas; j++) {
      var celda = fila.cells[j];
      filaMatriz.push(parseInt(celda.firstChild.value));
    }
    matriz.push(filaMatriz);
  }
  return matriz;
}

// Función para sumar dos matrices
function sumarMatrices(matriz1, matriz2) {
  var filas = matriz1.length;
  var columnas = matriz1[0].length;
  var resultado = [];
  for (var i = 0; i < filas; i++) {
    var fila = [];
    for (var j = 0; j < columnas; j++) {
      fila.push(matriz1[i][j] + matriz2[i][j]);
    }
    resultado.push(fila);
  }
  return resultado;
}

// Función para restar dos matrices
function restarMatrices(matriz1, matriz2) {
  var filas = matriz1.length;
  var columnas = matriz1[0].length;
  var resultado = [];
  for (var i = 0; i < filas; i++) {
    var fila = [];
    for (var j = 0; j < columnas; j++) {
      fila.push(matriz1[i][j] - matriz2[i][j]);
    }
    resultado.push(fila);
  }
  return resultado;
}

// Función para multiplicar dos matrices
function multiplicarMatrices(matriz1, matriz2) {
  var filas1 = matriz1.length;
  var columnas1 = matriz1[0].length;
  var filas2 = matriz2.length;
  var columnas2 = matriz2[0].length;
  if (columnas1 !== filas2) {
    alert('No se pueden multiplicar las matrices. El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz.');
    return [];
  }
  var resultado = [];
  for (var i = 0; i < filas1; i++) {
    var fila = [];
    for (var j = 0; j < columnas2; j++) {
      var suma = 0;
      for (var k = 0; k < columnas1; k++) {
        suma += matriz1[i][k] * matriz2[k][j];
      }
      fila.push(suma);
    }
    resultado.push(fila);
  }
  return resultado;
}

// Función para mostrar una matriz en una tabla
function mostrarMatriz(matriz, tabla) {
  tabla.innerHTML = '';
  var filas = matriz.length;
  var columnas = matriz[0].length;
  for (var i = 0; i < filas; i++) {
    var fila = tabla.insertRow(i);
    for (var j = 0; j < columnas; j++) {
      var celda = fila.insertCell(j);
      celda.innerText = matriz[i][j];
    }
  }
}
