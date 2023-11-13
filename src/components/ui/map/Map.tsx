import React, { PureComponent, RefObject } from 'react';
import mapboxgl from 'mapbox-gl';

import { MAPBOX_API_KEY } from '@/constants/environment/environment';
import { CurrencyRated } from '@/types/currency';

import banksData from './banksData.json';

import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.scss';

mapboxgl.accessToken = MAPBOX_API_KEY;

interface MapProps {
  selectedCurrency: CurrencyRated | null;
}

interface MapState {
  lng: number;
  lat: number;
  zoom: number;
}

export class Map extends PureComponent<MapProps, MapState> {
  private readonly mapContainer: RefObject<HTMLDivElement>;

  private map: mapboxgl.Map | null;

  private markers: mapboxgl.Marker[];

  constructor(props: MapProps) {
    super(props);
    this.map = null;
    this.markers = [];
    this.state = {
      lng: 27.565557,
      lat: 53.8988757,
      zoom: 11,
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current || '',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom,
    });
  }

  componentDidUpdate(
    prevProps: Readonly<MapProps>,
    prevState: Readonly<MapState>,
  ) {
    const { selectedCurrency } = this.props;
    const { map } = this;

    this.markers.forEach((marker) => marker.remove());

    if (!selectedCurrency || !map) {
      return;
    }

    const filteredBanks = banksData.features.filter(
      (feature) => feature.currencies.indexOf(selectedCurrency.id) !== -1,
    );

    const newMarkers = filteredBanks.map((feature) => {
      const [longitude, latitude] = feature.geometry.coordinates;
      return new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
    });

    this.markers = [...newMarkers];
  }

  componentWillUnmount() {
    this.map?.remove();
  }

  render() {
    const { selectedCurrency } = this.props;

    return (
      <div className={styles.mapContainer}>
        {!selectedCurrency && <div className={styles.sidebar}>Not found</div>}
        <div ref={this.mapContainer} className={styles.map} />
      </div>
    );
  }
}
