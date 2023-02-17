package com.example.atmosphere.controller;


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

//        @GetMapping("/page")
//  public Page<EvaporationMerge> findPage(@RequestParam Integer pageNum,
//        @RequestParam Integer pageSize) {
//        QueryWrapper<User> queryWrapper=new QueryWrapper<>();
//        return evaporationMergeService.page(new Page<>(pageNum, pageSize),queryWrapper);
//
//        }
}

