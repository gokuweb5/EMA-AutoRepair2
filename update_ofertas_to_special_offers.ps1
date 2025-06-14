# Script para cambiar "Ofertas" a "Special Offers" en todas las páginas HTML

# 1. Obtener todos los archivos HTML
$htmlFiles = Get-ChildItem -Path "C:\Users\Navarrete\Desktop\EMA-AutoRepair2" -Filter "*.html" -Recurse

# 2. Reemplazar "Ofertas" por "Special Offers" en todos los archivos HTML
foreach ($file in $htmlFiles) {
    Write-Host "Procesando archivo: $($file.FullName)"
    
    # Leer el contenido del archivo
    $content = Get-Content -Path $file.FullName -Raw
    
    # Reemplazar en el menú principal (manteniendo el enlace a ofertas.html)
    $content = $content -replace '<a href="./ofertas.html">Ofertas</a>', '<a href="./ofertas.html">Special Offers</a>'
    $content = $content -replace '<a href="ofertas.html">Ofertas</a>', '<a href="ofertas.html">Special Offers</a>'
    
    # Reemplazar en el menú principal con atributo data-translate
    $content = $content -replace '<a href="./ofertas.html" data-translate="ofertas">Ofertas</a>', '<a href="./ofertas.html" data-translate="special_offers">Special Offers</a>'
    $content = $content -replace '<a href="ofertas.html" data-translate="ofertas">Ofertas</a>', '<a href="ofertas.html" data-translate="special_offers">Special Offers</a>'
    
    # Guardar los cambios
    $content | Set-Content -Path $file.FullName -Force
    
    Write-Host "Archivo actualizado: $($file.FullName)"
}

Write-Host "Proceso completado. 'Ofertas' ha sido cambiado a 'Special Offers' en todas las páginas."
