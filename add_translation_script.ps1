# Script para añadir el archivo de traducción a todas las páginas HTML
$htmlFiles = Get-ChildItem -Path "C:\Users\Navarrete\Desktop\EMA-AutoRepair2" -Filter "*.html" -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Verificar si el archivo ya incluye el script de traducción
    if (-not ($content -match "translation\.js")) {
        Write-Host "Añadiendo script de traducción a $($file.Name)..."
        
        # Reemplazar la referencia al script menu.js para incluir también el script de traducción
        if ($content -match "<script src=`"js/menu\.js`"></script>") {
            $newContent = $content -replace "<script src=`"js/menu\.js`"></script>", "<script src=`"js/menu.js`"></script>`n    <script src=`"js/translation.js`"></script>"
            Set-Content -Path $file.FullName -Value $newContent
            Write-Host "Script de traducción añadido a $($file.Name)"
        }
        else {
            # Si no encuentra menu.js, añadir antes del cierre del body
            $newContent = $content -replace "</body>", "    <script src=`"js/translation.js`"></script>`n</body>"
            Set-Content -Path $file.FullName -Value $newContent
            Write-Host "Script de traducción añadido a $($file.Name) antes del cierre del body"
        }
    }
    else {
        Write-Host "$($file.Name) ya incluye el script de traducción"
    }
}

Write-Host "Proceso completado. El script de traducción ha sido añadido a todas las páginas HTML."
