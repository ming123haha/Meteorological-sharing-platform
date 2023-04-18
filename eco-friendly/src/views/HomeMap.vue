<template>
  <div id="viewDiv"></div>
</template>


<script>
import Map from "@arcgis/core/Map";
import View from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Geoprocessor from "@arcgis/core/rest/geoprocessor";
export default {
  data() {
    return {
      zFieldName: "elevation", // 设置默认的属性字段名称
    }
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
      var featureLayer=new FeatureLayer({
        url:"http://localhost:6080/arcgis/rest/services/Meteorological/FeatureServer"
      })

      // 在这里可以使用 ArcGIS API for JavaScript 进行克里金插值
      // 例如创建一个克里金插值任务
      const krigingTask = new Geoprocessor({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Tools/Geoprocessing/Interpolation/GPServer/Kriging"
      });

      // 设置克里金插值任务的参数
      const params = {
        Input_Layer: featureLayer,
        Z_Field: this.zFieldName,
        Output_Name: "output",
        Output_Raster_Dataset: {
          format: "gdb",
          gdbVersion: "3.0",
          prefix: "kriging_",
          folder: "kriging",
        },
      };

      // 执行克里金插值任务
      krigingTask
          .submitJob(params)
          .then((jobInfo) => {
            // 获取克里金插值结果
            const jobId = jobInfo.jobId;
            krigingTask
                .getResultData(jobId, "output")
                .then((result) => {
                  // 在这里可以处理克里金插值结果
                  console.log("克里金插值结果：", result);
                })
                .catch((error) => {
                  console.error("获取克里金插值结果失败：", error);
                });
          })
          .catch((error) => {
            console.error("执行克里金插值任务失败：", error);
          });

      m_Map.add(featureLayer)
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