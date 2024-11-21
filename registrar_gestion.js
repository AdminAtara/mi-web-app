document.getElementById('gestion-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío tradicional del formulario

    // Obtener los valores de los campos del formulario
    const clienteUnico = document.getElementById('cliente_unico').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const tipoGestion = document.getElementById('tipo_gestion').value;
    const descripcion = document.getElementById('descripcion').value;

    // Crear el objeto con los datos a enviar
    const datosGestion = {
        clienteUnico: clienteUnico,
        nombre: nombre,
        telefono: telefono,
        tipoGestion: tipoGestion,
        descripcion: descripcion
    };

    // URL de tu Google Apps Script (la URL de tu Web App)
    const url = 'https://script.google.com/macros/s/AKfycbxROz8FELZwuvValOCk0rOVcyPzkJKuTQp1LRlmdBSL3xjfI6FNo0Eh1ANiN_O7GOirBw/exec';  // Sustituye con tu URL de la Web App

    // Enviar los datos a Google Sheets usando Fetch API
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosGestion)
    })
    .then(response => response.json())  // Cambié de response.text() a response.json()
    .then(data => {
        console.log(data);  // Ver respuesta de Google Apps Script
        if (data.result === 'success') {
            alert('Gestión registrada correctamente');
            document.getElementById('gestion-form').reset();  // Limpiar el formulario
        } else {
            alert('Hubo un error al registrar la gestión');
        }
    })
    .catch(error => {
        console.error('Error al registrar la gestión:', error);
        alert('Hubo un error al registrar la gestión');
    });
});

