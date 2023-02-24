package com.example.atmosphere.config;

import com.example.atmosphere.config.interceptor.JwtInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(jwtInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/user/login","/**/export","/nowatmospheredata/**","/chzuatmosphere/**","/weekatmospheredata/**",
                        "/realequipments/**","/user/**","/evaporation-merge/**","/sunshine-merge/**","/groundtemperature-merge/**","/humidity-merge/**","/precipitation-merge/**","/pressure-merge/**",
                        "/temperature-merge/**","/wind-merge/**"); //配置请求是否合法
    }

    @Bean
    public JwtInterceptor jwtInterceptor(){
        return new JwtInterceptor();
    }
}
