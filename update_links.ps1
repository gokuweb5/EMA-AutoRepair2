$directory = "c:\Users\Navarrete\Desktop\EMA-AutoRepair2"
$htmlFiles = Get-ChildItem -Path $directory -Filter "*.html" -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Reemplazar el enlace en la navegación principal
    $content = $content -replace '<a href="#coupons" data-translate="coupons">Coupons</a>', '<a href="./ofertas.html" data-translate="ofertas">Ofertas</a>'
    
    # Reemplazar el enlace en el footer (con o sin atributo data-translate)
    $content = $content -replace '<li><a href="#coupons" data-translate="coupons">Coupons</a></li>', '<li><a href="./ofertas.html" data-translate="ofertas">Ofertas</a></li>'
    $content = $content -replace '<li><a href="#coupons">Coupons</a></li>', '<li><a href="./ofertas.html">Ofertas</a></li>'
    
    # Reemplazar enlaces en botones CTA
    $content = $content -replace '<a href="#coupons" class="cta-button secondary">View Specials</a>', '<a href="./ofertas.html" class="cta-button secondary">View Specials</a>'
    
    Set-Content -Path $file.FullName -Value $content
}

Write-Host "Enlaces actualizados en todos los archivos HTML."
