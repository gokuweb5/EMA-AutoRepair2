# Script para eliminar todos los enlaces a safety-emissions.html en todas las páginas

# 1. Obtener todos los archivos HTML
$htmlFiles = Get-ChildItem -Path "C:\Users\Navarrete\Desktop\EMA-AutoRepair2" -Filter "*.html" -Recurse

# 2. Eliminar los enlaces a safety-emissions.html en todos los archivos HTML
foreach ($file in $htmlFiles) {
    Write-Host "Procesando archivo: $($file.FullName)"
    
    # Leer el contenido del archivo
    $content = Get-Content -Path $file.FullName -Raw
    
    # Eliminar el enlace en el menú desplegable (diferentes formatos posibles)
    $content = $content -replace '<li><a href="./safety-emissions.html">VA Safety & Emissions Inspections</a></li>', ''
    $content = $content -replace '<li><a href="./safety-emissions.html">VA Safety &amp; Emissions Inspections</a></li>', ''
    $content = $content -replace '<li><a href="safety-emissions.html">VA Safety & Emissions Inspections</a></li>', ''
    $content = $content -replace '<li><a href="safety-emissions.html">VA Safety &amp; Emissions Inspections</a></li>', ''
    
    # Eliminar el enlace en el menú de navegación principal
    $content = $content -replace '<a href="./safety-emissions.html">VA Safety & Emissions Inspections</a>', ''
    $content = $content -replace '<a href="./safety-emissions.html">VA Safety &amp; Emissions Inspections</a>', ''
    $content = $content -replace '<a href="safety-emissions.html">VA Safety & Emissions Inspections</a>', ''
    $content = $content -replace '<a href="safety-emissions.html">VA Safety &amp; Emissions Inspections</a>', ''
    
    # Eliminar la entrada específica del menú desplegable que vemos en la captura de pantalla
    $content = $content -replace '<li><a href="[^"]*">VA Safety & Emissions Inspections</a></li>', ''
    $content = $content -replace '<li><a href="[^"]*">VA Safety &amp; Emissions Inspections</a></li>', ''
    
    # Guardar los cambios
    $content | Set-Content -Path $file.FullName -Force
    
    Write-Host "Archivo actualizado: $($file.FullName)"
}

Write-Host "Proceso completado. Todos los enlaces a safety-emissions.html han sido eliminados."
