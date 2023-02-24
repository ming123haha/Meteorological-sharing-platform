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
 * @author DYP
 * @since 2023-01-19
 */
@Getter
@Setter
  @TableName("sys_realequipments")
@ApiModel(value = "Realequipments对象", description = "")
public class Realequipments implements Serializable {

    private static final long serialVersionUID = 1L;

      @TableId(value = "id", type = IdType.AUTO)
      private Integer id;

    private String station;

    private String stationcode;

    private String latitude;

    private String longtitude;

}
