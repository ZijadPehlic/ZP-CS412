let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 44.2008, lng: 17.792 },
        zoom: 13,
    });
    }