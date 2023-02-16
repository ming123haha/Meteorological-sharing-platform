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
 * @since 2022-07-25
 */
@Getter
@Setter
  @TableName("sys_historyatmospheredata")
@ApiModel(value = "Historyatmospheredata对象", description = "")
public class Historyatmospheredata implements Serializable {

    private static final long serialVersionUID = 1L;

      @TableId(value = "id", type = IdType.AUTO)
      private Integer id;

    private String aqi;

    private String co;

    private String no2;

    private String pm25;

    private String pm10;

    private String so2;

    private String o3;

    private String city;

    private String citycode;

    private String pubtime;

    private String quality;

    private String station;

    private String stationcode;


}
