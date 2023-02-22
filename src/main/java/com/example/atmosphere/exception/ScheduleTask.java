package com.example.atmosphere.exception;

import com.alibaba.fastjson.JSONObject;
import com.example.atmosphere.HttpUtils;
import com.example.atmosphere.entity.Chzuatmosphere;
import com.example.atmosphere.entity.Nowatmospheredata;
import com.example.atmosphere.entity.Weekatmospheredata;
import com.example.atmosphere.service.IChzuatmosphereService;
import com.example.atmosphere.service.INowatmospheredataService;
import com.example.atmosphere.service.IWeekatmospheredataService;
import org.apache.http.HttpResponse;
import org.apache.http.util.EntityUtils;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import javax.annotation.Resource;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@EnableScheduling  //定时任务注解
@Configuration
public class ScheduleTask {
    @Resource
    private INowatmospheredataService nowatmospheredataService;

    @Resource
    private IWeekatmospheredataService weekatmospheredataService;
    @Resource
    private IChzuatmosphereService ChzuatmosphereService;

    private String[] s_Code = new String[]{
            "1270A", "1271A", "1272A", "1273A", "1274A", "1275A",
            "1276A", "1277A", "1278A", "1279A", "3464A", "1794A", "1795A", "1796A", "1797A", "3328A",
            "3465A", "3466A", "2270A", "2271A", "2273A", "2274A", "2275A", "3715A", "2277A", "2278A",
            "2279A", "2280A", "2281A", "2894A", "3329A", "1798A", "1799A", "1800A", "1801A", "1802A",
            "3633A", "2282A", "2283A", "2284A", "3330A", "2285A", "2286A", "2287A", "2288A", "2289A",
            "2290A", "2291A", "2292A", "2294A", "3173A", "2295A", "2296A", "2297A", "2298A", "2299A",
            "3207A", "3331A", "2301A", "2303A", "2875A", "3468A", "3469A", "2306A", "3187A", "3463A",
            "3634A", "3701A", "2307A", "2308A", "2309A", "2310A", "2311A", "2312A", "3332A", "2314A",
            "2315A", "3237A", "3333A", "3334A", "2316A", "2317A", "2318A", "3470A",
            "1409A","1410A","1411A","1412A","1413A","3539A","1876A","1877A","3540A","3541A","3542A"
    };  //所有站点的编号
    private String[] time = new String[]{"2022-8-9 8:00:00","2022-8-8 8:00:00","2022-8-7 8:00:00","2022-8-6 8:00:00", "2022-8-5 8:00:00", "2022-8-4 8:00:00",
            "2022-8-3 8:00:00", "2022-8-2 8:00:00", "2022-8-1 8:00:00", "2022-7-31 8:00:00","2022-7-30 8:00:00","2022-7-29 8:00:00","2022-7-28 8:00:00",
            "2022-7-27 8:00:00","2022-7-26 8:00:00","2022-7-25 8:00:00","2022-7-24 8:00:00","2022-7-23 8:00:00","2022-7-22 8:00:00","2022-7-21 8:00:00",
            "2022-7-20 8:00:00","2022-7-19 8:00:00","2022-7-18 8:00:00","2022-7-17 8:00:00","2022-7-16 8:00:00","2022-7-15 8:00:00","2022-7-14 8:00:00",
            "2022-7-13 8:00:00","2022-7-12 8:00:00","2022-7-11 8:00:00","2022-7-10 8:00:00","2022-7-9 8:00:00"};  //所有站点的编号

    //每天凌晨到晚上八点更新数据
    @Scheduled(cron = "0 0/240 0,20 * * ?")
    public void GetData() {
        ChzuatmosphereService.remove(null);
        long num = ChzuatmosphereService.count();
        //每天定时清空数据
        if (num >= 570) {
            ChzuatmosphereService.remove(null);
        }
        Calendar   cal   =   Calendar.getInstance();
        cal.add(Calendar.DATE,   -1);
        String yesterday1= new SimpleDateFormat( "yyyy-MM-dd 00:00:00").format(cal.getTime());
        String yesterday2= new SimpleDateFormat( "yyyy-MM-dd 4:00:00").format(cal.getTime());
        String yesterday3= new SimpleDateFormat( "yyyy-MM-dd 8:00:00").format(cal.getTime());
        String yesterday4= new SimpleDateFormat( "yyyy-MM-dd 12:00:00").format(cal.getTime());
        String yesterday5= new SimpleDateFormat( "yyyy-MM-dd 16:00:00").format(cal.getTime());
        String yesterday6= new SimpleDateFormat( "yyyy-MM-dd 20:00:00").format(cal.getTime());
        List<String> yesterdays=new ArrayList<String>();
        yesterdays.add(yesterday1);
        yesterdays.add(yesterday2);
        yesterdays.add(yesterday3);
        yesterdays.add(yesterday4);
        yesterdays.add(yesterday5);
        yesterdays.add(yesterday6);

        //当数据库数据为6条时清空数据库数据
        //ChzuatmosphereService.remove(null);
        for(int j=0;j< yesterdays.size();j++) {
            for (int i = 0; i < s_Code.length; i++) {

                String host = "https://api.epmap.org";
                String path = "/api/v1/air/station";
                String method = "GET";
                String appcode = "6918864e8f774be196a00e406e987db7";
                Map<String, String> headers = new HashMap<String, String>();
                //最后在header中的格式(中间是英文空格)为Authorization:APPCODE 83359fd73fe94948385f570e3c139105
                headers.put("Authorization", "APPCODE " + appcode);
                Map<String, String> querys = new HashMap<String, String>();
                querys.put("pubtime", yesterdays.get(j));
                //querys.put("pubtime", "2022-8-4 20:00:00");
                querys.put("station_code", s_Code[i]);  //设计数组要所有的测站代码
                try {
                    /**
                     * 重要提示如下:
                     * HttpUtils请从
                     * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/src/main/java/com/aliyun/api/gateway/demo/util/HttpUtils.java
                     * 下载
                     *
                     * 相应的依赖请参照
                     * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/pom.xml
                     */
                    HttpResponse response = HttpUtils.doGet(host, path, method, headers, querys);  //这里已经获取到了http请求

                    //获取response的body
                    System.out.println(response.getEntity());
                    String resData = EntityUtils.toString(response.getEntity());
                    JSONObject responseJSON = JSONObject.parseObject(resData);
                    JSONObject dataarray = responseJSON.getJSONObject("data");  //这里实际不是array，而是object对象

                    //实体类注入数据
                    Chzuatmosphere chzuatmosphere = new Chzuatmosphere();

                    chzuatmosphere.setAqi(dataarray.getString("AQI"));
                    chzuatmosphere.setCo(dataarray.getString("CO"));
                    chzuatmosphere.setNo2(dataarray.getString("NO2"));
                    chzuatmosphere.setO3(dataarray.getString("O3"));
                    chzuatmosphere.setPm25(dataarray.getString("PM2_5"));
                    chzuatmosphere.setPm10(dataarray.getString("PM10"));
                    chzuatmosphere.setSo2(dataarray.getString("SO2"));
                    chzuatmosphere.setCity(dataarray.getString("city"));
                    chzuatmosphere.setCitycode(dataarray.getString("city_code"));
                    chzuatmosphere.setPubtime(dataarray.getString("pubtime"));
                    chzuatmosphere.setQuality(dataarray.getString("quality"));
                    chzuatmosphere.setStation(dataarray.getString("station"));
                    chzuatmosphere.setStationcode(dataarray.getString("station_code"));
                    chzuatmosphere.setLatitude(dataarray.getString("latitude"));
                    chzuatmosphere.setLongitude(dataarray.getString("longitude"));
                    ChzuatmosphereService.saveOrUpdate(chzuatmosphere);

                    System.out.println("插入了一条数据!");
                    System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()) + " >>cron执行....");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

        }
    }

    //每天的早上八点到晚上八点更新数据,每隔一小时更新一次数据库数据
    @Scheduled(cron = "0 30/60 8-20 * * ?")
    public void InsertNew() {
        nowatmospheredataService.remove(null);
        for (int i = 0; i < s_Code.length; i++) {
            Date date = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd  8:00:00");
            String sDate = formatter.format(date);
            Calendar calendar = Calendar.getInstance();
            /* HOUR_OF_DAY 指示一天中的小时 */
            calendar.set(Calendar.HOUR_OF_DAY, calendar.get(Calendar.HOUR_OF_DAY) - 1);
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:00:00");
            String beforehour=df.format(calendar.getTime());
            String host = "https://api.epmap.org";
            String path = "/api/v1/air/station";
            String method = "GET";
            String appcode = "6918864e8f774be196a00e406e987db7";
            Map<String, String> headers = new HashMap<String, String>();
            //最后在header中的格式(中间是英文空格)为Authorization:APPCODE 83359fd73fe94948385f570e3c139105
            headers.put("Authorization", "APPCODE " + appcode);
            Map<String, String> querys = new HashMap<String, String>();
            querys.put("pubtime", beforehour);
            querys.put("station_code", s_Code[i]);  //设计数组要所有的测站代码

            try {
                /**
                 * 重要提示如下:
                 * HttpUtils请从
                 * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/src/main/java/com/aliyun/api/gateway/demo/util/HttpUtils.java
                 * 下载
                 *
                 * 相应的依赖请参照
                 * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/pom.xml
                 */
                HttpResponse response = HttpUtils.doGet(host, path, method, headers, querys);  //这里已经获取到了http请求

                //获取response的body
                System.out.println(response.getEntity());
                String resData = EntityUtils.toString(response.getEntity());
                JSONObject responseJSON = JSONObject.parseObject(resData);
                JSONObject dataarray = responseJSON.getJSONObject("data");  //这里实际不是array，而是object对象


                //Now实体类注入数据
                Nowatmospheredata nowatmospheredata = new Nowatmospheredata();

                nowatmospheredata.setAqi(dataarray.getString("AQI"));
                nowatmospheredata.setCo(dataarray.getString("CO"));
                nowatmospheredata.setNo2(dataarray.getString("NO2"));
                nowatmospheredata.setO3(dataarray.getString("O3"));
                nowatmospheredata.setPm25(dataarray.getString("PM2_5"));
                nowatmospheredata.setPm10(dataarray.getString("PM10"));
                nowatmospheredata.setSo2(dataarray.getString("SO2"));
                nowatmospheredata.setCity(dataarray.getString("city"));
                nowatmospheredata.setCitycode(dataarray.getString("city_code"));
                nowatmospheredata.setPubtime(dataarray.getString("pubtime"));
                nowatmospheredata.setQuality(dataarray.getString("quality"));
                nowatmospheredata.setStation(dataarray.getString("station"));
                nowatmospheredata.setStationcode(dataarray.getString("station_code"));
                nowatmospheredata.setLatitude(dataarray.getString("latitude"));
                nowatmospheredata.setLongitude(dataarray.getString("longitude"));
                nowatmospheredataService.saveOrUpdate(nowatmospheredata);

                System.out.println("插入了一条数据!");
                System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()) + " >>cron执行....");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @Scheduled(cron = "00 40 8 * * ?")  //定时任务注解每天早上8点向数据库插入数据
    public void InsertOld() {
        //当wrapper参数为null时相当于整表删除,实现逻辑：每次向每日数据表塞入数据之前，先清空整张表的数据
     for (int j = 0; j < time.length; j++) {
         for (int i = 0; i < s_Code.length; i++) {
             Date date = new Date();
             SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
             String sDate = formatter.format(date);
             System.out.println(formatter.format(date));
             String host = "https://api.epmap.org";
             String path = "/api/v1/air/station";
             String method = "GET";
             String appcode = "6918864e8f774be196a00e406e987db7";
             Map<String, String> headers = new HashMap<String, String>();
             //最后在header中的格式(中间是英文空格)为Authorization:APPCODE 83359fd73fe94948385f570e3c139105
             headers.put("Authorization", "APPCODE " + appcode);
             Map<String, String> querys = new HashMap<String, String>();
             querys.put("pubtime", time[j]);
             //querys.put("pubtime", "" + time[j] + "");
             //querys.put("pubtime", "2022-6-23 8:00:00");
             querys.put("station_code", s_Code[i]);  //设计数组要所有的测站代码

             try {
                 /**
                  * 重要提示如下:
                  * HttpUtils请从
                  * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/src/main/java/com/aliyun/api/gateway/demo/util/HttpUtils.java
                  * 下载
                  *
                  * 相应的依赖请参照
                  * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/pom.xml
                  */
                 HttpResponse response = HttpUtils.doGet(host, path, method, headers, querys);  //这里已经获取到了http请求

                 //获取response的body
                 System.out.println(response.getEntity());
                 String resData = EntityUtils.toString(response.getEntity());
                 JSONObject responseJSON = JSONObject.parseObject(resData);
                 JSONObject dataarray = responseJSON.getJSONObject("data");  //这里实际不是array，而是object对象


                 System.out.println("插入了一条数据!");
                 System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()) + " >>cron执行....");
             } catch (Exception e) {
                 e.printStackTrace();
             }

             System.out.println("test..." + DateFormat.getDateInstance().format(new Date()));
         }
     }
    }

    @Scheduled(cron = "00 50 8 * * ?")  //定时任务注解每天早上8点向数据库插入数据
    public void InsertWeek() {
        //当wrapper参数为null时相当于整表删除,实现逻辑：每次向每日数据表塞入数据之前，先清空整张表的数据
        //for (int j = 0; j < time.length; j++) {
        for (int i = 0; i < s_Code.length; i++) {
            Date date = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd 8:00:00" );
            String sDate = formatter.format(date);
            System.out.println(formatter.format(date));
            String host = "https://api.epmap.org";
            String path = "/api/v1/air/station";
            String method = "GET";
            String appcode = "6918864e8f774be196a00e406e987db7";
            Map<String, String> headers = new HashMap<String, String>();
            //最后在header中的格式(中间是英文空格)为Authorization:APPCODE 83359fd73fe94948385f570e3c139105
            headers.put("Authorization", "APPCODE " + appcode);
            Map<String, String> querys = new HashMap<String, String>();
            querys.put("pubtime", "" + sDate + "");
            //querys.put("pubtime", "" + time[j] + "");
            //querys.put("pubtime", "2022-6-23 8:00:00");
            querys.put("station_code", s_Code[i]);  //设计数组要所有的测站代码

            try {
                /**
                 * 重要提示如下:
                 * HttpUtils请从
                 * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/src/main/java/com/aliyun/api/gateway/demo/util/HttpUtils.java
                 * 下载
                 *
                 * 相应的依赖请参照
                 * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/pom.xml
                 */
                HttpResponse response = HttpUtils.doGet(host, path, method, headers, querys);  //这里已经获取到了http请求

                //获取response的body
                System.out.println(response.getEntity());
                String resData = EntityUtils.toString(response.getEntity());
                JSONObject responseJSON = JSONObject.parseObject(resData);
                JSONObject dataarray = responseJSON.getJSONObject("data");  //这里实际不是array，而是object对象


                Weekatmospheredata weekatmospheredata = new Weekatmospheredata();
                weekatmospheredata.setAqi(dataarray.getString("AQI"));
                weekatmospheredata.setCo(dataarray.getString("CO"));
                weekatmospheredata.setNo2(dataarray.getString("NO2"));
                weekatmospheredata.setO3(dataarray.getString("O3"));
                weekatmospheredata.setPm25(dataarray.getString("PM2_5"));
                weekatmospheredata.setPm10(dataarray.getString("PM10"));
                weekatmospheredata.setSo2(dataarray.getString("SO2"));
                weekatmospheredata.setCity(dataarray.getString("city"));
                weekatmospheredata.setCitycode(dataarray.getString("city_code"));
                weekatmospheredata.setPubtime(dataarray.getString("pubtime"));
                weekatmospheredata.setQuality(dataarray.getString("quality"));
                weekatmospheredata.setStation(dataarray.getString("station"));
                weekatmospheredata.setStationcode(dataarray.getString("station_code"));
                weekatmospheredataService.saveOrUpdate(weekatmospheredata);


                System.out.println("插入了一条数据!");
                System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()) + " >>cron执行....");
            } catch (Exception e) {
                e.printStackTrace();
            }

            System.out.println("test..." + DateFormat.getDateInstance().format(new Date()));
        }
    }
}


