import React, { PureComponent, RefObject } from 'react';
import mapboxgl from 'mapbox-gl';

import { MAPBOX_API_KEY } from '@/constants/environment/environment';
import { CurrencyRated } from '@/types/currency';

import banksData from '../../../constants/map/banksData.json';

import 'mapbox-gl/dist/mapbox-gl.css';
import './Popup.scss';
import styles from './Map.module.scss';

mapboxgl.accessToken = MAPBOX_API_KEY;

interface BankProperties {
  type: string;
  properties: {
    title: string;
    description: string;
  };
  currencies: string[];
  geometry: {
    coordinates: number[];
    type: string;
  };
}

interface MapProps {
  selectedCurrency: CurrencyRated | null;
  isNotFound: boolean;
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

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    this.map.addControl(nav, 'bottom-right');

    this.setMarkers(banksData.features);
  }

  componentDidUpdate() {
    const { selectedCurrency, isNotFound } = this.props;

    this.markers.forEach((marker) => marker.remove());

    if (!isNotFound) {
      const banks = selectedCurrency
        ? banksData.features.filter(
            (feature: BankProperties) =>
              feature.currencies.indexOf(selectedCurrency.id) !== -1,
          )
        : banksData.features;

      this.setMarkers(banks);
    }
  }

  componentWillUnmount() {
    this.map?.remove();
  }

  setMarkers = (banks: BankProperties[]) => {
    const { map } = this;

    if (!map) {
      return;
    }

    const newMarkers = banks.map((feature) => {
      const [longitude, latitude] = feature.geometry.coordinates;

      return new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`,
          ),
        )
        .addTo(map);
    });

    this.markers = [...newMarkers];
  };

  render() {
    const { isNotFound } = this.props;

    return (
      <div className={styles.mapContainer}>
        {isNotFound && (
          <div className={styles.notFound}>Selected banks not found</div>
        )}
        <div ref={this.mapContainer} className={styles.map} />
      </div>
    );
  }
}
