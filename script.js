// Ruta al archivo Excel con los usuarios
const archivoExcel = 'usuarios.xlsx'; // Asegúrate de que esté en la misma carpeta que index.html

// Variable global para almacenar los usuarios
let usuarios = [];

// Función para cargar y procesar el archivo Excel
function cargarArchivoExcel() {
    fetch(archivoExcel)
        .then(response => response.arrayBuffer())
        .then(data => {
            // Cargar y leer el archivo Excel
            const workbook = XLSX.read(data, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]]; // La primera hoja
            const json = XLSX.utils.sheet_to_json(sheet);
            usuarios = json.map(user => ({
                username: user.Usuario,  // Nombre de la columna de usuario
                password: user.Password,  // Nombre de la columna de contraseña
                rol: user.Rol // Nombre de la columna de rol
            }));
            console.log("Usuarios cargados desde el Excel:", usuarios);
        })
        .catch(error => console.error('Error al leer el archivo Excel:', error));
}

// Función de validación
function validarUsuario() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    // Buscar si el usuario existe y si la contraseña es correcta
    const usuarioValido = usuarios.find(user => user.username === username && user.password === password);

    if (usuarioValido) {
        alert("¡Inicio de sesión exitoso!");

        // Verificar el rol del usuario
        if (usuarioValido.rol === 'Gestor') {
            // Redirigir al dashboard de gestores
            window.location.href = 'gestor_dashboard.html'; // Cambia esta URL por la página correspondiente para gestores
        } else if (usuarioValido.rol === 'Supervisor') {
            // Redirigir al dashboard de supervisores
            window.location.href = 'supervisor_dashboard.html'; // Cambia esta URL por la página correspondiente para supervisores
        }
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// Evento de clic para validar el formulario
document.querySelector('.input-submit').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    validarUsuario();
});

// Cargar el archivo Excel automáticamente al inicio
cargarArchivoExcel();