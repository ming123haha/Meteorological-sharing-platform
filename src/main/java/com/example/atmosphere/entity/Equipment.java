package com.example.atmosphere.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * 
 * </p>
 *
 * @author TQM
 * @since 2022-07-21
 */
@Getter
@Setter
  @TableName("sys_equipment")
@ApiModel(value = "Equipment对象", description = "")
public class Equipment implements Serializable {

    private static final long serialVersionUID = 1L;

      @TableId(value = "ID", type = IdType.AUTO)
      private Integer id;

    private String 仪器编号;

    private String 监测站区域;

    private String 开始监测时间;

    private String 结束监测时间;

    private String 仪器管理人员;


}
