// pages/ceshi/ceshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    //文字逐个显示
    var story = "我想对你说\n我能抽象出整个世界\n但是，我却不能抽象出你\n因为你在我的心中是那么的具体\n我可以重载甚至覆盖\n这个世界里任何一种方法\n但是，我却不能重载我对你的爱意\n你是我世界里私有的静态属性\n只有我拥有调用你的权力\n我不小心调用了，爱上了你这个方法\n我把自己作为参数传递进去\n才发现爱你是一个无限的循环\n我找不到终止的轨迹\n它不停地返回对你的思念压入我心里的堆栈\n直至我的内存爆满，再也装不下别的程序\n亲爱的，我永远爱你！！！\n❤ \n ❤❤❤\n❤❤❤❤❤❤\n\n## to My Dear (๑′ᴗ‵๑)~ \n回顾之前\n总感觉我们相识了好久...\n当然实际也确实认识了好久\n你问过我我是什么时候喜欢你的\n其实很早我就想追你了\n每天早上醒来就想给你发消息\n那个时候我就已经开始喜欢你了\n一有时间就想找你和你聊天\n但我有点慢热，当我觉得你也喜欢我的时候\n我才开始想要追你\n这份迟来的告白其实我很早就开始准备了\n		现在其实也没有做的很完美\n但我还是想向你表白\n不想让你等久了\n所以我想说: 我喜欢你，希望我们可以一辈子在一起\n自从上一次去送你\n过去了好久了\n好想早点再见到你\n想你\n想和你一起吃火锅\n想和你一起去迪士尼\n想和你一起去西双版纳\n想陪你一辈子\n想早点结束异地\n我想你了## by 永远爱你的小鱼头 (๑′ᴗ‵๑)~ \n❤❤❤❤❤❤\n❤❤❤\n❤\n"
    var i = 0;
    var time = setInterval(function () {
      var text = story.substring(0, i);
      i++;
      that.setData({
        text: text
      });
      that.cl();
      if (text.length == story.length) {
        //   console.log("定时器结束！");
        clearInterval(time);
      }
    }, 400)

  },
  cl: function(){
    var chars =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var res = "";
    var res2 = "";
    for(var i = 0; i < 6 ; i ++) {
    var id = Math.ceil(Math.random()*16);
    var id2 = Math.ceil(Math.random()*16);
    res += chars[id];
    res2 += chars[id2];
    }
    this.setData({
      color: "#"+res,
      colorb: "#"+res2
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
