const fs = require('fs');
const path = require('path');

// Directorio donde se encuentran los archivos HTML
const directory = __dirname;

// Función para actualizar los enlaces en un archivo
function updateLinks(filePath) {
    try {
        // Leer el contenido del archivo
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Reemplazar el enlace a los consejos de cuidado del automóvil
        const updatedContent = content.replace(
            /href="#tips" data-translate="car-care"/g, 
            'href="./car-care-tips.html" data-translate="car-care"'
        );
        
        // Guardar el archivo actualizado
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Actualizado: ${path.basename(filePath)}`);
    } catch (error) {
        console.error(`Error al actualizar ${filePath}:`, error);
    }
}

// Obtener todos los archivos HTML en el directorio
fs.readdir(directory, (err, files) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }

    // Filtrar solo archivos HTML
    const htmlFiles = files.filter(file => path.extname(file).toLowerCase() === '.html');
    
    // Actualizar cada archivo HTML
    htmlFiles.forEach(file => {
        const filePath = path.join(directory, file);
        updateLinks(filePath);
    });
    
    console.log('¡Todos los enlaces han sido actualizados!');
});
