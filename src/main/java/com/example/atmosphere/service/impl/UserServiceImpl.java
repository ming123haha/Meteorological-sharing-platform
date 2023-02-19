package com.example.atmosphere.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.log.Log;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.atmosphere.common.Constants;
import com.example.atmosphere.controller.dto.UserDTO;
import com.example.atmosphere.entity.User;
import com.example.atmosphere.exception.ServiceException;
import com.example.atmosphere.mapper.UserMapper;
import com.example.atmosphere.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.atmosphere.utils.TokenUtils;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author DYP
 * @since 2023-01-17
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

    private static final Log LOG=Log.get();
    @Override
    public UserDTO login(UserDTO userDTO) {
       User one = getUserInfo(userDTO);
                if(one!=null) {
                    BeanUtil.copyProperties(one,userDTO,true);
                    //设置token
                    String token=TokenUtils.genToken(one.getId().toString(),one.getPassword());
                    userDTO.setToken(token);
                    return userDTO;
                }else{
                    throw new ServiceException(Constants.CODE_600,"用户名或密码错误");
                }
    }

    @Override
    public User register(UserDTO userDTO){
        User one = getUserInfo(userDTO);
        if (one == null){
            one = new User();
            BeanUtil.copyProperties(userDTO,one,true);
            save(one);   //把copy完之后的用户对象存储到数据库
        }else{
            throw new ServiceException(Constants.CODE_600,"用户已存在！");
        }
        return one;

    }

    private User getUserInfo(UserDTO userDTO){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", userDTO.getUsername());
        queryWrapper.eq("password", userDTO.getPassword());
        User one;
        try {
            one = getOne(queryWrapper);
        }catch (Exception e) {
            LOG.error(e);
            throw new ServiceException(Constants.CODE_500,"系统错误");
        }
        return one;
    }


}
