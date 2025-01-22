document.getElementById("procesar").addEventListener("pointerup", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const resultados = {};
  
    // Contar las checkboxes activas por grupo
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const grupo = checkbox.dataset.group;
        resultados[grupo] = (resultados[grupo] || 0) + 1;
      }
    });
  
    // Ordenar los resultados por cantidad de activaciones
    const resultadosOrdenados = Object.entries(resultados).sort((a, b) => b[1] - a[1]);
  
    // Mostrar los resultados en la tabla
    const tablaResultados = document.querySelector("#tabla-resultados tbody");
    tablaResultados.innerHTML = ""; // Limpiar la tabla
  
    resultadosOrdenados.forEach(([grupo, cantidad]) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${grupo}</td>
        <td>${cantidad}</td>
      `;
      tablaResultados.appendChild(fila);
    });
  });
  