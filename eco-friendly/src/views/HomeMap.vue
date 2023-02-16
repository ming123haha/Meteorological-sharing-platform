<template>
  <div class="home_div">
    <div id="container"></div>
      <div class="map_title">
        <el-switch
            v-model="value1"
            active-text="显示空气质量热力图"
            inactive-text=""
            @change="changValue()">
        </el-switch>
      </div>
    <div>
      <echartsWatch v-show="showinfo" ref="echartsWatch" :selectstaion="thisstation" />
    </div>

  </div>

</template>


<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import echartsWatch from "@/components/echartsWatch";
export default {
  components:{echartsWatch},
  data() {
    return {
      thisstation:"",
      showinfo:false,
      lngLats: [{}],
      marker: null,
      value1: false,
      map: null,
      heatMap: null,
      markers: [],
      infoWindow:{},
      //所有气象站点的经纬度
      lngLat: [[117.1959, 31.7848], [117.3072, 31.8764], [117.2588, 31.8707], [117.1604, 31.9052], [117.25, 31.8571], [117.266, 31.9436],
        [117.336, 31.8586], [117.3027, 31.7964], [117.2776, 31.7385], [117.1318, 31.8403], [117.3803, 31.9147], [118.3714, 31.4134], [118.3673, 31.3131],
        [118.4022, 31.3839], [118.4209, 31.3707], [118.4781, 31.3225], [118.2746, 31.2326], [117.396, 32.939], [117.3605, 32.9427], [117.4185, 32.8911],
        [117.3533, 32.9673], [117.3145, 32.8977], [117.3092, 32.9314], [116.8305, 32.7727], [117.0067, 32.6524], [116.8569, 32.5951], [116.8281, 32.633],
        [116.6325, 32.6201], [117.0566, 32.6531], [117.0108, 32.5893], [118.5092, 31.6837], [118.5024, 31.6449], [118.5228, 31.7231], [118.48, 31.6928],
        [118.6245, 31.7241], [118.4918, 31.6809], [116.8004, 33.975], [116.8091, 33.9007], [116.7856, 33.9477], [116.8873, 33.9836], [117.8177, 30.9412],
        [117.8059, 30.9273], [117.7807, 30.9413], [117.7439, 30.8792], [117.846, 30.9413], [117.8483, 30.97], [117.0809, 30.5177], [117.0331, 30.5119],
        [116.9896, 30.6145], [117.0598, 30.5351], [118.2903, 29.6963], [118.327, 29.7178], [118.1371, 30.2756], [118.3093, 32.3153], [118.3244, 32.2786],
        [118.3118, 32.3038], [115.8277, 32.8929], [115.8554, 32.8605], [115.784, 32.8892], [115.7901, 32.8631], [115.836, 32.9183], [116.989, 33.6306],
        [116.9509, 33.666], [116.9708, 33.591], [116.9884, 33.6305], [116.9648, 33.6252], [116.5079, 31.737], [118.4738, 31.7643], [116.4996, 31.7905],
        [116.5567, 31.7886], [115.8072, 33.8399], [115.7789, 33.8518], [115.7633, 33.8034], [117.47, 30.6618], [117.4974, 30.6539], [117.4918, 30.6617],
        [117.5627, 30.695], [117.5038, 30.6243], [118.7581, 30.9454], [118.7385, 30.9743], [118.7173, 30.9427], [118.7724, 30.9141]
      ],
      links: [['https://baike.baidu.com/item/%E6%98%8E%E7%8F%A0%E5%B9%BF%E5%9C%BA/13481579','明珠广场'],
        'https://baike.baidu.com/item/%E4%B8%89%E9%87%8C%E8%A1%97%E8%A1%97%E9%81%93/5324306',
        'https://baike.baidu.com/item/%E7%90%A5%E7%8F%80%E5%B1%B1%E5%BA%84/6818170',
        ' https://baike.baidu.com/item/%E8%9C%80%E5%B1%B1%E6%B9%96/16816476',
        ' https://baike.baidu.com/item/%E9%95%BF%E6%B1%9F%E4%B8%AD%E8%B7%AF/20864340',
        ' https://baike.baidu.com/item/%E5%BA%90%E9%98%B3%E5%8C%BA?fromtitle=%E5%90%88%E8%82%A5%E5%B8%82%E5%BA%90%E9%98%B3%E5%8C%BA&fromid=8337928',
        'https://baike.baidu.com/item/%E7%91%B6%E6%B5%B7%E5%8C%BA?fromtitle=%E5%90%88%E8%82%A5%E5%B8%82%E7%91%B6%E6%B5%B7%E5%8C%BA&fromid=8337800',
        'https://baike.baidu.com/item/%E5%8C%85%E6%B2%B3%E5%8C%BA?fromtitle=%E5%90%88%E8%82%A5%E5%B8%82%E5%8C%85%E6%B2%B3%E5%8C%BA&fromid=8337876',
        'https://baike.baidu.com/item/%E6%BB%A8%E6%B9%96%E6%96%B0%E5%8C%BA/3654403',
        'https://baike.baidu.com/item/%E5%90%88%E8%82%A5%E9%AB%98%E6%96%B0%E6%8A%80%E6%9C%AF%E4%BA%A7%E4%B8%9A%E5%BC%80%E5%8F%91%E5%8C%BA/7312945',
      'https://baijiahao.baidu.com/s?id=1719244954568436350&wfr=spider&for=pc',
      'https://baike.baidu.com/item/%E8%8A%9C%E6%B9%96%E5%B8%82%E7%8E%AF%E5%A2%83%E7%9B%91%E6%B5%8B%E4%B8%AD%E5%BF%83%E7%AB%99',
       ' https://baike.baidu.com/item/%E8%8A%9C%E6%B9%96%E5%B8%82%E7%A7%91%E6%8A%80%E5%88%9B%E6%96%B0%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83/22224147?fr=aladdin'
    ,'https://www.tianyancha.com/company/3147049994',
         'https://www.kq36.cn/whjmyy/Introduce.asp',
      'https://baike.baidu.com/item/%E8%8A%9C%E6%B9%96%E5%B8%82%E6%B0%94%E8%B1%A1%E5%B1%80/4190470',
        'https://baike.baidu.com/item/%E6%B8%85%E8%8B%91%E7%A4%BE%E5%8C%BA',
       'https://baike.baidu.com/item/%E5%AE%89%E5%BE%BD%E6%89%AC%E5%AD%90%E8%81%8C%E4%B8%9A%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2/10685851',
 'https://baike.baidu.com/item/%E8%9A%8C%E5%9F%A0%E5%B8%82%E5%B7%A5%E4%BA%BA%E7%96%97%E5%85%BB%E9%99%A2',
        'https://baike.baidu.com/item/%E8%9A%8C%E5%9F%A0%E7%99%BE%E8%B4%A7%E5%A4%A7%E6%A5%BC/4621446',
        'https://baike.baidu.com/item/%E8%9A%8C%E5%9F%A0%E5%AD%A6%E9%99%A2',
        'https://baike.baidu.com/item/%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%94%BF%E5%BA%9C',
      ' https://baike.baidu.com/item/%E8%9A%8C%E5%9F%A0%E9%AB%98%E6%96%B0%E6%8A%80%E6%9C%AF%E4%BA%A7%E4%B8%9A%E5%BC%80%E5%8F%91%E5%8C%BA/6338122',
        'https://baike.baidu.com/item/%E8%9A%8C%E5%9F%A0%E7%94%B0%E5%AE%B6%E7%82%B3%E4%B8%AD%E5%AD%A6',
       'https://baike.baidu.com/item/%E6%B7%AE%E5%8D%97%E5%B8%82%E6%BD%98%E9%9B%86%E5%8C%BA%E4%BA%BA%E6%B0%91%E6%94%BF%E5%BA%9C',
        'https://baike.baidu.com/item/%E6%B7%AE%E5%8D%97%E5%B8%88%E8%8C%83%E5%AD%A6%E9%99%A2/152646',
        'https://baike.baidu.com/item/%E6%B7%AE%E5%8D%97%E5%B8%82%E8%B0%A2%E5%AE%B6%E9%9B%86%E5%8C%BA%E4%BA%BA%E6%B0%91%E6%94%BF%E5%BA%9C',
      'https://baike.baidu.com/item/%E6%B7%AE%E5%8D%97%E5%B8%82%E5%85%AB%E5%85%AC%E5%B1%B1%E5%8C%BA%E4%BA%BA%E6%B0%91%E6%94%BF%E5%BA%9C',
       'https://baike.baidu.com/item/%E7%84%A6%E5%B2%97%E6%B9%96%E7%94%9F%E6%80%81%E6%97%85%E6%B8%B8%E5%BA%A6%E5%81%87%E5%8C%BA/10119958',
       'http://jkq.huainan.gov.cn/zwgk/tzgg/551636009.html',
        'https://baike.baidu.com/item/%E5%B1%B1%E5%8D%97%E6%96%B0%E5%8C%BA',
        'https://baike.baidu.com/item/%E9%A9%AC%E9%9E%8D%E5%B1%B1%E5%B8%82%E6%B9%96%E4%B8%9C%E8%B7%AF%E5%9B%9B%E5%B0%8F/3771704',
       'https://baike.baidu.com/item/%E9%A9%AC%E9%9E%8D%E5%B1%B1%E5%BC%80%E5%8F%91%E5%8C%BA/4619491',
      'https://baike.baidu.com/item/%E9%A9%AC%E9%9E%8D%E5%B1%B1%E6%85%88%E6%B9%96%E9%AB%98%E6%96%B0%E6%8A%80%E6%9C%AF%E4%BA%A7%E4%B8%9A%E5%BC%80%E5%8F%91%E5%8C%BA/2017497',
'https://baike.baidu.com/item/%E9%A9%AC%E9%9E%8D%E5%B1%B1%E9%92%A2%E9%93%81%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/7046633?fr=aladdin'
       , 'https://baike.baidu.com/item/%E9%A9%AC%E9%9E%8D%E5%B1%B1%E6%BF%AE%E5%A1%98%E8%87%AA%E7%84%B6%E9%A3%8E%E6%99%AF%E5%8C%BA/9969512',
        'https://baike.baidu.com/item/%E9%9B%A8%E5%B1%B1%E5%8C%BA/219223',
        'https://baike.baidu.com/item/%E6%B7%AE%E5%8C%97%E5%B8%82%E7%8E%AF%E5%A2%83%E7%9B%91%E6%B5%8B%E7%AB%99',
      'https://baike.baidu.com/item/%E6%B7%AE%E5%8C%97%E5%B8%82%E7%83%88%E5%B1%B1%E5%8C%BA%E4%BA%BA%E6%B0%91%E6%94%BF%E5%BA%9C%E5%8A%9E%E5%85%AC%E5%AE%A4',
       'https://baike.baidu.com/item/%E6%B7%AE%E5%8C%97%E8%81%8C%E4%B8%9A%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2/4022792',
       'https://baike.baidu.com/item/%E6%9D%9C%E9%9B%86%E5%8C%BA%E4%BA%BA%E6%B0%91%E6%A3%80%E5%AF%9F%E9%99%A2/12805714',
       'https://baike.baidu.com/item/%E9%93%9C%E9%99%B5%E5%B8%82%E7%AC%AC%E5%9B%9B%E4%B8%AD%E5%AD%A6',
        'https://baike.baidu.com/item/%E9%93%9C%E9%99%B5%E5%B8%82%E4%BA%A4%E9%80%9A%E8%BF%90%E8%BE%93%E5%B1%80/1148250',
        'https://www.mee.gov.cn/home/ztbd/rdzl/sskf/kfss/ahs/dep/201909/t20190930_736381.shtml',
         'https://baike.baidu.com/item/%E9%93%9C%E9%99%B5%E5%B8%82%E7%AC%AC%E4%B9%9D%E4%B8%AD%E5%AD%A6',
        'https://baike.baidu.com/item/%E9%93%9C%E9%99%B5%E8%A5%BF%E6%B9%96%E6%96%B0%E5%8C%BA/6211398',
       'https://baike.baidu.com/item/%E9%93%9C%E9%99%B5%E5%B8%82%E4%B8%AD%E7%AD%89%E8%81%8C%E4%B8%9A%E6%95%99%E8%82%B2%E4%B8%AD%E5%BF%83/7827886',
        'https://baike.baidu.com/item/%E5%AE%89%E5%BA%86%E5%B8%82%E7%8E%AF%E5%A2%83%E4%BF%9D%E6%8A%A4%E5%B1%80/6950553',
       'https://www.tianyancha.com/company/2719897818',
       'https://baike.baidu.com/item/%E5%AE%89%E5%BA%86%E5%B8%88%E8%8C%83%E5%A4%A7%E5%AD%A6/4498780',
      'https://baike.baidu.com/item/%E5%AE%89%E5%BA%86%E5%B8%82%E4%BA%BA%E6%B0%91%E4%BB%A3%E8%A1%A8%E5%A4%A7%E4%BC%9A',
       'http://aqicn.org/city/china/huangshan/yananlu89hao/cn/',
       'https://aqicn.org/city/china/huangshan/huangshandonglu89hao/cn/',
        'https://baike.baidu.com/item/%E9%BB%84%E5%B1%B1%E5%8C%BA%E4%BA%BA%E6%B0%91%E6%94%BF%E5%BA%9C%E8%A1%8C%E6%94%BF%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83/8206150',
        'https://baike.baidu.com/item/%E6%BB%81%E5%B7%9E%E8%80%81%E5%B9%B4%E5%A4%A7%E5%AD%A6%E6%A0%A1%E5%8A%A1%E5%A7%94%E5%91%98%E4%BC%9A',
       'https://www.tianyancha.com/company/511464253',
         'https://baike.baidu.com/item/%E6%BB%81%E5%B7%9E%E5%B8%82%E4%BA%BA%E6%B0%91%E6%94%BF%E5%BA%9C%E5%8A%9E%E5%85%AC%E5%AE%A4/5676433',
      'https://baike.baidu.com/item/%E6%BB%81%E5%B7%9E%E5%B8%82%E5%9B%BE%E4%B9%A6%E9%A6%86',
       'https://baike.baidu.com/item/%E9%98%9C%E9%98%B3%E5%B8%82%E7%8E%AF%E5%A2%83%E4%BF%9D%E6%8A%A4%E7%9B%91%E6%B5%8B%E7%AB%99',
      ' https://baike.baidu.com/item/%E9%98%9C%E9%98%B3%E7%BB%8F%E6%B5%8E%E6%8A%80%E6%9C%AF%E5%BC%80%E5%8F%91%E5%8C%BA?fromtitle=%E9%98%9C%E9%98%B3%E5%BC%80%E5%8F%91%E5%8C%BA&fromid=15631398',
       ' https://baike.baidu.com/item/%E9%98%9C%E9%98%B3%E8%81%8C%E4%B8%9A%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2/6270097',
      'https://baike.baidu.com/item/%E9%98%9C%E9%98%B3%E5%B8%82%E8%A7%84%E5%88%92%E5%B1%95%E7%A4%BA%E9%A6%86',
        'https://baike.baidu.com/item/%E6%9E%A3%E5%9B%AD%E7%A4%BE%E5%8C%BA%E5%B1%85%E5%A7%94%E4%BC%9A/6415184',
        'https://baike.baidu.com/item/%E5%AE%BF%E5%B7%9E%E7%AB%99/6495749',
      'https://baike.baidu.com/search/none?word=%E5%AE%BF%E5%B7%9E%E5%B8%82%E8%BF%9C%E8%88%AA%E5%8D%9A%E7%89%A9%E9%A6%86&pn=0&rn=10&enc=utf8',
         'https://baike.baidu.com/item/%E5%AE%BF%E5%B7%9E%E5%B8%82%E7%A4%BE%E4%BC%9A%E7%A6%8F%E5%88%A9%E4%B8%AD%E5%BF%83',
        'https://baike.baidu.com/item/%E5%AE%BF%E5%B7%9E%E5%AD%A6%E9%99%A2',
       'https://baike.baidu.com/item/%E5%AE%89%E5%BE%BD%E7%9C%81%E7%9A%96%E5%8C%97%E7%85%A4%E7%94%B5%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8?fromtitle=%E7%9A%96%E5%8C%97%E7%85%A4%E7%94%B5%E9%9B%86%E5%9B%A2&fromid=3092296',
       'https://aqicn.org/city/china/liuan/jiancedalou/cn/',
       ' https://baike.baidu.com/search/none?word=%E5%85%AD%E5%AE%89%E5%B8%82%E7%9A%96%E8%A5%BF%E5%AD%A6%E9%99%A2&pn=0&rn=10&enc=utf8',
       ' https://www.11467.com/liuan/co/11848.htm',
       'https://baike.baidu.com/item/%E5%85%AD%E5%AE%89%E7%BB%8F%E6%B5%8E%E6%8A%80%E6%9C%AF%E5%BC%80%E5%8F%91%E5%8C%BA/10934339',
       ' https://www.mee.gov.cn/home/ztbd/rdzl/sskf/kfss/ahs/dep/201910/t20191004_736533.shtml',
       'https://baike.baidu.com/item/%E4%B8%89%E5%9B%BD%E6%8F%BD%E8%83%9C%E5%AE%AB/166084',
         'https://baike.baidu.com/item/%E4%BA%B3%E5%B7%9E%E5%AD%A6%E9%99%A2',
       'https://baike.baidu.com/item/%E6%B1%A0%E5%B7%9E%E5%AD%A6%E9%99%A2',
        'https://baike.baidu.com/item/%E5%B9%B3%E5%A4%A9%E6%B9%96%E9%A3%8E%E6%99%AF%E5%8C%BA/2366084',
      ' https://baike.baidu.com/item/%E6%B1%A0%E5%B7%9E%E5%9B%BD%E9%99%85%E4%BC%9A%E5%B1%95%E4%B8%AD%E5%BF%83/6508670',
       'https://baike.baidu.com/item/%E6%B1%A0%E5%B7%9E%E5%B8%82%E7%AC%AC%E5%85%AB%E4%B8%AD%E5%AD%A6/750356',
       ' https://www.tianyancha.com/company/3097444069',
       ' https://aqicn.org/city/china/xuancheng/aofengzizhan/cn/',
        'https://aqicn.org/city/china/xuancheng/jingtingshanzizhan/cn/',
        'https://aqicn.org/city/china/xuancheng/kaifaquzizhan/cn/',
       'https://ditu.so.com/?pid=31b647151a1db3b7&src=seo',],
      allcitys:["明珠广场","三里街","琥珀山庄","董铺水库(对照点)","长江中路","庐阳区","瑶海区","包河区","滨湖新区","高新区","高教基地","监测站","科创中心","四水厂","济民医院(对照点)",
        "市气象局","清苑社区","扬子职业技术学院","工人疗养院","百货大楼","蚌埠学院", "淮上区政府","高新区","蚌埠田家炳中学","潘新区政府","师范学院","谢家集区政府","八公山区政府",
        "焦岗湖风景区管理处(对照点)","经济技术开发区消防队山南新区","湖东路四小","开发区","慈湖","马钢动力厂","濮塘(对照点)","雨山","监测站","烈山区政府","职业技术学院","社集区检察院"
        ,"市第四中学","市公路局","市新民污水厂","市第九中学","车站新区","市职教基地","环科院","马山宾馆","安庆大学","市人大","延安路89号","黄山东路89号","黄山区政府5号楼",
        "老年大学","人大宾馆","市政府原办公楼","图书馆","市监测站","开发区","阜阳职业技术学院","市规划馆","枣园社区","火车站","远航博物馆","社会福利中心","宿州学院","皖北煤电集团",
        "监测大楼","皖西学院","朝阳厂","开发区","污水处理厂","三国揽胜宫","亳州学院","池州学院","平天湖(对照点)","展览馆","第八中学站","第十二中学" ,"鳌峰子站","敬亭山子站","开发区子站","夏渡子站"],

    }
  },
  beforeMount() {
    this.initCount();
  },
  created() {

  },
  mounted() {

    //DOM初始化完成进行地图初始化
    this.initMap();
  },
  methods: {
    initCount(){
      this.request.get("/nowatmospheredata").then(res=>{
        this.lngLats=res
        //console.log("被执行了!")
      })

    },
    changValue() {
      // console.log(this.value1)
      if (!this.value1) {
        let data = []
        this.heatMap.setDataSet({
          data: data,
          max: 100
        });
      } else {

        //#region data1数据
        var data1=[{
          "lng": 117.1959,
          "lat": 31.7848,
          "count":this.lngLats[0].aqi
        },
          {
            "lng":117.3072,
            "lat":31.8764,
            "count":this.lngLats[1].aqi
          },
          {
            "lng":117.2588,
            "lat":31.8707,
            "count":this.lngLats[2].aqi
          },
          {
            "lng":117.1604,
            "lat":31.9052,
            "count":this.lngLats[3].aqi
          },
          {
            "lng":117.25,
            "lat":31.8571,
            "count":this.lngLats[4].aqi
          },
          {
            "lng":117.266,
            "lat":31.9436,
            "count":this.lngLats[5].aqi
          },{
            "lng":117.336,
            "lat":31.8586,
            "count":this.lngLats[6].aqi
          },{
            "lng":117.3027,
            "lat":31.7964,
            "count":this.lngLats[7].aqi
          },{
            "lng":117.2776,
            "lat":31.7385,
            "count":this.lngLats[8].aqi
          },{
            "lng":117.1318,
            "lat":31.8403,
            "count":this.lngLats[9].aqi
          },{
            "lng":117.3803,
            "lat":31.9147,
            "count":this.lngLats[10].aqi
          },{
            "lng":118.3606,
            "lat":31.3519,
            "count":this.lngLats[11].aqi
          },{
            "lng":118.3714,
            "lat":31.4134,
            "count":this.lngLats[12].aqi
          },{
            "lng":118.3673,
            "lat":31.3131,
            "count":this.lngLats[13].aqi
          },{
            "lng":118.4022,
            "lat":31.3839,
            "count":this.lngLats[14].aqi
          },{
            "lng":118.4209,
            "lat":31.3707,
            "count":this.lngLats[15].aqi
          },{
            "lng":118.4781,
            "lat":31.3225,
            "count":this.lngLats[16].aqi
          },{
            "lng":118.2746,
            "lat":31.2326,
            "count":this.lngLats[17].aqi
          },{
            "lng":117.266,
            "lat":32.939,
            "count":this.lngLats[18].aqi
          },{
            "lng":117.3605,
            "lat":32.9427,
            "count":this.lngLats[19].aqi
          },{
            "lng":117.4185,
            "lat":32.8911,
            "count":this.lngLats[20].aqi
          },{
            "lng":117.3533,
            "lat":32.9673,
            "count":this.lngLats[21].aqi
          },{
            "lng":117.3145,
            "lat":32.8977,
            "count":this.lngLats[22].aqi
          },{
            "lng":117.3092,
            "lat":32.9314,
            "count":this.lngLats[23].aqi
          },{
            "lng":116.8305,
            "lat":32.7727,
            "count":this.lngLats[24].aqi
          },{
            "lng":117.0067,
            "lat":32.6524,
            "count":this.lngLats[25].aqi
          },{
            "lng":116.8569,
            "lat":32.5951,
            "count":this.lngLats[26].aqi
          },{
            "lng":116.8281,
            "lat":32.633,
            "count":this.lngLats[27].aqi
          },{
            "lng":116.6325,
            "lat":32.6201,
            "count":this.lngLats[28].aqi
          },{
            "lng":117.0566,
            "lat":32.6531,
            "count":this.lngLats[29].aqi
          },{
            "lng":117.0108,
            "lat":32.5893,
            "count":this.lngLats[30].aqi
          },{
            "lng":118.5092,
            "lat":31.6837,
            "count":this.lngLats[31].aqi
          },{
            "lng":118.5024,
            "lat":31.6449,
            "count":this.lngLats[32].aqi
          },{
            "lng":118.5228,
            "lat":31.7231,
            "count":this.lngLats[33].aqi
          },{
            "lng":118.48,
            "lat":31.6928,
            "count":this.lngLats[34].aqi
          },{
            "lng":118.6245,
            "lat":31.7241,
            "count":this.lngLats[35].aqi
          },{
            "lng":118.4918,
            "lat":31.6809,
            "count":this.lngLats[36].aqi
          },{
            "lng":116.8004,
            "lat":33.975,
            "count":this.lngLats[37].aqi
          },{
            "lng":116.8091,
            "lat":33.9007,
            "count":this.lngLats[38].aqi
          },{
            "lng":116.7856,
            "lat":33.9477,
            "count":this.lngLats[39].aqi
          },{
            "lng":116.8873,
            "lat":33.9836,
            "count":this.lngLats[40].aqi
          },{
            "lng":117.8177,
            "lat":30.9412,
            "count":this.lngLats[41].aqi
          },{
            "lng":117.8059,
            "lat":30.9273,
            "count":this.lngLats[42].aqi
          },{
            "lng":117.7807,
            "lat":30.9413,
            "count":this.lngLats[43].aqi
          },{
            "lng":117.7439,
            "lat":30.8792,
            "count":this.lngLats[44].aqi
          },{
            "lng":117.846,
            "lat":30.9413,
            "count":this.lngLats[45].aqi
          },{
            "lng":117.8483,
            "lat":30.97,
            "count":this.lngLats[46].aqi
          },{
            "lng":117.0809,
            "lat":30.5177,
            "count":this.lngLats[47].aqi
          },{
            "lng":117.0331,
            "lat":30.5119,
            "count":this.lngLats[48].aqi
          },{
            "lng":116.9896,
            "lat":30.6145,
            "count":this.lngLats[49].aqi
          },{
            "lng":117.0598,
            "lat":30.5351,
            "count":this.lngLats[50].aqi
          },{
            "lng":118.2903,
            "lat":29.6963,
            "count":this.lngLats[51].aqi
          },{
            "lng":118.327,
            "lat":29.7178,
            "count":this.lngLats[52].aqi
          },{
            "lng":118.1371,
            "lat":30.2756,
            "count":this.lngLats[53].aqi
          },{
            "lng":118.3093,
            "lat":32.3153,
            "count":this.lngLats[54].aqi
          },{
            "lng":118.3244,
            "lat":32.2786,
            "count":this.lngLats[55].aqi
          },{
            "lng":118.3118,
            "lat":32.3038,
            "count":this.lngLats[56].aqi
          },{
            "lng":118.3267,
            "lat":32.2634,
            "count":this.lngLats[57].aqi
          },{
            "lng":115.8277,
            "lat":32.8929,
            "count":this.lngLats[58].aqi
          },{
            "lng":115.8554,
            "lat":32.8605,
            "count":this.lngLats[59].aqi
          },{
            "lng":115.784,
            "lat":32.8892,
            "count":this.lngLats[60].aqi
          },{
            "lng":115.7901,
            "lat":32.8613,
            "count":this.lngLats[61].aqi
          },{
            "lng":115.836,
            "lat":32.9183,
            "count":this.lngLats[62].aqi
          },{
            "lng":116.989,
            "lat":33.6306,
            "count":this.lngLats[63].aqi
          },{
            "lng":116.9509,
            "lat":33.666,
            "count":this.lngLats[64].aqi
          },{
            "lng":116.9708,
            "lat":33.591,
            "count":this.lngLats[65].aqi
          },{
            "lng":116.9884,
            "lat":33.6305,
            "count":this.lngLats[66].aqi
          },{
            "lng":116.9648,
            "lat":33.6252,
            "count":this.lngLats[67].aqi
          }
          ,{
            "lng":116.5079,
            "lat":31.737,
            "count":this.lngLats[68].aqi
          }
          ,{
            "lng":116.4738,
            "lat":31.7643,
            "count":this.lngLats[69].aqi
          },{
            "lng":116.4996,
            "lat":31.7905,
            "count":this.lngLats[70].aqi
          },{
            "lng":116.5567,
            "lat":31.7886,
            "count":this.lngLats[71].aqi
          },{
            "lng":115.8072,
            "lat":33.8399,
            "count":this.lngLats[72].aqi
          },{
            "lng":115.7789,
            "lat":33.8518,
            "count":this.lngLats[73].aqi
          },{
            "lng":115.7633,
            "lat":33.8034,
            "count":this.lngLats[74].aqi
          },{
            "lng":117.47,
            "lat":30.6618,
            "count":this.lngLats[75].aqi
          },{
            "lng":117.4974,
            "lat":30.6539,
            "count":this.lngLats[76].aqi
          },{
            "lng":117.4918,
            "lat":30.6617,
            "count":this.lngLats[77].aqi
          },{
            "lng":117.5627,
            "lat":30.695,
            "count":this.lngLats[78].aqi
          },{
            "lng":117.5038,
            "lat":30.6243,
            "count":this.lngLats[79].aqi
          },{
            "lng":118.7581,
            "lat":30.9454,
            "count":this.lngLats[80].aqi
          },{
            "lng":118.7385,
            "lat":30.9743,
            "count":this.lngLats[81].aqi
          },{
            "lng":118.7173,
            "lat":30.9427,
            "count":this.lngLats[82].aqi
          },{
            "lng":118.7724,
            "lat":30.9141,
            "count":this.lngLats[83].aqi
          }]
        //console.log(data1)
        this.heatMap.setDataSet({
          data: data1,
          max: 100
        });
      }
    },

    markerClick(e) {


      this.showinfo=true

      //offset用来偏移，第一个参数是左右，第一个参数是上下。左和上是负的，右和下是正的
      var infoWindow = new AMap.InfoWindow({
        isCustom: true,
        offset: new AMap.Pixel(0, -30),
        content:this.$refs['echartsWatch'].$el
      });

      this.thisstation=e.target._originOpts.title
      //console.log(this.thisstation)
      this.infoWindow=infoWindow
      infoWindow.open(this.map,e.target.getPosition())


      // console.log(e)
      // var content=[]
      // console.log(e.target._originOpts.title)
      // this.request.get("/nowatmospheredata/GetData?station="+e.target._originOpts.title+"").then(res=>{
      //   // var link=[]
      //   // for(var i=0;i<this.links;i++){
      //   //   if(res[0].station===this.links[i][1]){
      //   //     link.push(this.links[i][0])
      //   //   }
      //   // }
      //   // this.showinfo=true
      //   // content =[
      //   //   "<div style='position: relative;width: 200px;height: 200px'><echartsWatch></echartsWatch></div><h2>"+res[0].city+"  "+res[0].station+"</h2>  AQI指数:"+res[0].aqi+"   CO指数:"+res[0].co+"<br/>" +
      //   //   "NO2指数:"+res[0].no2+"   PM2.5指数:"+res[0].pm25+"<br/> PM10指数:"+res[0].pm10+"   SO2指数:"+res[0].so2+"<br/> O3指数:"+res[0].o3+"<br/>" +
      //   //   "<a href='"+this.links[0]+"'>详细信息</a>"
      //   // ]
      //   //infoWindow.setContent(content);
      //   //infoWindow.open(this.map, e.target.getPosition());
      // })






    },

    initMap() {
      AMapLoader.load({
        key: "0e5904b2829e2e25ffcdecc5685b2209",             // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.MoveAnimation', 'AMap.ToolBar', 'AMap.Scale', 'AMap.MapType', 'AMap.Geolocation', 'AMap.HawkEye', 'AMap.HeatMap','AMap.Weather',],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        var _this = this;
        this.map = new AMap.Map("container", {  //设置地图容器id
          resizeEnable: true,
          mapStyle: 'amap://styles/macaron',
          viewMode: "3D",    //是否为3D地图模式
          zoom: 7,           //初始化地图级别
          center: [118.3093, 32.3153], //初始化地图中心点位置
          doubleClickZoom: true,
          // 是否允许鼠标拖拽
          dragEnable: true,
          keyboardEnable: false,
        });

        var infoWindow = new AMap.InfoWindow({
          map:_this.map,
          offset: new AMap.Pixel(0, -30),
        });
        let marker;
        for (var i = 0; i < _this.lngLat.length; i++) {
          marker = new AMap.Marker({
            title: _this.allcitys[i],
            position: _this.lngLat[i],
            map: _this.map,
          });


          marker.on("click", this.markerClick);
          //marker.emit("click", { target: marker });
        }


        // _this.map.on('click', function(ev) {
        //   // 触发事件的对象
        //   var target = ev.target;
        //
        //   // 触发事件的地理坐标，AMap.LngLat 类型
        //   var lnglat = ev.lnglat;
        //
        //   // 触发事件的像素坐标，AMap.Pixel 类型
        //   var pixel = ev.pixel;
        //
        //   // 触发事件类型
        //   var type = ev.type;
        //   console.log(target)
        // });

        this.heatMap = new AMap.HeatMap(this.map, {
          radius: 70, //给定半径
          opacity: [0, 1],
          gradient: {
            1: '#FF4C2F',
            0.8: '#FAA53F',
            0.6: '#FFF100',
            0.5: '#7DF675',
            0.4: '#5CE182',
            0.2: '#29CF6F',
          }
        });

        var data1=[{}]  //开始的时候热力图不显示
        //#endregion


        this.heatMap.setDataSet({

          data: data1,
          max: 100
        });
        // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        this.map.addControl(new AMap.ToolBar());

        // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
        this.map.addControl(new AMap.Scale());

        // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
        this.map.addControl(new AMap.HawkEye({isOpen: true}));


        // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
        this.map.addControl(new AMap.Geolocation());


      }).catch(e => {
        console.log(e);
      })
    },
  },
}
</script>

<style>
.content-window-card {
  position: relative;
  box-shadow: none;
  bottom: 0;
  left: 0;
  width: auto;
  padding: 0;
}

.content-window-card p {
  height: 2rem;
}

.custom-info {
  border: solid 1px silver;
}

div.info-top {
  position: relative;
  background: none repeat scroll 0 0 #F9F9F9;
  border-bottom: 1px solid #CCC;
  border-radius: 5px 5px 0 0;
}

div.info-top div {
  display: inline-block;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  line-height: 31px;
  padding: 0 10px;
}

div.info-top img {
  position: absolute;
  top: 10px;
  right: 10px;
  transition-duration: 0.25s;
}

div.info-top img:hover {
  box-shadow: 0px 0px 5px #000;
}

div.info-middle {
  font-size: 12px;
  padding: 10px 6px;
  line-height: 20px;
}

div.info-bottom {
  height: 0px;
  width: 100%;
  clear: both;
  text-align: center;
}

div.info-bottom img {
  position: relative;
  z-index: 104;
}

span {
  margin-left: 5px;
  font-size: 11px;
}

.info-middle img {
  float: left;
  margin-right: 6px;
}
.home_div{
  padding:0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  position: relative;
}
#container{
  width: 100%;
  height: 100%;
  position: absolute;
}
.map_title{
  position:absolute;
  z-index: 1;
  width: 100%;
  height: 50px;

}
.amap-logo {
  display: none!important;
  visibility: hidden!important;
}

.amap-copyright {
  display: none!important;
  visibility: hidden!important;
}
.amap-copyright {
  opacity:0;
}
</style>