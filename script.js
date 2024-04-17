async function obtenerCervezas() {
    // URL de la API
    const apiUrl = 'https://api.sampleapis.com/beers/ale';
  
    try {
      // Realizar la solicitud a la API utilizando fetch y esperar la respuesta
      const response = await fetch(apiUrl);
  
      // Verificar si la solicitud fue exitosa (código de estado HTTP 200-299)
      if (!response.ok) {
        throw new Error('Ocurrió un error al obtener los datos de la API');
      }
  
      // Parsear la respuesta JSON y esperar a que se complete
      const data = await response.json();
  
      // Obtener la referencia del elemento de la tabla en el HTML
      const tabla = document.getElementById('tabla-cervezas');
  
      // Iterar sobre los datos y crear filas de la tabla
      data.forEach(beer => {
        // Crear una nueva fila
        const fila = tabla.insertRow();
  
        // Insertar celdas en la fila con los datos de la cerveza
        const nombreCelda = fila.insertCell();
        nombreCelda.textContent = beer.name;
  
        const estiloCelda = fila.insertCell();
        estiloCelda.textContent = beer.style;
      });
    } catch (error) {
      // Capturar y manejar errores
      console.error('Error:', error);
    }
  }
  
  // Llamar a la función para obtener las cervezas
  obtenerCervezas();