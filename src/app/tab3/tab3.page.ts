import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
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
      center: [113.7633, 1.5301], // Sarawak coordinates
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
    const location: mapboxgl.LngLatLike = [113.7633, 1.5301]; // Sarawak coordinates

    new mapboxgl.Marker()
      .setLngLat(location)
      .addTo(this.map);
  }
}
