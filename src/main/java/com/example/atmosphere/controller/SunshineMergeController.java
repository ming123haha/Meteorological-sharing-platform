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

import com.example.atmosphere.service.ISunshineMergeService;
import com.example.atmosphere.entity.SunshineMerge;

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
@RequestMapping("/sunshine-merge")
public class SunshineMergeController {

  @Resource
  private ISunshineMergeService sunshineMergeService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody SunshineMerge sunshineMerge){
        return sunshineMergeService.saveOrUpdate(sunshineMerge);
        }

  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return sunshineMergeService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return sunshineMergeService.removeByIds(ids);
        }
  @GetMapping
  public List<SunshineMerge> findAll() {
        return sunshineMergeService.list();
        }

  @GetMapping("/{id}")
  public SunshineMerge findOne(@PathVariable Integer id) {
        return sunshineMergeService.getById(id);
        }

    @GetMapping("/page")
    public Page<SunshineMerge> findPage(
            @RequestParam Integer pageNum,
            @RequestParam Integer pageSize,
            @RequestParam (defaultValue = "")String StationNumber,
            @RequestParam (defaultValue = "")String Latitude,
            @RequestParam (defaultValue = "")String Longitude,
            @RequestParam (defaultValue = "")String Elevation_of_observation_station,
            @RequestParam (defaultValue = "")String year,
            @RequestParam (defaultValue = "")String month,
            @RequestParam (defaultValue = "")String day,
            @RequestParam (defaultValue = "")String Sunlight_hours){
        QueryWrapper<SunshineMerge> queryWrapper=new QueryWrapper<>();
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
        if(!"".equals(Sunlight_hours)){
            queryWrapper.like("Sunlight_hours",Sunlight_hours);
        }

        return sunshineMergeService.page(new Page<>(pageNum, pageSize),queryWrapper);
    }

}

