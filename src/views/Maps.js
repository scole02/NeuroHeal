import React, { useEffect, useRef } from "react";

function Maps() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement("script");
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD7ZisvRGtLBqxtywj-L0xKNg81jkWHlhA' //+ `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    window.document.body.appendChild(script);

    script.addEventListener("load", () => {
      let google = window.google;
      let map = mapRef.current;
      let lat = 47.621526; // Latitude
      let lng = -122.176878; // Longitude
      const myLatlng = new google.maps.LatLng(lat, lng);
      const mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false,
        zoomControl: true,
      };

      map = new google.maps.Map(map, mapOptions);

      const marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: "Carla's Live Location",
      });

      const contentString =
        '<div class="info-window-content"><h2> She is 3 miles away from home.</h2>' +
        "<p>Carla's Live Location</p></div>";

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    });

    return () => {
      // Cleanup function to remove the script when component unmounts
      window.document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="map-container">
        <div id="map" ref={mapRef} style={{ width: "100%", height: "500px" }}></div>
      </div>
    </>
  );
}

export default Maps;
