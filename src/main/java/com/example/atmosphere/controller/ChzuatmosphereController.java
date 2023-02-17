package com.example.atmosphere.controller;


import com.example.atmosphere.entity.Nowatmospheredata;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.List;

import com.example.atmosphere.service.IChzuatmosphereService;
import com.example.atmosphere.entity.Chzuatmosphere;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author TQM
 * @since 2022-08-04
 */
@RestController
@RequestMapping("/chzuatmosphere")
public class ChzuatmosphereController {

  @Resource
  private IChzuatmosphereService chzuatmosphereService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody Chzuatmosphere chzuatmosphere){
        return chzuatmosphereService.saveOrUpdate(chzuatmosphere);
        }

  //chzuatmosphere==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return chzuatmosphereService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return chzuatmosphereService.removeByIds(ids);
        }
  @GetMapping
  public List<Chzuatmosphere> findAll() {
        return chzuatmosphereService.list();
        }

  @GetMapping("/{id}")
  public Chzuatmosphere findOne(@PathVariable Integer id) {
        return chzuatmosphereService.getById(id);
        }

  @GetMapping("/GetCHZUdata")
    public List<Chzuatmosphere> GetData(@RequestParam String stationname){
      QueryWrapper<Chzuatmosphere> queryWrapper=new QueryWrapper<>();
      queryWrapper.select("AQI","city","station").eq("station",stationname); //sql语句查询指定数据
      List<Chzuatmosphere> chzuatmosphereList= chzuatmosphereService.list(queryWrapper);
      return chzuatmosphereList;
  }


}

