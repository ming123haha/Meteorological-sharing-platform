package com.example.atmosphere.controller;


import cn.hutool.poi.excel.ExcelUtil;
import cn.hutool.poi.excel.ExcelWriter;
import com.example.atmosphere.entity.Equipment;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.net.URLEncoder;
import java.util.List;

import com.example.atmosphere.service.IRealequipmentsService;
import com.example.atmosphere.entity.Realequipments;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author DYP
 * @since 2023-01-19
 */
@RestController
@RequestMapping("/realequipments")
public class RealequipmentsController {

  @Resource
  private IRealequipmentsService realequipmentsService;
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody Realequipments realequipments){
        return realequipmentsService.saveOrUpdate(realequipments);
        }

  //realequipments==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return realequipmentsService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return realequipmentsService.removeByIds(ids);
        }
  @GetMapping
  public List<Realequipments> findAll() {
        return realequipmentsService.list();
        }

  @GetMapping("/{id}")
  public Realequipments findOne(@PathVariable Integer id) {
        return realequipmentsService.getById(id);
        }

  @GetMapping("/page")
  public Page<Realequipments> findPage(
          @RequestParam Integer pageNum,
          @RequestParam Integer pageSize,
          @RequestParam (defaultValue = "")String station,
          @RequestParam (defaultValue = "")String stationCode,
          @RequestParam (defaultValue = "")String latitude,
          @RequestParam (defaultValue = "")String longtitude) {
  QueryWrapper<Realequipments> queryWrapper=new QueryWrapper<>();
      if(!"".equals(station)){
          queryWrapper.like("station",station);
      }
      if(!"".equals(stationCode)){
          queryWrapper.like("stationCode",stationCode);
      }
      if(!"".equals(longtitude)){
          queryWrapper.like("longtitude",longtitude);
      }
      if(!"".equals(latitude)){
          queryWrapper.like("latitude",latitude);
      }

  return realequipmentsService.page(new Page<>(pageNum, pageSize),queryWrapper);
  }
    //导出接口excel
    @GetMapping("/export")
    public void export(HttpServletResponse response) throws Exception{
        List<Realequipments> list=realequipmentsService.list();

        //在内存操作，写入到浏览器中
        ExcelWriter writer = ExcelUtil.getWriter(true);
        //自定义标题别名


        //一次性写出list内的对象到excel，使用默认样式，强制输出标题
        writer.write(list,true);

        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8");
        String fileName= URLEncoder.encode("信息","UTF-8");
        response.setHeader("Content-Disposition","attachment;filename="+fileName+".xlsx");

        ServletOutputStream out=response.getOutputStream();
        writer.flush(out, true);
        out.close();
        writer.close();
    }

}

