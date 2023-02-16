package com.example.atmosphere.controller;


import cn.hutool.poi.excel.ExcelUtil;
import cn.hutool.poi.excel.ExcelWriter;
import com.example.atmosphere.entity.User;
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

import com.example.atmosphere.service.IEquipmentService;
import com.example.atmosphere.entity.Equipment;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author TQM
 * @since 2022-07-21
 */
@RestController
@RequestMapping("/equipment")
public class EquipmentController {

  @Resource
  private IEquipmentService equipmentService;

  //新增或更新
  @PostMapping
  public boolean save(@RequestBody Equipment equipment){return equipmentService.saveOrUpdate(equipment);}

  //equipment==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return equipmentService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return equipmentService.removeByIds(ids);
        }
  @GetMapping
  public List<Equipment> findAll() {
        return equipmentService.list();
        }

  @GetMapping("/{id}")
  public Equipment findOne(@PathVariable Integer id) {
        return equipmentService.getById(id);
        }

        @GetMapping("/page")
  public Page<Equipment> findPage(@RequestParam Integer pageNum,
                                  @RequestParam Integer pageSize,
                                  @RequestParam (defaultValue = "")String 仪器编号,
                                  @RequestParam (defaultValue = "")String 监测站区域,
                                  @RequestParam (defaultValue = "")String 开始监测时间,
                                  @RequestParam (defaultValue = "")String 结束监测时间,
                                  @RequestParam (defaultValue = "")String 仪器管理人员) {
        QueryWrapper<Equipment> queryWrapper=new QueryWrapper<>();
            if(!"".equals(仪器编号)){
                queryWrapper.like("仪器编号",仪器编号);
            }
            if(!"".equals(监测站区域)){
                queryWrapper.like("监测站区域",监测站区域);
            }
            if(!"".equals(开始监测时间)){
                queryWrapper.like("开始监测时间",开始监测时间);
            }
            if(!"".equals(结束监测时间)){
                queryWrapper.like("结束监测时间",结束监测时间);
            }
            if(!"".equals(仪器管理人员)){
                queryWrapper.like("仪器管理人员",仪器管理人员);
            }
        return equipmentService.page(new Page<>(pageNum, pageSize),queryWrapper);

        }

    //导出接口excel
    @GetMapping("/export")
    public void export(HttpServletResponse response) throws Exception{
        List<Equipment> list=equipmentService.list();

        //在内存操作，写入到浏览器中
        ExcelWriter writer = ExcelUtil.getWriter(true);
        //自定义标题别名
//      writer.addHeaderAlias("id","ID");
//      writer.addHeaderAlias("username","用户名");
//      writer.addHeaderAlias("password","密码");
//      writer.addHeaderAlias("createtime","创建时间");


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

