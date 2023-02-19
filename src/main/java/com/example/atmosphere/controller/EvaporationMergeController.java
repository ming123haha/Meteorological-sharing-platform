package com.example.atmosphere.controller;


import com.example.atmosphere.entity.Realequipments;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.List;

import com.example.atmosphere.service.IEvaporationMergeService;
import com.example.atmosphere.entity.EvaporationMerge;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author TQM
 * @since 2023-02-17
 */
@RestController
@RequestMapping("/evaporation-merge")
public class EvaporationMergeController {

  @Resource
  private IEvaporationMergeService evaporationMergeService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody EvaporationMerge evaporationMerge){
        return evaporationMergeService.saveOrUpdate(evaporationMerge);
        }

  //evaporationMerge==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return evaporationMergeService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return evaporationMergeService.removeByIds(ids);
        }
  @GetMapping
  public List<EvaporationMerge> findAll() {
        return evaporationMergeService.list();
        }

  @GetMapping("/{id}")
  public EvaporationMerge findOne(@PathVariable Integer id) {
        return evaporationMergeService.getById(id);
        }


    @GetMapping("/page")
    public Page<EvaporationMerge> findPage(
            @RequestParam Integer pageNum,
            @RequestParam Integer pageSize,
            @RequestParam (defaultValue = "")String StationNumber,
            @RequestParam (defaultValue = "")String Latitude,
            @RequestParam (defaultValue = "")String Longitude,
            @RequestParam (defaultValue = "")String Elevation_of_observation_station,
            @RequestParam (defaultValue = "")String year,
            @RequestParam (defaultValue = "")String month,
            @RequestParam (defaultValue = "")String day,
            @RequestParam (defaultValue = "")String Small_evaporation_capacity,
            @RequestParam (defaultValue = "")String Large_evaporation_capacity){
        QueryWrapper<EvaporationMerge> queryWrapper=new QueryWrapper<>();
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
        if(!"".equals(Small_evaporation_capacity)){
            queryWrapper.like("Small_evaporation_capacity",Small_evaporation_capacity);
        }
        if(!"".equals(Large_evaporation_capacity)){
            queryWrapper.like("Large_evaporation_capacity",Large_evaporation_capacity);
        }

        return evaporationMergeService.page(new Page<>(pageNum, pageSize),queryWrapper);
    }


}

