// Script para manejar las acciones del Dashboard del Gestor
document.getElementById('registrar-gestion').addEventListener('click', function() {
    window.location.href = 'registrar_gestion.html'; // Página para registrar una nueva gestión
});

document.getElementById('ver-historial-gestiones').addEventListener('click', function() {
    window.location.href = 'historial_gestiones.html'; // Página para ver el historial de gestiones
});

document.getElementById('ver-historial-promesas').addEventListener('click', function() {
    window.location.href = 'historial_promesas.html'; // Página para ver el historial de promesas
});

document.getElementById('ver-historial-pagos').addEventListener('click', function() {
    window.location.href = 'historial_pagos.html'; // Página para ver el historial de pagos
});