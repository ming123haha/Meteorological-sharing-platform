package com.example.atmosphere.utils;

import com.baomidou.mybatisplus.generator.FastAutoGenerator;
import com.baomidou.mybatisplus.generator.config.OutputFile;

import java.util.Collections;

//代码生成器
public class CodeGenerator {
    public static void main(String[] args) {
        generate();
    }

    public static void generate() {
        FastAutoGenerator.create("jdbc:mysql://localhost:3306/atmosphere?serverTimeZone=GMT%2b8", "root", "123")
                .globalConfig(builder -> {
                    builder.author("TQM") // 设置作者
                            .enableSwagger() // 开启 swagger 模式
                            .fileOverride() // 覆盖已生成文件
                            .outputDir("C:\\Users\\hp\\Desktop\\eco-friendly atmosphere\\Atmosphere\\src\\main\\java\\"); // 指定输出目录
                })
                .packageConfig(builder -> {
                    builder.parent("com.example.atmosphere") // 设置父包名
                            .moduleName(null) // 设置父包模块名
                            .pathInfo(Collections.singletonMap(OutputFile.mapperXml, "C:\\Users\\hp\\Desktop\\eco-friendly atmosphere\\Atmosphere\\src\\main\\resources\\mapper\\")); // 设置mapperXml生成路径
                })
                .strategyConfig(builder -> {
                    builder.entityBuilder().enableLombok();  //entity层配置
                    builder.controllerBuilder().enableHyphenStyle()  // 开启驼峰转连字符
                            .enableRestStyle();  // 开启生成@RestController 控制器
                    //builder.addInclude("sys_user") // 设置需要生成的表名
                    builder.addInclude("sys_weekatmospheredata") // 设置需要生成的表名
                            .addTablePrefix("t_", "sys_"); // 设置过滤表前缀  //这里可以更改选择忽略什么sys_ ..
                })
                //.templateEngine(new FreemarkerTemplateEngine()) // 使用Freemarker引擎模板，默认的是Velocity引擎模板
                .execute();
    }
}