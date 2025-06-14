# Script para eliminar completamente la entrada de VA Safety & Emissions Inspections del menú

# Obtener todos los archivos HTML
$htmlFiles = Get-ChildItem -Path "C:\Users\Navarrete\Desktop\EMA-AutoRepair2" -Filter "*.html" -Recurse

foreach ($file in $htmlFiles) {
    Write-Host "Procesando archivo: $($file.FullName)"
    
    # Leer el contenido del archivo
    $content = Get-Content -Path $file.FullName -Raw
    
    # Eliminar específicamente la línea completa del menú que contiene VA Safety & Emissions Inspections
    $pattern = '<li><a[^>]*>VA Safety & Emissions Inspections</a></li>'
    $content = $content -replace $pattern, ''
    
    # También eliminar la versión con &amp;
    $pattern = '<li><a[^>]*>VA Safety &amp; Emissions Inspections</a></li>'
    $content = $content -replace $pattern, ''
    
    # Eliminar cualquier otra referencia al texto
    $content = $content -replace 'VA Safety & Emissions Inspections', ''
    $content = $content -replace 'VA Safety &amp; Emissions Inspections', ''
    
    # Guardar los cambios
    $content | Set-Content -Path $file.FullName -Force
    
    Write-Host "Archivo actualizado: $($file.FullName)"
}

Write-Host "Proceso completado. Todas las referencias a VA Safety & Emissions Inspections han sido eliminadas."
