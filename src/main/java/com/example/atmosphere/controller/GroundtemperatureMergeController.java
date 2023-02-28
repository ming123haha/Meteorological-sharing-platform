package com.example.atmosphere.controller;


import com.example.atmosphere.entity.EvaporationMerge;
import com.example.atmosphere.entity.Historyatmospheredata;
import org.apache.commons.lang.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.text.DecimalFormat;
import java.util.*;

import com.example.atmosphere.service.IGroundtemperatureMergeService;
import com.example.atmosphere.entity.GroundtemperatureMerge;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author DYP
 * @since 2023-02-18
 */
@RestController
@RequestMapping("/groundtemperature-merge")
public class GroundtemperatureMergeController {

  @Resource
  private IGroundtemperatureMergeService groundtemperatureMergeService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody GroundtemperatureMerge groundtemperatureMerge){
        return groundtemperatureMergeService.saveOrUpdate(groundtemperatureMerge);
        }

  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return groundtemperatureMergeService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return groundtemperatureMergeService.removeByIds(ids);
        }
  @GetMapping
  public List<GroundtemperatureMerge> findAll() {
        return groundtemperatureMergeService.list();
        }

  @GetMapping("/{id}")
  public GroundtemperatureMerge findOne(@PathVariable Integer id) {
        return groundtemperatureMergeService.getById(id);
        }

    @GetMapping("/page")
    public Page<GroundtemperatureMerge> findPage(
            @RequestParam Integer pageNum,
            @RequestParam Integer pageSize,
            @RequestParam (defaultValue = "")String StationNumber,
            @RequestParam (defaultValue = "")String Latitude,
            @RequestParam (defaultValue = "")String Longitude,
            @RequestParam (defaultValue = "")String Elevation_of_observation_station,
            @RequestParam (defaultValue = "")String year,
            @RequestParam (defaultValue = "")String month,
            @RequestParam (defaultValue = "")String day,
            @RequestParam (defaultValue = "")String Average_surface_temperature,
            @RequestParam (defaultValue = "")String Daily_maximum_surface_temperature,
            @RequestParam (defaultValue = "")String Daily_minimum_surface_temperature){
        QueryWrapper<GroundtemperatureMerge> queryWrapper=new QueryWrapper<>();
        if(!"".equals(StationNumber)){
            queryWrapper.like("StationNumber",StationNumber);
        }
        if(!"".equals(Latitude)){
            queryWrapper.like("Latitude",Latitude);
        }
        if(!"".equals(Longitude)){
            queryWrapper.like("Longitude",Longitude);
        }
        if(!"".equals(Elevation_of_observation_station)){
            queryWrapper.like("Elevation_of_observation_station",Elevation_of_observation_station);
        }
        if(!"".equals(year)){
            queryWrapper.like("year",year);
        }
        if(!"".equals(month)){
            queryWrapper.like("month",month);
        }
        if(!"".equals(day)){
            queryWrapper.like("day",day);
        }
        if(!"".equals(Average_surface_temperature)){
            queryWrapper.like("Average_surface_temperature",Average_surface_temperature);
        }
        if(!"".equals(Daily_maximum_surface_temperature)){
            queryWrapper.like("Daily_maximum_surface_temperature",Daily_maximum_surface_temperature);
        }
        if(!"".equals(Daily_minimum_surface_temperature)){
            queryWrapper.like("Daily_minimum_surface_temperature",Daily_minimum_surface_temperature);
        }
        return groundtemperatureMergeService.page(new Page<>(pageNum, pageSize),queryWrapper);
    }
    @GetMapping("/GetHistoryData")
    public List<GroundtemperatureMerge> GetData(@RequestParam String name)
    {
        String[] An_Hui_name = new String[]{"砀山","亳州","蒙城","宿县","阜阳","寿县","蚌埠","定远","滁县","六安","霍山","桐城","合肥","巢湖","马鞍山","芜湖县","铜陵","宁国",
                "黄山","祁门","屯溪"};
        int flag = 0;
        for(int i = 0;i<An_Hui_name.length;i++){
            if(An_Hui_name[i].equals(name)){
                flag = i;
            }
        }
        String[] An_Hui_station=new String[]{"58015","58102","58118","58122","58203","58215","58221",
                "58225","58236","58311","58314","58319","58321","58326","58336","58338","58429","58436","58437","58520","58531"};

        QueryWrapper<GroundtemperatureMerge> queryWrapper=new QueryWrapper<>();
        queryWrapper.select("year","month","day","Average_surface_temperature").like("Station_Number",An_Hui_station[flag]);
        List<GroundtemperatureMerge> historyatmospheredataList= groundtemperatureMergeService.list(queryWrapper);
        return historyatmospheredataList;
    }
    @GetMapping("/GetNearYearData")
    public List<Double> GetNearYearData(@RequestParam String name){
        String[] An_Hui_name = new String[]{"砀山","亳州","蒙城","宿县","阜阳","寿县","蚌埠","定远","滁县","六安","霍山","桐城","合肥","巢湖","马鞍山","芜湖县","铜陵","宁国",
                "黄山","祁门","屯溪"};
        int flag = 0;
        for(int i = 0;i<An_Hui_name.length;i++){
            if(An_Hui_name[i].equals(name)){
                flag = i;
            }
        }
        String[] An_Hui_station=new String[]{"58015","58102","58118","58122","58203","58215","58221",
                "58225","58236","58311","58314","58319","58321","58326","58336","58338","58429","58436","58437","58520","58531"};
        QueryWrapper<GroundtemperatureMerge> queryWrapper=new QueryWrapper<>();
        String temp = null;
        List<Double> d_averagetemp_list=new ArrayList<>();
        List<GroundtemperatureMerge> NearYeardataList=null;
        for(double i = 1.0;i<=12.0;i++){
            Double d_averagetemp=0.0;
            queryWrapper=new QueryWrapper<>();
            queryWrapper.select("Average_surface_temperature").like("year","2017").eq("month",i).like("Station_Number",An_Hui_station[flag]);
            NearYeardataList= groundtemperatureMergeService.list(queryWrapper);
            for(int j=0;j<NearYeardataList.size();j++){
                temp = String.valueOf(NearYeardataList.get(j).getAverageSurfaceTemperature());
                d_averagetemp+=Double.parseDouble(temp);
            }
            //每个月的平均地表气温
            d_averagetemp = d_averagetemp/NearYeardataList.size();
            d_averagetemp_list.add(d_averagetemp);
        }


        return d_averagetemp_list;
    }
    @GetMapping("/SortCityData")
    public List<Map.Entry<String,Double>> SortCityData(){
      QueryWrapper<GroundtemperatureMerge> queryWrapper=new QueryWrapper<>();
      Double d_temp = 0.0;
      Double aver_sum = 0.0;
      List<GroundtemperatureMerge> All_list_Average_surface_temperature = null;
      Map<String,Double> map=new HashMap<>();
      List<Double> L_double =new ArrayList<>();
      String[] An_Hui_name = new String[]{"砀山","亳州","蒙城","宿县","阜阳","寿县","蚌埠","定远","滁县","六安","霍山","桐城","合肥","巢湖","马鞍山","芜湖县","铜陵","宁国",
              "黄山","祁门","屯溪"};
      String[] An_Hui_station=new String[]{"58015","58102","58118","58122","58203","58215","58221",
              "58225","58236","58311","58314","58319","58321","58326","58336","58338","58429","58436","58437","58520","58531"};
      for (int p=0;p<An_Hui_station.length;p++) {
          queryWrapper = new QueryWrapper<>();
          queryWrapper.select("Average_surface_temperature","Station_Number").like("year",2017).like("Station_Number",An_Hui_station[p]);
          All_list_Average_surface_temperature = groundtemperatureMergeService.list(queryWrapper);
          for(int i=0;i<All_list_Average_surface_temperature.size();i++){
              d_temp = Double.parseDouble(All_list_Average_surface_temperature.get(i).getAverageSurfaceTemperature());
              aver_sum += d_temp;
          }
          aver_sum = aver_sum/All_list_Average_surface_temperature.size();

          map.put(An_Hui_name[p],aver_sum);
      }
      //这里将map.entrySet()转换成list
      List<Map.Entry<String,Double>> list = new ArrayList<Map.Entry<String,Double>>(map.entrySet());
        //然后通过比较器来实现排序
      Collections.sort(list,new Comparator<Map.Entry<String,Double>>() {
            //升序排序
            public int compare(Map.Entry<String, Double> o1,
                               Map.Entry<String, Double> o2) {
                return o1.getValue().compareTo(o2.getValue());
            }
      });

      return list;
    }

    @GetMapping("/MaxAndMinTempture")
    public  String[]  GetMaxAndMin(@RequestParam String city_name){

        String[] An_Hui_name = new String[]{"砀山","亳州","蒙城","宿县","阜阳","寿县","蚌埠","定远","滁县","六安","霍山","桐城","合肥","巢湖","马鞍山","芜湖县","铜陵","宁国",
                "黄山","祁门","屯溪"};
        String[] An_Hui_station=new String[]{"58015","58102","58118","58122","58203","58215","58221",
                "58225","58236","58311","58314","58319","58321","58326","58336","58338","58429","58436","58437","58520","58531"};
        Integer flag = 0;
        for(int i=0;i<An_Hui_name.length;i++){
            if(An_Hui_name[i].equals(city_name)){
                flag = i;
            }
        }
        QueryWrapper<GroundtemperatureMerge> queryWrapper=new QueryWrapper<>();
        queryWrapper.select("Daily_maximum_surface_temperature","Daily_minimum_surface_temperature").like("year",2017).like("Station_Number",An_Hui_station[flag]);
        List<GroundtemperatureMerge> All_list = groundtemperatureMergeService.list(queryWrapper);
        Double d_max_average_temp = 0.0;
        Double d_min_average_temp = 0.0;
        DecimalFormat df = new DecimalFormat("#.00");
        for(int i=0;i<All_list.size();i++){
            d_max_average_temp += Double.parseDouble(All_list.get(i).getDailyMaximumSurfaceTemperature());
            d_min_average_temp += Double.parseDouble(All_list.get(i).getDailyMinimumSurfaceTemperature());
        }
        String d_results[]=new String[]{df.format(d_max_average_temp/All_list.size()),df.format(d_min_average_temp/All_list.size())};
        return d_results;
    }
}

