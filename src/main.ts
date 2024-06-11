import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

import "./style.css";

const map = new Map();

const view = new MapView({
  container: "viewDiv",
  map,
});

const layer = new MapImageLayer({
  // is not working, because URL does **not** contain the term MapServer
  url: new URL("/Census", window.location.origin).href,
  // is working, because URL contains the term MapServer
  // url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer",
});
map.add(layer);

// bonus - how many bookmarks in the webmap?
view.whenLayerView(layer).then(() => {
  view.goTo(layer.fullExtent);

  return layer.findSublayerById(0).load();
}).then(() => {
  const sublayer = layer.findSublayerById(0);

  console.info({
    title: sublayer.title,
    // fields are empty
    fields: sublayer.fields,
    loadStatus: sublayer.loadStatus,
  });
});
