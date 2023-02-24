package com.example.atmosphere.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.List;

import com.example.atmosphere.service.IPrecipitationMergeService;
import com.example.atmosphere.entity.PrecipitationMerge;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author DYP
 * @since 2023-02-19
 */
@RestController
@RequestMapping("/precipitation-merge")
public class PrecipitationMergeController {

  @Resource
  private IPrecipitationMergeService precipitationMergeService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody PrecipitationMerge precipitationMerge){
        return precipitationMergeService.saveOrUpdate(precipitationMerge);
        }

  //precipitationMerge==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return precipitationMergeService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return precipitationMergeService.removeByIds(ids);
        }
  @GetMapping
  public List<PrecipitationMerge> findAll() {
        return precipitationMergeService.list();
        }

  @GetMapping("/{id}")
  public PrecipitationMerge findOne(@PathVariable Integer id) {
        return precipitationMergeService.getById(id);
        }

    @GetMapping("/page")
    public Page<PrecipitationMerge> findPage(
            @RequestParam Integer pageNum,
            @RequestParam Integer pageSize,
            @RequestParam(defaultValue = "") String StationNumber,
            @RequestParam(defaultValue = "") String Latitude,
            @RequestParam(defaultValue = "") String Longitude,
            @RequestParam(defaultValue = "") String Elevation_of_observation_station,
            @RequestParam(defaultValue = "") String year,
            @RequestParam(defaultValue = "") String month,
            @RequestParam(defaultValue = "") String day,
            @RequestParam(defaultValue = "") String Precipitation_at_208_hours,
            @RequestParam(defaultValue = "") String Precipitation_at_820_hours,
            @RequestParam(defaultValue = "") String Cumulative_precipitation_at2020_hours) {
        QueryWrapper<PrecipitationMerge> queryWrapper = new QueryWrapper<>();
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
        if (!"".equals(Precipitation_at_208_hours)) {
            queryWrapper.like("Precipitation_at_208_hours", Precipitation_at_208_hours);
        }
        if (!"".equals(Precipitation_at_820_hours)) {
            queryWrapper.like("Precipitation_at_820_hours", Precipitation_at_820_hours);
        }
        if (!"".equals(Cumulative_precipitation_at2020_hours)) {
            queryWrapper.like("Cumulative_precipitation_at2020_hours", Cumulative_precipitation_at2020_hours);
        }

        return precipitationMergeService.page(new Page<>(pageNum, pageSize), queryWrapper);
    }
}

