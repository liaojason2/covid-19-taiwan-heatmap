// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 25.0519, lng: 12105110 },
    mapTypeId: "satellite",
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];
  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
    new google.maps.LatLng(25.081665,121.460775),
    new google.maps.LatLng(25.0820309,121.4803224),
    new google.maps.LatLng(25.0541399,121.457889),
    new google.maps.LatLng(25.0420505,121.4464988),
    new google.maps.LatLng(25.0411353,121.542942),
    new google.maps.LatLng(25.0675786,121.4867453),
    new google.maps.LatLng(25.0420505,121.4464988),
    new google.maps.LatLng(25.0877151,121.4384842),
    new google.maps.LatLng(25.0842625,121.4726708),
    new google.maps.LatLng(25.0705502,121.3647993),
    new google.maps.LatLng(25.0355169,121.5679057),
    new google.maps.LatLng(25.0400306,121.5602452),
    new google.maps.LatLng(25.0497842,121.291593),
    new google.maps.LatLng(25.0816565,121.4784103),
    new google.maps.LatLng(25.089817,121.4424377),
    new google.maps.LatLng(25.0273744,121.434206),
    new google.maps.LatLng(24.6755274,120.9855324),
    new google.maps.LatLng(24.9636043,121.5234198),
    new google.maps.LatLng(24.8042436,120.966147),
    new google.maps.LatLng(25.1077333,121.5280683),
    new google.maps.LatLng(25.066565,121.480833),
    new google.maps.LatLng(25.015953,121.31448),
    new google.maps.LatLng(25.053309,121.43829),
    new google.maps.LatLng(25.1276792,121.4704272),
    new google.maps.LatLng(25.2915313,121.5658696),
    new google.maps.LatLng(25.0077529,121.302473),
    new google.maps.LatLng(25.2025755,121.4482734),
    new google.maps.LatLng(25.0875783,121.4593567),
    new google.maps.LatLng(25.1209841,121.8261645),
    new google.maps.LatLng(23.8171616,120.7225876),
    new google.maps.LatLng(23.803539,120.714988),
    new google.maps.LatLng(23.0677121,120.1273734),
    new google.maps.LatLng(22.9351511,120.2778068),
    new google.maps.LatLng(22.619636,120.409248),
    new google.maps.LatLng(22.6661259,120.3269494),
    new google.maps.LatLng(24.0593071,120.4314407),
    new google.maps.LatLng(23.7096665,120.2664086),
    new google.maps.LatLng(24.2503532,120.5818515),
    new google.maps.LatLng(24.5714179,120.7092086),
    new google.maps.LatLng(24.6040643,120.7743502),
    new google.maps.LatLng(24.9714212,121.4377736),
    new google.maps.LatLng(25.0361044,121.4981165),
    new google.maps.LatLng(24.974435,121.255718),
    new google.maps.LatLng(25.035779,121.498529),
    new google.maps.LatLng(25.0360985,121.4981758),
    new google.maps.LatLng(25.1295671,121.7527269),
    new google.maps.LatLng(25.1295585,121.7524816),
    new google.maps.LatLng(25.0362253,121.4980199),
    new google.maps.LatLng(24.0796104,120.4560019),
    new google.maps.LatLng(23.9291478,120.316697),
    new google.maps.LatLng(23.5678056,120.3046447),
    new google.maps.LatLng(23.3780597,120.1573736),
    new google.maps.LatLng(23.3270048,120.1603792),
    new google.maps.LatLng(25.0288302,121.4924606),
    new google.maps.LatLng(25.028532,121.533093),
    new google.maps.LatLng(24.1436268,120.6887575),
    new google.maps.LatLng(25.0362168,121.4986012),
    new google.maps.LatLng(23.3270048,120.1603792),
    new google.maps.LatLng(24.8650925,121.2219698),
    new google.maps.LatLng(25.0362168,121.4986012),
    new google.maps.LatLng(25.0288302,121.4924606),
    new google.maps.LatLng(25.028532,121.533093),
    new google.maps.LatLng(24.1436268,120.6887575),
    new google.maps.LatLng(25.1329911,121.7458853),
    new google.maps.LatLng(24.6795451,121.772005),
    new google.maps.LatLng(24.7572722,121.754875),
    new google.maps.LatLng(24.8266567,121.7708908),
    new google.maps.LatLng(25.0375942,121.4990718),
    new google.maps.LatLng(24.995689,121.425117),
    new google.maps.LatLng(24.9949523,121.429016),
    new google.maps.LatLng(24.9949523,121.429016),
  ];
}