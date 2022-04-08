import Mirador from "mirador/dist/mirador.min.js";

Mirador.viewer({
  id: "app",
  window: {
    views: [{ key: "scroll" }, { key: "gallery" }]
  },
  windows: [
    {
      manifestId: "https://purl.stanford.edu/zy841zs4569/iiif/manifest"
    }
  ]
});
