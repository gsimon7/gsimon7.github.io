var louisiana = L.map('louisiana').setView([31.07, -92.40], 5)
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png').addTo(louisiana)
var newOrleans = L.marker([30, -90]).addTo(louisiana)
var southLouisiana = L.polygon([
  [29, -89],
  [30, -91],
  [30, -89]
]).addTo(louisiana)
southLouisiana.bindPopup('Southern Areas of Louisiana.')
newOrleans.bindPopup('French Quarter in New Orleans.')
var latlngs = [
  [30.43, -91.19],
  [30.01, -90.45],
  [29.26, -89.33]
]
var polyline = L.polyline(latlngs, { color: 'red' }).addTo(louisiana)
louisiana.fitBounds(polyline.getBounds())
polyline.bindPopup('Line from Baton Rouge to mouth of Mississippi River.')
