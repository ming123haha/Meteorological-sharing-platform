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

import com.example.atmosphere.service.IWindMergeService;
import com.example.atmosphere.entity.WindMerge;

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
@RequestMapping("/wind-merge")
public class WindMergeController {

  @Resource
  private IWindMergeService windMergeService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody WindMerge windMerge){
        return windMergeService.saveOrUpdate(windMerge);
        }

  //windMerge==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return windMergeService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return windMergeService.removeByIds(ids);
        }
  @GetMapping
  public List<WindMerge> findAll() {
        return windMergeService.list();
        }

  @GetMapping("/{id}")
  public WindMerge findOne(@PathVariable Integer id) {
        return windMergeService.getById(id);
        }

    @GetMapping("/page")
    public Page<WindMerge> findPage(
            @RequestParam Integer pageNum,
            @RequestParam Integer pageSize,
            @RequestParam(defaultValue = "") String StationNumber,
            @RequestParam(defaultValue = "") String Latitude,
            @RequestParam(defaultValue = "") String Longitude,
            @RequestParam(defaultValue = "") String Elevation_of_observation_station,
            @RequestParam(defaultValue = "") String year,
            @RequestParam(defaultValue = "") String month,
            @RequestParam(defaultValue = "") String day,
            @RequestParam(defaultValue = "") String Average_wind_speed,
            @RequestParam(defaultValue = "") String Maximum_wind_speed,
            @RequestParam(defaultValue = "") String Wind_direction_of_maximum_wind_speed,
            @RequestParam(defaultValue = "") String Extreme_wind_speed,
            @RequestParam(defaultValue = "") String Wind_direction_of_extreme_wind_speed) {
        QueryWrapper<WindMerge> queryWrapper = new QueryWrapper<>();
        if (!"".equals(StationNumber)) {
            queryWrapper.like("StationNumber", StationNumber);
        }
        if (!"".equals(Latitude)) {
            queryWrapper.like("Latitude", Latitude);
        }
        if (!"".equals(Longitude)) {
            queryWrapper.like("Longitude", Longitude);
        }
        if (!"".equals(Elevation_of_observation_station)) {
            queryWrapper.like("Elevation_of_observation_station", Elevation_of_observation_station);
        }
        if (!"".equals(year)) {
            queryWrapper.like("year", year);
        }
        if (!"".equals(month)) {
            queryWrapper.like("month", month);
        }
        if (!"".equals(day)) {
            queryWrapper.like("day", day);
        }
        if (!"".equals(Average_wind_speed)) {
            queryWrapper.like("Average_wind_speed", Average_wind_speed);
        }
        if (!"".equals(Maximum_wind_speed)) {
            queryWrapper.like("Maximum_wind_speed", Maximum_wind_speed);
        }
        if (!"".equals(Wind_direction_of_maximum_wind_speed)) {
            queryWrapper.like("Wind_direction_of_maximum_wind_speed", Wind_direction_of_maximum_wind_speed);
        }
        if (!"".equals(Extreme_wind_speed)) {
            queryWrapper.like("Extreme_wind_speed", Extreme_wind_speed);
        }
        if (!"".equals(Wind_direction_of_extreme_wind_speed)) {
            queryWrapper.like("Wind_direction_of_extreme_wind_speed", Wind_direction_of_extreme_wind_speed);
        }

        return windMergeService.page(new Page<>(pageNum, pageSize), queryWrapper);
    }
}

