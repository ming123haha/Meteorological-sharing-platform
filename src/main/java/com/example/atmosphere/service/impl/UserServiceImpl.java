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
 * @author TQM
 * @since 2022-07-18
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

    private static final Log LOG=Log.get();
    @Override
    public UserDTO login(UserDTO userDTO) {
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
}
