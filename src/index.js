import Mirador from "mirador/dist/mirador.min.js";

Mirador.viewer({
  id: "app",
  window: {
    views: [{ key: "gallery" }, {key:"single"}, {key: "book"}],
    defaultView: 'gallery',
    sideBarPanel: 'canvas', // Configure which sidebar is selected by default. Options: info, attribution, canvas, annotations, search
    allowClose: false,
    allowMaximize: true,
  },
  windows: [
    {
      "loadedManifest": "https://iiif.lib.harvard.edu/manifests/drs:48309543",
      "canvasIndex": 2,
      sideBarOpen: true,

    }
  ],

  thumbnailNavigation: {
   defaultPosition: 'off', // Which position for the thumbnail navigation to be be displayed. Other possible values are "far-bottom" or "far-right"
   displaySettings: true, // Display the settings for this in WindowTopMenu
   height: 130, // height of entire ThumbnailNavigation area when position is "far-bottom"
   width: 100, // width of one canvas (doubled for book view) in ThumbnailNavigation area when position is "far-right"
 },

 workspaceControlPanel: {
  enabled: false, // Configure if the control panel should be rendered.  Useful if you want to lock the viewer down to only the configured manifests
},
workspace: {
  type: 'mosaic',
}


});
