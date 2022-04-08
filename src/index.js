import Mirador from "mirador/dist/mirador.min.js";

Mirador.viewer({
  id: "app",
  window: {
    views: [{ key: "scroll" }, { key: "gallery" }, {key: "book"}],
    defaultView: 'gallery',
  },
  windows: [
    {
      "loadedManifest": "https://iiif.lib.harvard.edu/manifests/drs:48309543",
      "canvasIndex": 2,
      "thumbnailNavigationPosition": 'far-bottom'
    }
  ],

});
