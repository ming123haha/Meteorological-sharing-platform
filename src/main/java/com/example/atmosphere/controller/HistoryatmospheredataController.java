package com.example.atmosphere.controller;


import com.example.atmosphere.entity.Nowatmospheredata;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import com.example.atmosphere.service.IHistoryatmospheredataService;
import com.example.atmosphere.entity.Historyatmospheredata;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  历史数据实体层
 * </p>
 *
 * @author TQM
 * @since 2022-07-25
 */
@RestController
@RequestMapping("/historyatmospheredata")
public class HistoryatmospheredataController {

  @Resource
  private IHistoryatmospheredataService historyatmospheredataService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody Historyatmospheredata historyatmospheredata){
        return historyatmospheredataService.saveOrUpdate(historyatmospheredata);
        }

  //historyatmospheredata==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return historyatmospheredataService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return historyatmospheredataService.removeByIds(ids);
        }
  @GetMapping
  public List<Historyatmospheredata> findAll() {
        return historyatmospheredataService.list();
        }

  @GetMapping("/{id}")
  public Historyatmospheredata findOne(@PathVariable Integer id) {
        return historyatmospheredataService.getById(id);
        }

  @GetMapping("/GetHistoryData")
  public List<Historyatmospheredata> GetData(@RequestParam  String stationame)
  {
      QueryWrapper<Historyatmospheredata> queryWrapper=new QueryWrapper<>();
      queryWrapper.select("AQI","CO","NO2","SO2","O3","PM25","PM10","quality","city","station").eq("station",stationame); //sql语句查询指定数据
      List<Historyatmospheredata> historyatmospheredataList= historyatmospheredataService.list(queryWrapper);
      return historyatmospheredataList;
  }


  @GetMapping("/page")
  public Page<Historyatmospheredata> findPage(
          @RequestParam Integer pageNum,
          @RequestParam Integer pageSize,
          @RequestParam (defaultValue = "")String AQI,
          @RequestParam (defaultValue = "")String CO,
          @RequestParam (defaultValue = "")String NO2,
          @RequestParam (defaultValue = "")String PM25,
          @RequestParam (defaultValue = "")String PM10,
          @RequestParam (defaultValue = "")String SO2,
          @RequestParam (defaultValue = "")String O3,
          @RequestParam (defaultValue = "")String city,
          @RequestParam (defaultValue = "")String station,
          @RequestParam (defaultValue = "")String pubtime) {
      QueryWrapper<Historyatmospheredata> queryWrapper = new QueryWrapper<>();
      if (!"".equals(AQI)) {
          queryWrapper.like("AQI", AQI);
      }
      if (!"".equals(CO)) {
          queryWrapper.like("CO", CO);
      }
      if (!"".equals(NO2)) {
          queryWrapper.like("stationCode", NO2);
      }
      if (!"".equals(PM25)) {
          queryWrapper.like("PM25", PM25);
      }
      if (!"".equals(PM10)) {
          queryWrapper.like("PM10", PM10);
      }
      if (!"".equals(SO2)) {
          queryWrapper.like("SO2", SO2);
      }
      if (!"".equals(O3)) {
          queryWrapper.like("O3", O3);
      }
      if (!"".equals(city)) {
          queryWrapper.like("city", city);
      }
      if (!"".equals(station)) {
          queryWrapper.like("station", station);
      }
      if (!"".equals(pubtime)) {
          queryWrapper.like("pubtime", pubtime);
      }

      return historyatmospheredataService.page(new Page<>(pageNum,pageSize),queryWrapper);
  }

}

