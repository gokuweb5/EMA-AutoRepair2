# Script para actualizar números de teléfono y eliminar enlaces a safety-emissions.html

# 1. Obtener todos los archivos HTML
$htmlFiles = Get-ChildItem -Path "C:\Users\Navarrete\Desktop\EMA-AutoRepair2" -Filter "*.html" -Recurse

# 2. Reemplazar el número de teléfono en todos los archivos HTML
foreach ($file in $htmlFiles) {
    Write-Host "Procesando archivo: $($file.FullName)"
    
    # Leer el contenido del archivo
    $content = Get-Content -Path $file.FullName -Raw
    
    # Reemplazar el número de teléfono en el formato tel:+1234567890 y 123.456.7890
    # Primero verificamos si ya existe la estructura de dos teléfonos
    if ($content -match '<span class="phones-container">') {
        # Ya existe la estructura, solo actualizamos los números
        $content = $content -replace '<a href="tel:[^"]+" class="phone-number"><i class="fas fa-phone"></i>[^<]+</a>', '<a href="tel:5405047831" class="phone-number"><i class="fas fa-phone"></i> 540-504-7831</a>'
    } else {
        # No existe la estructura, reemplazamos el número único por dos números
        $phonePattern = '<a href="tel:\+1234567890" class="phone-number"><i class="fas fa-phone"></i> 123\.456\.7890</a>'
        $phoneReplacement = '<span class="phones-container">' + 
                          '<a href="tel:5405047831" class="phone-number"><i class="fas fa-phone"></i> 540-504-7831</a>' +
                          '<a href="tel:5405047840" class="phone-number"><i class="fas fa-phone"></i> 540-504-7840</a>' +
                          '</span>'
        $content = $content -replace $phonePattern, $phoneReplacement
    }
    
    # Reemplazar cualquier otro número 123.456.7890 que pueda estar en el contenido
    $content = $content -replace '123\.456\.7890', '540-504-7831'
    
    # Reemplazar los enlaces a safety-emissions.html
    $content = $content -replace '<li><a href="./safety-emissions.html">VA Safety & Emissions Inspections</a></li>', ''
    
    # Guardar los cambios
    $content | Set-Content -Path $file.FullName -Force
    
    Write-Host "Archivo actualizado: $($file.FullName)"
}

# 3. Verificar si existe el archivo safety-emissions.html y eliminarlo
$safetyFile = "C:\Users\Navarrete\Desktop\EMA-AutoRepair2\safety-emissions.html"
if (Test-Path $safetyFile) {
    Remove-Item -Path $safetyFile -Force
    Write-Host "Archivo safety-emissions.html eliminado."
} else {
    Write-Host "El archivo safety-emissions.html no existe."
}

Write-Host "Proceso completado."
