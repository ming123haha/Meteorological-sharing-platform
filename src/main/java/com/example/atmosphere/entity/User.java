package com.example.atmosphere.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * <p>
 * 
 * </p>
 *
 * @author TQM
 * @since 2022-07-18
 */
@Getter
@Setter
@TableName("sys_user")
@ApiModel(value = "User对象", description = "")
@ToString
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

      @ApiModelProperty("id")
        @TableId(value = "id", type = IdType.AUTO)
      private Integer id;

    private String username;

    private String password;

    //private LocalDateTime createTime;


}
