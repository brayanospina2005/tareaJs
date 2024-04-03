
// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array

const sumArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

  
  // Función filterEvenNumbers: Filtrar números pares de un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con solo los números pares del array original

  const filterEvenNumbers = (array) => {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]);
      }
    }
    return evenNumbers;
  };

  // Función findMaxNumber: Encontrar el mayor número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El mayor número en el array
  
  const findMaxNumber = (array) => {
    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNumber) {
        maxNumber = array[i];
      }
    }
    return maxNumber;
  };
  // Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
  // Parámetros: array (Array) - Un array de strings
  // Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas

  const toUpperCaseStrings = (array) => {
    let upperCaseStrings = [];
    for (let i = 0; i < array.length; i++) {
      upperCaseStrings.push(array[i].toUpperCase());
    }
    return upperCaseStrings;
  }

  
  // Función calculateAverage: Calcular el promedio de un array de números
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El promedio de los números en el array

  const calculateAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  };

  
  // Función sortNumbersAscending: Ordenar un array de números de forma ascendente
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente

  const sortNumbersAscending = (array) => {
    let sortedArray = array.slice();
    sortedArray.sort((a, b) => a - b);
    return sortedArray;
  };
  
  // Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
  // Parámetros: 
  // - array (Array) - Un array de elementos
  // - condition (Function) - Una función de condición que devuelve true o false
  // Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
 
  const findFirstElement = (array, condition) => {
    for (let i = 0; i < array.length; i++) {
      if (condition(array[i])) {
        return array[i];
      }
    }
  };

  // Función countElements: Contar la cantidad de elementos en un array
  // Parámetros: array (Array) - Un array de elementos
  // Devuelve: Number - La cantidad de elementos en el array

  const countElements = (array) => {
    return array.length;
  };
  
  // Función concatenateArrays: Concatenar dos arrays
  // Parámetros: 
  // - array1 (Array) - El primer array a concatenar
  // - array2 (Array) - El segundo array a concatenar
  // Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados
  
  const concatenateArrays = (array1, array2) => {
    return array1.concat(array2);
  };
  
  // Función squareNumbers: Calcular el cuadrado de cada número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original
  
  const squareNumbers = (array) => {
    let squaredNumbers = [];
    for (let i = 0; i < array.length; i++) {
      squaredNumbers.push(array[i] * array[i]);
    }
    return squaredNumbers;
  };

  // Función flecha para agregar habilidades a un jugador de un juego
  /*
  Parámetros de entrada:
  - jugador: objeto que representa al jugador del juego.
  - nuevaHabilidad: string que representa la nueva habilidad a agregar al jugador.

  Lo que hace la función:
  Esta función recibe un objeto de jugador y una nueva habilidad como entrada.
  Verifica si el jugador tiene un arreglo de habilidades. Si no lo tiene, lo crea.
  Luego, agrega la nueva habilidad al arreglo de habilidades del jugador si esta no existe

  Valor de retorno:
  Retorna el objeto jugador modificado con la nueva habilidad agregada.
  */

  const agregarHabilidad = (jugador, nuevaHabilidad) => {
    if (!jugador.habilidades) {
      jugador.habilidades = [];
    }
    if (!jugador.habilidades.includes(nuevaHabilidad)) {
      jugador.habilidades.push(nuevaHabilidad);
    }
    return jugador;
  };


// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.

const calcularDuracionTotal = (peliculas) => {
  let duracionTotal = 0;
  for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].duracion && peliculas[i].duracion > 0) {
      duracionTotal += peliculas[i].duracion;
    }
  }
  return duracionTotal;
};


// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.

const buscarPeliculas = (peliculas, titulo = '', genero = '') => {
  // Filtrar las películas según el título y el género (si se proporcionan)
  return peliculas.filter(pelicula => {
      const coincideTitulo = pelicula.titulo.toLowerCase().includes(titulo.toLowerCase());
      const coincideGenero = genero === '' || pelicula.genero.toLowerCase() === genero.toLowerCase();
      return coincideTitulo && coincideGenero;
  });
};



// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.
const calcularPromedioPuntajes = (peliculas) => {
  if (!peliculas || peliculas.length === 0) {
    return 0;
  }
  let totalPuntajes = 0;
  let peliculasConPuntaje = peliculas.filter((pelicula) => pelicula.puntaje !== undefined && pelicula.puntaje >= 0);
  for (let i = 0; i < peliculasConPuntaje.length; i++) {
    totalPuntajes += peliculasConPuntaje[i].puntaje;
  }
  return totalPuntajes / peliculasConPuntaje.length;
};

// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
const filtrarPorAño = (peliculas, año) => {
  const añoNumero = parseInt(año, 10); // Convertir el año proporcionado a un número entero
  
  return peliculas.filter((pelicula) => pelicula.año === añoNumero);
};


// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
  if (!peliculas || peliculas.length === 0) {
    return 0;
  }
  const peliculasDelGenero = peliculas.filter((pelicula) => pelicula.genero.toLowerCase() === genero.toLowerCase());
  if (peliculasDelGenero.length === 0) {
    return 0;
  }
  const duraciones = peliculasDelGenero.map((pelicula) => pelicula.duracion);
  const sumaDuraciones = duraciones.reduce((total, duracion) => total + duracion, 0);
  const promedioDuracion = sumaDuraciones / duraciones.length;
  return promedioDuracion;
};


// Clase base que representa un vehículo
// Clase que representa un vehículo genérico
class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerInformacion() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
  }
}

// Clase que representa un automóvil
class Automovil extends Vehiculo {
  constructor(marca, modelo, año, color, cilindrada, potencia, numPuertas, numAsientos, tipoTransmision) {
    super(marca, modelo, año);
    this.color = color;
    this.cilindrada = cilindrada;
    this.potencia = potencia;
    this.numPuertas = numPuertas;
    this.numAsientos = numAsientos;
    this.tipoTransmision = tipoTransmision;
  }

  obtenerInformacion() {
    return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Puertas: ${this.numPuertas}, Asientos: ${this.numAsientos}, Transmisión: ${this.tipoTransmision}`;
  }
}

// Clase que representa una motocicleta
class Motocicleta extends Vehiculo {
  constructor(marca, modelo, año, color, cilindrada, potencia, numRuedas, tipo) {
    super(marca, modelo, año);
    this.color = color;
    this.cilindrada = cilindrada;
    this.potencia = potencia;
    this.numRuedas = numRuedas;
    this.tipo = tipo;
  }

  obtenerInformacion() {
    return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ruedas: ${this.numRuedas}, Tipo: ${this.tipo}`;
  }
}

// Clase que representa un camión
class Camion extends Vehiculo {
  constructor(marca, modelo, año, color, cilindrada, potencia, numEjes, capacidadCarga, tipoCarroceria) {
    super(marca, modelo, año);
    this.color = color;
    this.cilindrada = cilindrada;
    this.potencia = potencia;
    this.numEjes = numEjes;
    this.capacidadCarga = capacidadCarga;
    this.tipoCarroceria = tipoCarroceria;
  }

  obtenerInformacion() {
    return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ejes: ${this.numEjes}, Capacidad de Carga: ${this.capacidadCarga}, Tipo de Carrocería: ${this.tipoCarroceria}`;
  }
}

// Clase que representa un autobús
class Autobus extends Vehiculo {
  constructor(marca, modelo, año, color, cilindrada, potencia, capacidadPasajeros, tipoCombustible, tipoMotor) {
    super(marca, modelo, año);
    this.color = color;
    this.cilindrada = cilindrada;
    this.potencia = potencia;
    this.capacidadPasajeros = capacidadPasajeros;
    this.tipoCombustible = tipoCombustible;
    this.tipoMotor = tipoMotor;
  }

  obtenerInformacion() {
    return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Pasajeros: ${this.capacidadPasajeros}, Combustible: ${this.tipoCombustible}, Tipo de Motor: ${this.tipoMotor}`;
  }
}

// Clase que representa una bicicleta
class Bicicleta extends Vehiculo {
  constructor(marca, modelo, año, tipo, numMarchas, material, suspencion, frenos, tipoManubrio) {
    super(marca, modelo, año);
    this.tipo = tipo;
    this.numMarchas = numMarchas;
    this.material = material;
    this.suspencion = suspencion;
    this.frenos = frenos;
    this.tipoManubrio = tipoManubrio;
  }

  obtenerInformacion() {
    return `${super.obtenerInformacion()}, Tipo: ${this.tipo}, Marchas: ${this.numMarchas}, Material: ${this.material}, Suspensión: ${this.suspencion}, Frenos: ${this.frenos}, Tipo de Manubrio: ${this.tipoManubrio}`;
  }
}


/**
 * Por favor no borrar el código que hasta de aqui en adelante.
 */

// Exportar las funciones para su uso en otros archivos.
 
  module.exports = { 
    sumArray, 
    filterEvenNumbers, 
    findMaxNumber, 
    toUpperCaseStrings, 
    calculateAverage, 
    sortNumbersAscending, 
    findFirstElement, 
    countElements, 
    concatenateArrays, 
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
  };
  