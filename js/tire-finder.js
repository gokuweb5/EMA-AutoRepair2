// Tire Finder Functionality
console.log('Tire Finder JS loaded');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    // Sample vehicle data - In a real implementation, this would come from a database
    const vehicleData = {
        years: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'],
        makes: {
            '2025': ['Acura', 'Audi', 'BMW', 'Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Kia', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Toyota', 'Volkswagen'],
            '2024': ['Acura', 'Audi', 'BMW', 'Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Kia', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Toyota', 'Volkswagen'],
            // Additional years would have similar data
        },
        models: {
            'Acura': ['ILX', 'MDX', 'RDX', 'TLX', 'NSX'],
            'Audi': ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7'],
            'BMW': ['3 Series', '5 Series', 'X3', 'X5', 'X7'],
            'Chevrolet': ['Camaro', 'Corvette', 'Equinox', 'Malibu', 'Silverado', 'Tahoe'],
            'Ford': ['Escape', 'Explorer', 'F-150', 'Mustang', 'Ranger'],
            'Honda': ['Accord', 'Civic', 'CR-V', 'HR-V', 'Odyssey', 'Pilot'],
            'Hyundai': ['Elantra', 'Kona', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson'],
            'Jeep': ['Cherokee', 'Compass', 'Grand Cherokee', 'Wrangler'],
            'Kia': ['Forte', 'Optima', 'Sorento', 'Soul', 'Sportage', 'Telluride'],
            'Mazda': ['CX-5', 'CX-9', 'Mazda3', 'Mazda6', 'MX-5 Miata'],
            'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'GLC', 'GLE'],
            'Nissan': ['Altima', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra'],
            'Toyota': ['Camry', 'Corolla', 'Highlander', 'RAV4', 'Tacoma', 'Tundra'],
            'Volkswagen': ['Atlas', 'Golf', 'Jetta', 'Passat', 'Tiguan']
        },
        trims: {
            'Camry': ['L', 'LE', 'SE', 'XLE', 'XSE', 'TRD'],
            'Corolla': ['L', 'LE', 'SE', 'XLE', 'XSE'],
            'F-150': ['XL', 'XLT', 'Lariat', 'King Ranch', 'Platinum', 'Limited', 'Raptor'],
            'Civic': ['LX', 'Sport', 'EX', 'Touring', 'Si', 'Type R'],
            // Additional models would have similar data
        }
    };

    // Get form elements
    const yearSelect = document.getElementById('vehicle-year');
    console.log('Year select element:', yearSelect);
    
    const makeSelect = document.getElementById('vehicle-make');
    console.log('Make select element:', makeSelect);
    
    const modelSelect = document.getElementById('vehicle-model');
    console.log('Model select element:', modelSelect);
    
    const trimSelect = document.getElementById('vehicle-trim');
    console.log('Trim select element:', trimSelect);
    
    const vehicleForm = document.querySelector('.finder-form');
    console.log('Vehicle form element:', vehicleForm);

    // Populate year dropdown
    function populateYears() {
        yearSelect.innerHTML = '<option value="">Select Year</option>';
        vehicleData.years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        });
    }

    // Populate make dropdown based on selected year
    function populateMakes(year) {
        makeSelect.innerHTML = '<option value="">Select Make</option>';
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        trimSelect.innerHTML = '<option value="">Select Trim (Optional)</option>';
        
        if (year && vehicleData.makes[year]) {
            vehicleData.makes[year].forEach(make => {
                const option = document.createElement('option');
                option.value = make;
                option.textContent = make;
                makeSelect.appendChild(option);
            });
        }
    }

    // Populate model dropdown based on selected make
    function populateModels(make) {
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        trimSelect.innerHTML = '<option value="">Select Trim (Optional)</option>';
        
        if (make && vehicleData.models[make]) {
            vehicleData.models[make].forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        }
    }

    // Populate trim dropdown based on selected model
    function populateTrims(model) {
        trimSelect.innerHTML = '<option value="">Select Trim (Optional)</option>';
        
        if (model && vehicleData.trims[model]) {
            vehicleData.trims[model].forEach(trim => {
                const option = document.createElement('option');
                option.value = trim;
                option.textContent = trim;
                trimSelect.appendChild(option);
            });
        }
    }

    // Event listeners for dropdown changes
    yearSelect.addEventListener('change', function() {
        populateMakes(this.value);
    });

    makeSelect.addEventListener('change', function() {
        populateModels(this.value);
    });

    modelSelect.addEventListener('change', function() {
        populateTrims(this.value);
    });

    // Form submission
    vehicleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real implementation, this would send the data to a server
        // or redirect to a results page
        const year = yearSelect.value;
        const make = makeSelect.value;
        const model = modelSelect.value;
        const trim = trimSelect.value;
        
        if (year && make && model) {
            alert(`Searching for tires for ${year} ${make} ${model} ${trim}...`);
            // In a real implementation, this would redirect to a results page
            // window.location.href = `tire-results.html?year=${year}&make=${make}&model=${model}&trim=${trim}`;
        } else {
            alert('Please select at least Year, Make, and Model');
        }
    });

    // Initialize the form
    console.log('Initializing form...');
    populateYears();
    console.log('Years populated');

    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all tab content
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show corresponding tab content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId + '-tab').classList.add('active');
        });
    });

    // Size search form
    const sizeForm = document.querySelector('#size-tab form');
    if (sizeForm) {
        sizeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const width = document.getElementById('tire-width').value;
            const aspect = document.getElementById('tire-aspect').value;
            const diameter = document.getElementById('tire-diameter').value;
            
            if (width && aspect && diameter) {
                alert(`Searching for tires with size ${width}/${aspect}R${diameter}...`);
                // In a real implementation, this would redirect to a results page
                // window.location.href = `tire-results.html?width=${width}&aspect=${aspect}&diameter=${diameter}`;
            } else {
                alert('Please select Width, Aspect Ratio, and Rim Diameter');
            }
        });
    }

    // Brand selection
    const brandItems = document.querySelectorAll('.brand-item');
    brandItems.forEach(item => {
        item.addEventListener('click', function() {
            const brand = this.querySelector('span').textContent;
            alert(`Searching for ${brand} tires...`);
            // In a real implementation, this would redirect to a results page
            // window.location.href = `tire-results.html?brand=${brand}`;
        });
    });
});
