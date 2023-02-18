package com.example.atmosphere.service;

import com.example.atmosphere.controller.dto.UserDTO;
import com.example.atmosphere.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author DYP
 * @since 2023-01-17
 */
public interface IUserService extends IService<User> {

    UserDTO login(UserDTO userDTO);


    User register(UserDTO userDTO);
}
