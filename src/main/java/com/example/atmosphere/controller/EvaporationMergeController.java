package com.example.atmosphere.controller;


import cn.hutool.poi.excel.ExcelReader;
import cn.hutool.poi.excel.ExcelUtil;
import cn.hutool.poi.excel.ExcelWriter;
import com.baomidou.mybatisplus.annotation.TableField;
import com.example.atmosphere.entity.Realequipments;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import com.example.atmosphere.service.IEvaporationMergeService;
import com.example.atmosphere.entity.EvaporationMerge;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


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
  public Boolean delete(@PathVariable String id) {
      QueryWrapper<EvaporationMerge> queryWrapper=new QueryWrapper<>();
      queryWrapper.eq("Station_Number",id);
      return evaporationMergeService.remove(queryWrapper);
  }


  @GetMapping("/export")
  public void Export(HttpServletResponse response,@RequestParam(defaultValue = "") String year,@RequestParam(defaultValue = "") Integer Num) throws Exception{
      QueryWrapper<EvaporationMerge> queryWrapper=new QueryWrapper<>();
      queryWrapper.like("year",year).last("LIMIT " + Num);
      List<EvaporationMerge> list = evaporationMergeService.list(queryWrapper);
      ExcelWriter writer = ExcelUtil.getWriter("D:/蒸发表.xlsx");
//      writer.addHeaderAlias("StationNumber","区站号");
//      writer.addHeaderAlias("latitude","纬度");
//      writer.addHeaderAlias("longitude","经度");
//      writer.addHeaderAlias("elevationOfObservationStation","观测站海拔");
//      writer.addHeaderAlias("year","年");
//      writer.addHeaderAlias("month","月");
//      writer.addHeaderAlias("day","日");
//      writer.addHeaderAlias("smallEvaporationCapacity","小型蒸发量");
//      writer.addHeaderAlias("largeEvaporationCapacity","大型蒸发量");

      writer.write(list,true);

      writer.close();

  }
  @PostMapping("/import")
  public Boolean imp(MultipartFile file) throws Exception{
      InputStream inputStream = file.getInputStream();
      ExcelReader reader = ExcelUtil.getReader(inputStream);
      List<EvaporationMerge> list = reader.readAll(EvaporationMerge.class);// 移除表头行
      evaporationMergeService.saveBatch(list);
      return true;
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
            queryWrapper.like("Station_Number",StationNumber);
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
            queryWrapper.eq("year",year);
        }
        if(!"".equals(month)){
            queryWrapper.eq("month",month);
        }
        if(!"".equals(day)){
            queryWrapper.eq("day",day);
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

