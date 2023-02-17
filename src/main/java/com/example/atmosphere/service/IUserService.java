package com.example.atmosphere.service;

import com.example.atmosphere.controller.dto.UserDTO;
import com.example.atmosphere.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author TQM
 * @since 2022-07-18
 */
public interface IUserService extends IService<User> {

    UserDTO login(UserDTO user);
}
