var map3 = L.map('map3').setView([40.21, -98.85], 4)
var statesLayer = L.layerGroup().addTo(map3)
var streetsBasemap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map3)
var demographics = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(demographics, function (data) {
  L.geoJSON(data, {
    style: states,
    onEachFeature: popResults
  }).addTo(map3)
})
var states = function (feature) {
  var statePop = feature.properties.POPULATION
  var stateCol = 'olive'
  if (statePop > 1000000) { stateCol = 'green' }
  return {
    color: stateCol,
    weight: 2,
    fillOpacity: 0.5
  }
}
var popResults = function (feature, layer) {
  var stateName = feature.properties.STATE_NAME
  var statePop = feature.properties.POPULATION
  layer.bindPopup('Population of ' + stateName + ' is ' + statePop + '<br>Less Than: 1000000')
  statesLayer.addLayer(layer)
}
var basemaps = {
  'Streets': streetsBasemap,
}
var layers = {
  'Area of each state': statesLayer
}
L.control.layers(basemaps, layers).addto(map3)
