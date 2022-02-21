# leaflet-extensions

This project contains some leaflet extension components for CHMap project.

## Getting Started

`npm install @chmap/leaflet-extensions`

or 

`yarn add @chmap/leaflet-extensions`

## Usage

```
<body>
    <div id="map" />
</body>

```

```

import { AttributionInfo, ZoomLevelButtons } from "@chmap/leaflet-extensions";

const defaultLayer = L.tileLayer("https://stamen-tiles-a.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png",
    { attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> â€” Map data Â© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tileset url:<span style="color:blue">https://stamen-tiles-a.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png</span>' });

const map = L.map("map", {
    center: [35, 108],
    attributionControl: false,
    zoom: 4,
    minZoom: 0,
    maxZoom: 16,
    layers: [defaultLayer],
});
        
AttributionInfo.init(map);

ZoomLevelButtons.addTo(map);

```

## Reference

How to use DistortableImageLayer?

Please check @chmap/geo-referencing.

## License

Licensed under the [GNU GPLv3](LICENSE) license.
