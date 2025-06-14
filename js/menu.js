document.addEventListener('DOMContentLoaded', function() {
    // Contenido del menú de servicios
    const servicesMenu = `
        <div class="dropdown-columns">
            <div class="dropdown-column">
                <h3><i class="fas fa-car-side"></i> Tire Services</h3>
                <ul>
                    <li><a href="./shop-tires.html">Shop Tires</a></li>
                    <li><a href="./wheel-alignment.html">Alignments</a></li>
                    <li><a href="./tire-repair.html">Tire Repair</a></li>
                    <li><a href="./tire-rotation.html">Tire Rotation</a></li>
                    <li><a href="./tpms-services.html">TPMS Services</a></li>
                    <li><a href="./wheel-balancing.html">Wheel Balancing</a></li>
                </ul>
            </div>
            <div class="dropdown-column">
                <h3><i class="fas fa-oil-can"></i> Preventative Maintenance</h3>
                <ul>
                    <li><a href="./oil-change.html">Oil Change</a></li>
                    <li><a href="./safety-emissions.html">VA Safety & Emissions Inspections</a></li>
                    <li><a href="./batteries.html">Batteries</a></li>
                    <li><a href="./belts-hoses.html">Belts & Hoses</a></li>
                    <li><a href="./scheduled-maintenance.html">Scheduled Maintenance</a></li>
                    <li><a href="./accessories.html">Wiper Blades, Light Bulbs & Other Accessories</a></li>
                    <li><a href="./car-care-tips.html">Car Care Tips</a></li>
                </ul>
            </div>
            <div class="dropdown-column">
                <h3><i class="fas fa-wrench"></i> Repair Services</h3>
                <ul>
                    <li><a href="./diagnostics.html">Vehicle Diagnostic</a></li>
                    <li><a href="./ac-service.html">Air Conditioning & Heating</a></li>
                    <li><a href="./brakes.html">Brakes</a></li>
                    <li><a href="./engine-repair.html">Engine Repair</a></li>
                    <li><a href="./exhaust.html">Exhaust System</a></li>
                    <li><a href="./fuel-system.html">Fuel System</a></li>
                    <li><a href="./steering-suspension.html">Steering & Suspension</a></li>
                    <li><a href="./transmission.html">Transmission</a></li>
                </ul>
            </div>

        </div>
    `;

    // Contenido del menú de tienda de llantas
    const tiresMenu = `
        <div class="dropdown-columns">
            <div class="dropdown-column">
                <h3><i class="fas fa-search"></i> Find Tires By</h3>
                <ul>
                    <li><a href="./shop-tires.html#vehicle">Vehicle</a></li>
                    <li><a href="./shop-tires.html#size">Size</a></li>
                    <li><a href="./shop-tires.html#brand">Brand</a></li>
                </ul>
            </div>
            <div class="dropdown-column">
                <h3><i class="fas fa-tags"></i> Shop By Brand</h3>
                <ul>
                    <li><a href="./shop-tires.html#michelin">Michelin</a></li>
                    <li><a href="./shop-tires.html#goodyear">Goodyear</a></li>
                    <li><a href="./shop-tires.html#bridgestone">Bridgestone</a></li>
                    <li><a href="./shop-tires.html#continental">Continental</a></li>
                </ul>
            </div>
            <div class="dropdown-column">
                <h3><i class="fas fa-road"></i> Shop By Type</h3>
                <ul>
                    <li><a href="./shop-tires.html#all-season">All Season</a></li>
                    <li><a href="./shop-tires.html#winter">Winter</a></li>
                    <li><a href="./shop-tires.html#performance">Performance</a></li>
                    <li><a href="./shop-tires.html#all-terrain">All Terrain</a></li>
                </ul>
            </div>
        </div>
    `;

    // Insertar menús en los elementos correspondientes
    const servicesDropdowns = document.querySelectorAll('.dropdown .dropdown-menu');
    
    // Recorrer todos los menús desplegables
    servicesDropdowns.forEach(dropdown => {
        // Verificar si el menú pertenece a servicios o tiendas
        const parentLink = dropdown.parentElement.querySelector('.dropdown-toggle');
        
        if (parentLink) {
            if (parentLink.getAttribute('data-translate') === 'services' || 
                parentLink.textContent.includes('Services')) {
                dropdown.innerHTML = servicesMenu;
            } else if (parentLink.getAttribute('data-translate') === 'shop-tires' || 
                       parentLink.textContent.includes('Shop Tires')) {
                dropdown.innerHTML = tiresMenu;
            }
        }
    });
    
    // Asegurar que los enlaces en el menú desplegable funcionen correctamente
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        });
    });
    
    // Cerrar menús al hacer clic fuera de ellos
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});
