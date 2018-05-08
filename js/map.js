function initMap() {
    const bruchis = {
        position: { lat: 47.668741, lng: -117.396868 },
        title: "Bruchi's",
        content: `<h1>Bruchi's</h1><p>Creator of a damn good cheesesteak. A great amount of varying <br>menu choices, perfect for a greasy meal after a night of hard studying.</p>`
    };
    const petesPizza = {
        position: { lat: 47.669708, lng: -117.397013 },
        title: "Pete's Pizza",
        content: "<h1>Pete's Pizza</h1><p>When Pete's advertises themselves as 'The Calzone King', they aren't kidding. <br>Each one is handmade and stuffed with incredible flavor.</p>"
    };
    const ourThaiHouse = {
        position: { lat: 47.670829, lng: -117.396758 },
        title: "Our Thai House",
        content: "<h1>Our Thai House</h1><p>There is no better for cheap, delicious, MSG-filled calorie bombs. <br>Large portion sizes and incredible soups make this place a sure hit.</p>"
    };
    const corkery = { lat: 47.670023, lng: -117.40014 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: corkery
    });

    [bruchis, petesPizza, ourThaiHouse].forEach(location => {
        const { position, title, content } = location;
        const marker = new google.maps.Marker({ position, map, title });
        const infoWindow = new google.maps.InfoWindow({ content });
        marker.addListener("click", () => {
            map.setZoom(18);
            map.setCenter(marker.getPosition());
        });
        marker.addListener("mouseover", () => {
            infoWindow.open(map, marker);
        });
        marker.addListener("mouseout", () => {
            infoWindow.close();
        });
    });
};
