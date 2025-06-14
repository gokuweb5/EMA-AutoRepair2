$htmlFiles = Get-ChildItem -Path "c:\Users\Navarrete\Desktop\EMA-AutoRepair2" -Filter "*.html" -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Evitar actualizar archivos que ya tienen menu.js
    if ($content -notmatch "menu\.js") {
        # Buscar patrón para insertar menu.js antes de script.js
        if ($content -match "<script src=`"js/script\.js`"></script>") {
            $updatedContent = $content -replace "(<script src=`"js/script\.js`"></script>)", "<script src=`"js/menu.js`"></script>`n    $1"
            Set-Content -Path $file.FullName -Value $updatedContent
            Write-Host "Actualizado: $($file.Name) - Insertado antes de script.js"
        }
        # Si no encuentra script.js, insertar antes del cierre del body
        elseif ($content -match "</body>") {
            $updatedContent = $content -replace "(</body>)", "    <script src=`"js/menu.js`"></script>`n$1"
            Set-Content -Path $file.FullName -Value $updatedContent
            Write-Host "Actualizado: $($file.Name) - Insertado antes del cierre del body"
        }
        else {
            Write-Host "No se pudo actualizar: $($file.Name) - No se encontró un punto de inserción adecuado"
        }
    }
    else {
        Write-Host "Omitido: $($file.Name) - Ya contiene menu.js"
    }
}

Write-Host "Proceso completado."
