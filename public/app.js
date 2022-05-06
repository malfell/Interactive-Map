// create map
const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
})


// Add OpenStreetMap tiles:
//Need a map layer!
//That {s}, {z}, {x}, and {y} are very important here
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)


// Create and add a geolocation marker:
const marker = L.marker([48.87007, 2.346453])
marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()


// draw the 2nd arrondissement


// create red pin marker


// metro station markers



