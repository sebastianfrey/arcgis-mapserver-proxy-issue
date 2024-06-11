# Proxied MapImageLayer fails to load Sublayer details

This sample demonstrates how to reproduce an issue with [@arcgis/core/layers/MapImageLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html) when running behind a proxy.

In this sample a proxy named `Census` for the following MapServer-URL is created: `https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer`. This proxied MapServer is then loaded as `MapImageLayer` within the demo application. After setup, the application tries to load details for the sublayer with ID `0`. This fails, because the request to fetch the sublayer details is exectued incorretly to the applications root path as `http://localhost:5173/layers?f=json`. Instead the request should target the proxy URL: `http://localhost:5173/Census/layers?f=json`.

## Get Started

1. Run `npm install` and then start adding modules.
2. Run `npm run dev` to start the dev server.
