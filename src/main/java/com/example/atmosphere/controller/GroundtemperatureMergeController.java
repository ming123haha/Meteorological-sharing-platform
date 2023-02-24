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
import java.util.ArrayList;
import java.util.List;

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
    public List<GroundtemperatureMerge> GetData(@RequestParam  String now)
    {
        String all = StringUtils.substringBefore(now, "T");
        //截取字符串
        String[]  strs=all.split("-");
        String year = strs[0];
        String month = strs[1];
        String day = strs[2];

        if(month.contains("0")){
            month = StringUtils.substringAfter(month,"0");

        }
        if(day.contains("0")){
            day = StringUtils.substringAfter(day,"0");
        }

        QueryWrapper<GroundtemperatureMerge> queryWrapper=new QueryWrapper<>();
        queryWrapper.select("Average_surface_temperature").like("year",year).like("month",month).like("day",day);
        List<GroundtemperatureMerge> historyatmospheredataList= groundtemperatureMergeService.list(queryWrapper);
        return historyatmospheredataList;
    }
    @GetMapping("/GetNearYearData")
    public List<Double> GetNearYearData(){
        QueryWrapper<GroundtemperatureMerge> queryWrapper=new QueryWrapper<>();
        String temp = null;
        List<Double> d_averagetemp_list=new ArrayList<>();
        List<GroundtemperatureMerge> NearYeardataList=null;
        for(double i = 1.0;i<=12.0;i++){
            Double d_averagetemp=0.0;
            queryWrapper=new QueryWrapper<>();
            queryWrapper.select("Average_surface_temperature").like("year","2017").eq("month",i).like("Station_Number","58236");
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
    public List<GroundtemperatureMerge> SortCityData(){
      QueryWrapper<GroundtemperatureMerge> queryWrapper=new QueryWrapper<>();
      queryWrapper.select("Average_surface_temperature","Station_Number").like("year",2017);
      List<GroundtemperatureMerge> All_list = groundtemperatureMergeService.list(queryWrapper);
      for(GroundtemperatureMerge i:All_list){
          GroundtemperatureMerge temp = i;
      }
      return All_list;
    }
}

