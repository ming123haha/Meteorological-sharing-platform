package com.example.atmosphere.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.List;

import com.example.atmosphere.service.IHumidityMergeService;
import com.example.atmosphere.entity.HumidityMerge;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author DYP
 * @since 2023-02-17
 */
@RestController
@RequestMapping("/humidity-merge")
public class HumidityMergeController {

  @Resource
  private IHumidityMergeService humidityMergeService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody HumidityMerge humidityMerge){
        return humidityMergeService.saveOrUpdate(humidityMerge);
        }

  //humidityMerge==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return humidityMergeService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return humidityMergeService.removeByIds(ids);
        }
  @GetMapping
  public List<HumidityMerge> findAll() {
        return humidityMergeService.list();
        }

  @GetMapping("/{id}")
  public HumidityMerge findOne(@PathVariable Integer id) {
        return humidityMergeService.getById(id);
        }

}

