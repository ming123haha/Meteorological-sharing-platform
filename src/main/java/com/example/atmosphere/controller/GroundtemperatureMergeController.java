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

}

