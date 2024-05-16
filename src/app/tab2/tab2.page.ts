import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  map!: mapboxgl.Map;

  constructor() {}

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    // Set accessToken directly on Map constructor
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [114.9481, 4.5353], // Brunei coordinates
      zoom: 9,
      accessToken: 'pk.eyJ1Ijoid2FhZmlpcSIsImEiOiJjbHc4cHQwMjQweXR6Mm1vYjRremI5dDRxIn0.xrTCYEb1Sqf9aRNFsklQaQ',
    });

    // Add navigation control
    this.map.addControl(new mapboxgl.NavigationControl());

    // Add geolocation control
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    // Mark a specific location
    const location: mapboxgl.LngLatLike = [114.9481, 4.5353]; // Brunei coordinates

    new mapboxgl.Marker()
      .setLngLat(location)
      .addTo(this.map);
  }
}
