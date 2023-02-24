package com.example.atmosphere.entity;

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
 * @since 2023-02-17
 */
@Getter
@Setter
  @TableName("result_humidity_merge")
@ApiModel(value = "HumidityMerge对象", description = "")
public class HumidityMerge implements Serializable {

    private static final long serialVersionUID = 1L;

    private String stationNumber;

    private String latitude;

    private String longitude;

    private String elevationOfObservationStation;

    private String year;

    private String month;

    private String day;

    private String averageRelativeHumidity;

    private String minimumRelativeHumidity;


}
