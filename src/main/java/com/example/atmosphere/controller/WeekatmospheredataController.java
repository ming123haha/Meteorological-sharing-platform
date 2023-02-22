package com.example.atmosphere.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.List;

import com.example.atmosphere.service.IWeekatmospheredataService;
import com.example.atmosphere.entity.Weekatmospheredata;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author TQM
 * @since 2022-08-06
 */
@RestController
@RequestMapping("/weekatmospheredata")
public class WeekatmospheredataController {

  @Resource
  private IWeekatmospheredataService weekatmospheredataService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody Weekatmospheredata weekatmospheredata){
        return weekatmospheredataService.saveOrUpdate(weekatmospheredata);
        }

  //weekatmospheredata==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return weekatmospheredataService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return weekatmospheredataService.removeByIds(ids);
        }
  @GetMapping
  public List<Weekatmospheredata> findAll() {
        return weekatmospheredataService.list();
        }

  @GetMapping("/{id}")
  public Weekatmospheredata findOne(@PathVariable Integer id) {
        return weekatmospheredataService.getById(id);
        }


  @GetMapping("/getweekdata")
  public List<Weekatmospheredata> findWeekData(@RequestParam (defaultValue = "")String city,
                                               @RequestParam (defaultValue = "")String station){
      QueryWrapper<Weekatmospheredata> queryWrapper = new QueryWrapper<>();

      queryWrapper.select("AQI","CO","NO2","PM25","PM10","SO2","O3","station","city");
      if (!"".equals(city)) {
          queryWrapper.eq("city", city);
      }
      if (!"".equals(station)) {
          queryWrapper.eq("station", station);
      }
      List<Weekatmospheredata> weekatmospheredataList= weekatmospheredataService.list(queryWrapper);
      return  weekatmospheredataList;
  }
}

