const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
// 公共API
  // @params 传入节日日期的str，例如'-10-1','-12-25','-1-1'等
  // @return resolve()回调的是个数组
  // 数组第一个参数返回的是'今'或者'明'这个字符串，第二个参数返回的是还剩多少天
  settime: function (str) {

    let promis = new Promise((resolve, reject) => {

      // 获取时间对象
      let dateObj = new Date()
      let year = dateObj.getFullYear()
      let month = dateObj.getMonth()
      let day = dateObj.getDate()

      // 求当前日期和时间的时间戳
      // 这里需要注意的是，利用new Date().getMonth()得到的是0-11的数值
      // 而用new Date('year-month-day')初始化求今天0点0分0秒时的Month
      // 需要传入的是1-12的,也就是month要+1

      let now = new Date()
      let target = new Date(year + str)  // 目标日期

      // 先保存起来，后续还会用
      let nowtime = now.getTime()    // 当前日期时间戳
      let sjc = nowtime - target.getTime() // 时间差

      // 回调的2个参数，会组成数组传入回调函数中
      // 这2个信息会直接赋值显示到页面中
      let theyear = '今'
      let thedays = 0

      if (sjc < 0) {
        // 还未过今年某个节日
        theyear = '今'
        thedays = Math.floor(Math.abs(sjc / (24 * 60 * 60 * 1000)))
      } else if (sjc > 0) {
        // 已经过了今年某个节日
        let mn = year - 0 + 1
        let mntarget = new Date(mn + str)
        let sjc2 = mntarget.getTime() - nowtime
        theyear = '明'
        thedays = Math.floor(sjc2 / (24 * 60 * 60 * 1000))
      } else {
        // 一年的节日期间
        theyear = '今'
        thedays = 0
      }
      let arr = [theyear, thedays]
      resolve(arr)
    })
    return promis
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this
    var i = setInterval(function() {
      that.data.isSend++
      that.setData({
        nowdate:that.timestampToTime(Date.now())
      })
      var meett = Date.UTC(2021, 4, 5, 8, 27, 10)
       var fristtalk=that.lovetime(meett,0)
       that.setData({
        meett:'2021-04-05 08:27:10',
        meet: fristtalk
       })
       var lovet = Date.UTC(2021, 10, 14, 8, 25, 20)
       var love=that.lovetime(lovet,0)
       that.setData({
        lovet:'2021-10-14 08:25:20',
        love: love
       })
       var bbt = Date.UTC(2022, 6, 20, 0, 0, 1)
       var bb=that.lovetime(bbt,1)
       that.setData({
        bbt:that.timestampToTime(bbt),
        bb: bb
       })
 }, 1000)
    this.setxiaoqing()
    // 设置距离xx还剩多少天
    this.setkaoyan()
    this.setgk() // 高考
    this.setgq() // 国庆
    this.setyd() // 元旦
    this.setsd() // 圣诞
  },
  timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D+h+m+s;
},
  /**
   * 求距离校庆还剩多少天
   */
  setxiaoqing: function () {
    let promis = this.settime('-5-2')
    let that = this

    promis.then((arr) => {
      that.setData({
        xiaoqing_year: arr[0],
        xiaoqing_days: arr[1]
      })
    })
  },
  /**
   * 求距离高考还剩多少天
   */
  setkaoyan: function () {
    let promis = this.settime('-12-19')
    let that = this

    promis.then((arr) => {
      that.setData({
        kaoyan_year: arr[0],
        kaoyan_days: arr[1]
      })
    })
  },
  /**
   * 求距离高考还剩多少天
   */
  setgk: function () {
    let promis = this.settime('-06-07')
    let that = this

    promis.then((arr) => {
      that.setData({
        gk_year: arr[0],
        gk_days: arr[1]
      })
    })
  },

  // 设置国庆信息
  setgq: function () {
    let promis = this.settime('-10-01')
    let that = this

    promis.then((arr) => {
      that.setData({
        gq_year: arr[0],
        gq_days: arr[1]
      })
    })
  },

  // 设置元旦
  setyd: function () {
    let promis = this.settime('-01-01')
    let that = this

    promis.then((arr) => {
      that.setData({
        yd_year: arr[0],
        yd_days: arr[1]
      })
    })
  },

   nowdate: function () {
    wx.showToast({
      title: '北京时间',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  nowdate1: function () {
    wx.showToast({
      title: '好想早点遇到你',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  nowdate2: function () {
    wx.showToast({
      title: '一辈子在一起',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  nowdate3: function () {
    wx.showToast({
      title: '未完待续',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  nowdate4: function () {
    wx.showToast({
      title: '每天开心！',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  nowdate5: function () {
    wx.showToast({
      title: 'good good study',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  // 设置圣诞
  setsd: function () {
    let promis = this.settime('-12-25')
    let that = this

    promis.then((arr) => {
      that.setData({
        sd_year: arr[0],
        sd_days: arr[1]
      })
    })
  },
  lovetime: function (t1,x)  {

    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var days = hours * 24
    var years = days * 365
    var today = new Date()
    var todayYear = today.getFullYear()
    var todayMonth = today.getMonth() + 1
    var todayDate = today.getDate()
    var todayHour = today.getHours()
    var todayMinute = today.getMinutes()
    var todaySecond = today.getSeconds()
    
  var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
  var dif = 0
  if(x==1)
  {
  dif = t1-t2
  }
  else{
   dif = t2-t1
  }
  //相遇

	var difYears = Math.floor(dif / years)
	var difDays = Math.floor((dif / days) - difYears * 365)
	var difHours = Math.floor((dif - (difYears * 365 + difDays) * days) / hours)
	var difMinutes = Math.floor((dif - (difYears * 365 + difDays) * days - difHours * hours) / minutes)
	var difSeconds = Math.floor((dif - (difYears * 365 + difDays) * days - difHours * hours - difMinutes *
      minutes) / seconds)
      let that = this

        return difYears + "年" +difDays + "天" +
        difHours + "时" + difMinutes + "分" + difSeconds + "秒"
    

    
}
})