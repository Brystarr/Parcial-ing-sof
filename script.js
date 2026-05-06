// Manejo de Login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Login sencillo: admin / admin
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if(user === 'admin' && pass === 'admin') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-dashboard').classList.remove('dashboard-hidden');
    } else {
        alert('Credenciales incorrectas (Usa admin/admin)');
    }
});

function logout() {
    location.reload();
}

// Cambio de estado dinámico
function updateStatus(selectElement) {
    const row = selectElement.closest('tr');
    const statusSpan = row.querySelector('.status');
    const newStatus = selectElement.value;

    // Actualizar texto y clase CSS
    statusSpan.textContent = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
    statusSpan.className = `status ${newStatus}`;
    
    console.log(`Estado actualizado a: ${newStatus}`);
}
let orderCount = 102; // Contador para generar IDs automáticos

function addProduct() {
    const productNameInput = document.getElementById('new-product-name');
    const productName = productNameInput.value.trim();

    if (productName === "") {
        alert("Por favor, ingresa el nombre del producto.");
        return;
    }

    const tableBody = document.getElementById('production-table');
    
    // Crear una nueva fila
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>#${orderCount}</td>
        <td>${productName}</td>
        <td><span class="status pendiente">Pendiente</span></td>
        <td>
            <select onchange="updateStatus(this)">
                <option value="pendiente" selected>Pendiente</option>
                <option value="proceso">En Proceso</option>
                <option value="terminado">Terminado</option>
            </select>
        </td>
    `;

    // Añadir la fila a la tabla
    tableBody.appendChild(newRow);

    // Limpiar input e incrementar ID
    productNameInput.value = "";
    orderCount++;
}