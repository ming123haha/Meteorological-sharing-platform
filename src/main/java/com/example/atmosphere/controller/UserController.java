package com.example.atmosphere.controller;
import cn.hutool.core.util.StrUtil;
import cn.hutool.poi.excel.ExcelReader;
import cn.hutool.poi.excel.ExcelUtil;
import cn.hutool.poi.excel.ExcelWriter;
import com.example.atmosphere.common.Constants;
import com.example.atmosphere.common.Result;
import com.example.atmosphere.controller.dto.UserDTO;
import com.example.atmosphere.utils.TokenUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.net.URLEncoder;
import java.util.List;

import com.example.atmosphere.service.IUserService;
import com.example.atmosphere.entity.User;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author DYP
 * @since 2023-01-17
 */
@RestController
@RequestMapping("/user")
public class UserController {

  @Resource
  private IUserService userService;

  //登录
  @PostMapping("/login")
  public Result login(@RequestBody UserDTO userDTO){
      String username=userDTO.getUsername();
      String password=userDTO.getPassword();
      if(StrUtil.isBlank(username)||StrUtil.isBlank(password)){
          return Result.error(Constants.CODE_400,"参数错误");
      }
      UserDTO dto=userService.login(userDTO);

      return Result.success(dto);
  }

  @PostMapping("/register")
  public Result register(@RequestBody UserDTO userDTO){
      String username = userDTO.getUsername();
      String password = userDTO.getPassword();
      if (StrUtil.isBlank(username) || StrUtil.isBlank(password)){
          return Result.error(Constants.CODE_400,"参数错误");
      }
      return Result.success(userService.register(userDTO));
  }
  //新增或更新
  @PostMapping
  public boolean save(@RequestBody User user){
        return userService.saveOrUpdate(user);
        }

  //user==user
  @DeleteMapping("/{id}")
  public Boolean delete(@PathVariable Integer id) {
        return userService.removeById(id);
        }

  @PostMapping("/del/batch")
  public boolean deleteBatch(@RequestBody List<Integer> ids){
    return userService.removeByIds(ids);
        }
  @GetMapping
  public List<User> findAll() {
        return userService.list();
        }

  @GetMapping("/{id}")
  public User findOne(@PathVariable Integer id) {
        return userService.getById(id);
        }

        @GetMapping("/page")
        public Page<User> findPage(@RequestParam Integer pageNum,
                                   @RequestParam Integer pageSize,
                                   @RequestParam (defaultValue = "")String username,
                                   @RequestParam (defaultValue = "")String password) {
            QueryWrapper<User> queryWrapper=new QueryWrapper<>();
            if(!"".equals(username)){
                queryWrapper.like("username",username);
            }
            if(!"".equals(password)){
                queryWrapper.like("password",password);
            }
            return userService.page(new Page<>(pageNum, pageSize),queryWrapper);
        }

  //导出接口excel
  @GetMapping("/export")
  public void export(HttpServletResponse response) throws Exception{
      List<User> list=userService.list();

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

  //导入接口
  @PostMapping("/import")
    public  void imp(MultipartFile file) throws Exception{
      InputStream inputStream=file.getInputStream();
      ExcelReader reader=ExcelUtil.getReader(inputStream);
      List<User> list=reader.readAll(User.class);
      System.out.println(list);
  }
}

