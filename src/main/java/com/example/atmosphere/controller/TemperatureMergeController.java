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

import com.example.atmosphere.service.ITemperatureMergeService;
import com.example.atmosphere.entity.TemperatureMerge;

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
@RequestMapping("/temperature-merge")
public class TemperatureMergeController {

  @Resource
  private ITemperatureMergeService temperatureMergeService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody TemperatureMerge temperatureMerge){
        return temperatureMergeService.saveOrUpdate(temperatureMerge);
        }

  //temperatureMerge==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return temperatureMergeService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return temperatureMergeService.removeByIds(ids);
        }
  @GetMapping
  public List<TemperatureMerge> findAll() {
        return temperatureMergeService.list();
        }

  @GetMapping("/{id}")
  public TemperatureMerge findOne(@PathVariable Integer id) {
        return temperatureMergeService.getById(id);
        }

    @GetMapping("/page")
    public Page<TemperatureMerge> findPage(
            @RequestParam Integer pageNum,
            @RequestParam Integer pageSize,
            @RequestParam(defaultValue = "") String StationNumber,
            @RequestParam(defaultValue = "") String Latitude,
            @RequestParam(defaultValue = "") String Longitude,
            @RequestParam(defaultValue = "") String Elevation_of_observation_station,
            @RequestParam(defaultValue = "") String year,
            @RequestParam(defaultValue = "") String month,
            @RequestParam(defaultValue = "") String day,
            @RequestParam(defaultValue = "") String Average_temperature,
            @RequestParam(defaultValue = "") String Daily_maximum_temperature,
            @RequestParam(defaultValue = "") String Daily_minimum_temperature) {
        QueryWrapper<TemperatureMerge> queryWrapper = new QueryWrapper<>();
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
        if (!"".equals(Average_temperature)) {
            queryWrapper.like("Average_temperature", Average_temperature);
        }
        if (!"".equals(Daily_maximum_temperature)) {
            queryWrapper.like("Daily_maximum_temperature", Daily_maximum_temperature);
        }
        if (!"".equals(Daily_minimum_temperature)) {
            queryWrapper.like("Daily_minimum_temperature", Daily_minimum_temperature);
        }

        return temperatureMergeService.page(new Page<>(pageNum, pageSize), queryWrapper);
    }
}

