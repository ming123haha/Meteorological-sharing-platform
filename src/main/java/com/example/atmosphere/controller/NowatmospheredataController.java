package com.example.atmosphere.controller;


import com.example.atmosphere.entity.Realequipments;
import com.example.atmosphere.mapper.NowatmospheredataMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.atmosphere.service.INowatmospheredataService;
import com.example.atmosphere.entity.Nowatmospheredata;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  当前数据实体层
 * </p>
 *
 * @author TQM
 * @since 2022-07-22
 */
@RestController
@RequestMapping("/nowatmospheredata")
public class NowatmospheredataController {

  @Resource
  private INowatmospheredataService nowatmospheredataService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody Nowatmospheredata nowatmospheredata){
        return nowatmospheredataService.saveOrUpdate(nowatmospheredata);
        }

  //nowatmospheredata==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return nowatmospheredataService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return nowatmospheredataService.removeByIds(ids);
        }
  @GetMapping
  public List<Nowatmospheredata> findAll() {
        return nowatmospheredataService.list();
        }

        //获取指定地区的AQI 空气质量 PM2.5 PM10
    @GetMapping("/data")
    public Nowatmospheredata findData(@RequestParam String stationName)
    {
        QueryWrapper<Nowatmospheredata> queryWrapper=new QueryWrapper<>();
        queryWrapper.select("AQI","CO","NO2","SO2","O3","PM25","PM10","quality").eq("station",stationName); //sql语句查询指定数据
        return nowatmospheredataService.getOne(queryWrapper);
    }

    @GetMapping("/GetStationdata")
    public Nowatmospheredata GetData(@RequestParam String stationlongitude)
    {
        QueryWrapper<Nowatmospheredata> queryWrapper=new QueryWrapper<>();
        queryWrapper.select("AQI","CO","NO2","SO2","O3","PM25","PM10","quality","city","station").eq("longitude",stationlongitude); //sql语句查询指定数据
        return nowatmospheredataService.getOne(queryWrapper);
    }


    @GetMapping("/GetAllStation")
    public List<Nowatmospheredata> GetAll()
    {
        Map<String, Object> columnMap = new HashMap<>();
        QueryWrapper<Nowatmospheredata> queryWrapper=new QueryWrapper<>();
        queryWrapper.select("longitude");


        List<Nowatmospheredata> nowatmospheredataList= nowatmospheredataService.list(queryWrapper);
        return nowatmospheredataList;
    }

    @GetMapping("/GetAllquality")
    public List<Nowatmospheredata> GetQuality()
    {

        QueryWrapper<Nowatmospheredata> queryWrapper=new QueryWrapper<>();
        queryWrapper.select("quality","city");


        List<Nowatmospheredata> nowatmospheredata= nowatmospheredataService.list(queryWrapper);
        return nowatmospheredata;
    }


    @GetMapping("/GetNowAQI")
    public List<Nowatmospheredata> GetNowAQI()
    {
        //实现查询某几列数据
        QueryWrapper<Nowatmospheredata> queryWrapper=new QueryWrapper<>();
        queryWrapper.select("AQI","CO","NO2","PM25","PM10","SO2","O3","city","station");
        List<Nowatmospheredata> nowatmospheredata= nowatmospheredataService.list(queryWrapper);
        return nowatmospheredata;
    }

    @GetMapping("/GetNowstation")
    public List<Nowatmospheredata> GetNowstation(@RequestParam String sCity)
    {
        //实现查询某几列数据
        QueryWrapper<Nowatmospheredata> queryWrapper=new QueryWrapper<>();
        queryWrapper.select("station").eq("city",sCity);
        List<Nowatmospheredata> nowatmospheredata= nowatmospheredataService.list(queryWrapper);
        return nowatmospheredata;
    }

    @GetMapping("/GetData")
    public List<Nowatmospheredata> GetAlldata(@RequestParam String station)
    {
        QueryWrapper<Nowatmospheredata> queryWrapper=new QueryWrapper<>();
        queryWrapper.select("AQI","CO","NO2","PM25","PM10","SO2","O3","city","station").eq("station",station);
        List<Nowatmospheredata> nowatmospheredata= nowatmospheredataService.list(queryWrapper);
        return nowatmospheredata;
    }
}

