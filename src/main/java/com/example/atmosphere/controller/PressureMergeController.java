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

import com.example.atmosphere.service.IPressureMergeService;
import com.example.atmosphere.entity.PressureMerge;

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
@RequestMapping("/pressure-merge")
public class PressureMergeController {

  @Resource
  private IPressureMergeService pressureMergeService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody PressureMerge pressureMerge){
        return pressureMergeService.saveOrUpdate(pressureMerge);
        }

  //pressureMerge==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return pressureMergeService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return pressureMergeService.removeByIds(ids);
        }
  @GetMapping
  public List<PressureMerge> findAll() {
        return pressureMergeService.list();
        }

  @GetMapping("/{id}")
  public PressureMerge findOne(@PathVariable Integer id) {
        return pressureMergeService.getById(id);
        }

    @GetMapping("/page")
    public Page<PressureMerge> findPage(
            @RequestParam Integer pageNum,
            @RequestParam Integer pageSize,
            @RequestParam(defaultValue = "") String StationNumber,
            @RequestParam(defaultValue = "") String Latitude,
            @RequestParam(defaultValue = "") String Longitude,
            @RequestParam(defaultValue = "") String Elevation_of_observation_station,
            @RequestParam(defaultValue = "") String year,
            @RequestParam(defaultValue = "") String month,
            @RequestParam(defaultValue = "") String day,
            @RequestParam(defaultValue = "") String Average_local_air_pressure,
            @RequestParam(defaultValue = "") String Daily_maximum_local_air_pressure,
            @RequestParam(defaultValue = "") String Daily_minimum_local_air_pressure) {
        QueryWrapper<PressureMerge> queryWrapper = new QueryWrapper<>();
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
        if (!"".equals(Average_local_air_pressure)) {
            queryWrapper.like("Average_local_air_pressure", Average_local_air_pressure);
        }
        if (!"".equals(Daily_maximum_local_air_pressure)) {
            queryWrapper.like("Daily_maximum_local_air_pressure", Daily_maximum_local_air_pressure);
        }
        if (!"".equals(Daily_minimum_local_air_pressure)) {
            queryWrapper.like("Daily_minimum_local_air_pressure", Daily_minimum_local_air_pressure);
        }

        return pressureMergeService.page(new Page<>(pageNum, pageSize), queryWrapper);
    }
}

