<template>

  <body>

  <div id="viewDiv"></div>
  <link
      rel="stylesheet"
      href="https://js.arcgis.com/4.24/esri/themes/light/main.css"
  />
  </body>

</template>
<script>
import { loadModules } from "esri-loader";

export default {
  name: "web-map",
  mounted() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(
        [
          "esri/WebScene",
          "esri/views/SceneView",
          "esri/widgets/Expand",
          "esri/widgets/Weather",
          "esri/widgets/Daylight",
        ],
        { css: true }
    ).then(([WebScene, SceneView, Expand, Weather, Daylight]) => {
      const scene = new WebScene({
        portalItem: {
          id: "c56dab9e4d1a4b0c9d1ee7f589343516"
        }
      });



      // const map = new Map({
      //   basemap: "satellite",
      //   ground: "world-elevation"
      // });

      const view = new SceneView({
        container: "viewDiv",
        map: scene,
        qualityProfile: "high",

        environment: {
          weather: {
            type: "cloudy", // autocasts as new CloudyWeather({ cloudCover: 0.3 })
            cloudCover: 0.3
          },
          atmosphere: {
            quality: "high"
          },
          lighting: {
            waterReflectionEnabled: true,
            ambientOcclusionEnabled: true
          }
        }
      });
      // const weatherExpand = new Expand({
      //   view: view,
      //   content: new Weather({
      //     view: view
      //   }),
      //   group: "top-right",
      //   expanded: true
      // });

      const daylightExpand = new Expand({
        view: view,
        content: new Daylight({
          view: view
        }),
        group: "top-right"
      });
      view.ui.add([ daylightExpand], "top-right");

    });
  },
  beforeUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  },
};
</script>

<style scoped>
#selection {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}



#viewDiv {
  height: 100%;
  max-width: 100%;
}
</style>