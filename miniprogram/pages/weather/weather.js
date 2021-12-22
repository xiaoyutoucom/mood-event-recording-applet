// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    region: [],
    province:"",
    city:"",
    district:"",
    now:{
      tmp:0,
      cond_txt:'未知',
      cond_code:'999',
      hum:0,
      pres:0,
      vis:0,
      wind_dir:0,
      wind_spd:0,
      wind_sc:0
    }
  },
  /**
   * 更新省市区信息
   */
  regionChange: function(e) {
    console.log(e.detail.value);
    this.setData({region: e.detail.value});
    this.getWeather();//更新天气
  },
  Changelc: function() {

    this.setData({city:'聊城市'});
    this.getWeather2();//更新天气
  },
  Changekm: function() {

    this.setData({city:'昆明市'});
    this.getWeather2();//更新天气
  },
  Changejn: function() {

    this.setData({city:'济南市'});
    this.getWeather2();//更新天气
  },
  Changenj: function() {

    this.setData({city:'怒江市'});
    this.getWeather2();//更新天气
  },
  /**
   * 获取实况天气数据
   */
  getWeather2: function () {
    var that = this;//this不可以直接在wxAPI函数内部使用
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now',
      data:{
        location:that.data.city,
        key: '5c85d7f337264d72a36b407f9160d5f7'
      },
      success:function(res){
        //console.log(res.data);
        that.setData({now:res.data.HeWeather6[0].now});
      }
    })
  },
  /**
   * 获取实况天气数据
   */
  getWeather: function () {
    var that = this;//this不可以直接在wxAPI函数内部使用
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now',
      data:{
        location:that.data.region[1],
        key: '5c85d7f337264d72a36b407f9160d5f7'
      },
      success:function(res){
        //console.log(res.data);
        that.setData({now:res.data.HeWeather6[0].now});
      }
    })
  },
  // 获取当前位置
  getCityNameOFLocation: function() {
    var that = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        console.log("定位成功");
        var locationString = res.latitude + "," + res.longitude;
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?l&get_poi=1',
          data: {
            "key" : "DVKBZ-PJ6CJ-K52FD-FPCU4-DROPK-LJF7O",
            "location" : locationString
          },
          method: 'GET',
          // header: {}, 
          success: function(res){
            // success
            that.setData({province:res.data.result.ad_info.province})
            that.setData({city:res.data.result.ad_info.city})
            that.setData({district:res.data.result.ad_info.district})
          },
          fail: function() {
            // fail
            console.log("请求失败");
          },
          complete: function() {
            // complete
            that.data.region.push(that.data.province)
            that.data.region.push(that.data.city)
            that.data.region.push(that.data.district)
            console.log("请求完成");
            that.onShow();
          }
        })
      },
      fail: function() {
        // fail
        console.log("定位失败");
      },
      complete: function() {
        // complete
        console.log("定位完成");
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getCityNameOFLocation();
  },
  onShow: function(e){
    this.setData({
      region:this.data.region
    })
    this.getWeather();//更新天气
  }
})