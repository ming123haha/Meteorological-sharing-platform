package com.example.atmosphere.controller;


import com.example.atmosphere.entity.EvaporationMerge;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.List;

import com.example.atmosphere.service.IHumidityMergeService;
import com.example.atmosphere.entity.HumidityMerge;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author DYP
 * @since 2023-02-17
 */
@RestController
@RequestMapping("/humidity-merge")
public class HumidityMergeController {

  @Resource
  private IHumidityMergeService humidityMergeService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody HumidityMerge humidityMerge){
        return humidityMergeService.saveOrUpdate(humidityMerge);
        }

  //humidityMerge==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return humidityMergeService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return humidityMergeService.removeByIds(ids);
        }
  @GetMapping
  public List<HumidityMerge> findAll() {
        return humidityMergeService.list();
        }

  @GetMapping("/{id}")
  public HumidityMerge findOne(@PathVariable Integer id) {
        return humidityMergeService.getById(id);
        }

    @GetMapping("/page")
    public Page<HumidityMerge> findPage(
            @RequestParam Integer pageNum,
            @RequestParam Integer pageSize,
            @RequestParam (defaultValue = "")String StationNumber,
            @RequestParam (defaultValue = "")String Latitude,
            @RequestParam (defaultValue = "")String Longitude,
            @RequestParam (defaultValue = "")String Elevation_of_observation_station,
            @RequestParam (defaultValue = "")String year,
            @RequestParam (defaultValue = "")String month,
            @RequestParam (defaultValue = "")String day,
            @RequestParam (defaultValue = "")String Average_relative_humidity,
            @RequestParam (defaultValue = "")String Minimum_relative_humidity){
        QueryWrapper<HumidityMerge> queryWrapper=new QueryWrapper<>();
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
        if(!"".equals(Average_relative_humidity)){
            queryWrapper.like("Average_relative_humidity",Average_relative_humidity);
        }
        if(!"".equals(Minimum_relative_humidity)){
            queryWrapper.like("Minimum_relative_humidity",Minimum_relative_humidity);
        }

        return humidityMergeService.page(new Page<>(pageNum, pageSize),queryWrapper);
    }

}

