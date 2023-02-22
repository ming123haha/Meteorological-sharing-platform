<template>
  <div id="viewDiv"></div>
</template>


<script>
import Map from "@arcgis/core/Map";
import View from "@arcgis/core/views/MapView"
export default {
  data() {
    return {}
  },
  beforeMount() {

  },
  created() {

  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      const m_Map = new Map({
        basemap: "topo-vector"
      })
      const view = new View({
        container: "viewDiv",
        map: m_Map,
        center: [115, 32],
        zoom: 5
      })
      //tif数据图层
      var sceneLayer=new MapImageLayer({
        url:"http://localhost:6080/arcgis/rest/services/JianghuaiFenShuiLing/MapServer"

      })
      view.ui.remove('attribution')
    }
  }
}
</script>

<style>
html,body,#viewDiv{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>