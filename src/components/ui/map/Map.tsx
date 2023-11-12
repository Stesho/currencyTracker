import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import React, { Component, RefObject } from 'react';

import { MAPBOX_API_KEY } from '@/constants/environment/environment';

import banksData from './banksData.json';
import styles from './Map.module.scss';

mapboxgl.accessToken = MAPBOX_API_KEY;

interface MapProps {}
interface MapState {
  lng: number;
  lat: number;
  zoom: number;
}

export class Map extends Component<MapProps, MapState> {
  private readonly mapContainer: RefObject<HTMLDivElement>;

  constructor(props: MapProps) {
    super(props);
    this.state = {
      lng: 27.565557,
      lat: 53.8988757,
      zoom: 11,
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current || '',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom,
    });

    banksData.features.map((feature) => {
      const [longitude, latitude] = feature.geometry.coordinates;
      return new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
    });

    map.on('move', () => {
      this.setState({
        lng: Number(map.getCenter().lng.toFixed(4)),
        lat: Number(map.getCenter().lat.toFixed(4)),
        zoom: Number(map.getZoom().toFixed(2)),
      });
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div className={styles.mapContainer}>
        <div className={styles.sidebar}>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={this.mapContainer} className={styles.map} />
      </div>
    );
  }
}
