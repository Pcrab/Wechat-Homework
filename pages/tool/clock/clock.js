// pages/tool/clock/clock.js
var time = 10000,
  timerID,
  stopped = 0,
  paused = 0,
  initTime = "0:00.00";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    min: "0",
    sec: "00",
    msec: "00",
    startHide: false,
    pauseHide: true,
    stopHide: true,
  },

  start: function () {
    this.setData({
      startHide:true,
      pauseHide: false,
      stopHide: true,
    })
    var that = this;
    if (time != 10000 && stopped == 0 && paused == 0) {
      return;
    }
    stopped = 0;
    paused = 0;
    timerID = setInterval(() => {
      that.timer();
    }, 10);

  },

  stop: function () {
    this.setData({
      startHide: false,
      pauseHide: true,
      stopHide: true,
    })
    clearInterval(timerID);
    stopped = 1;
    time = 10000;
    this.setData({
      min: "0",
      sec: "00",
      msec: "00",
    });
  },

  pause: function () {
    this.setData({
      startHide: false,
      pauseHide: true,
      stopHide: false,
    })
    clearInterval(timerID);
    paused = 1;
  },

  timer: function (e) {
    var that = this;
    if (time >= 95999) {
      clearInterval(timerID);
    }
    ++time;
    if ((time % 10000) == 6000) {
      time += 4000;
    }
    var min = parseInt(time / 10000 - 1);
    var sec = parseInt((time / 100) % 100);
    if (sec < 10) {
      sec = "0" + sec;
    }
    var msec = parseInt(time % 100);
    if (msec < 10) {
      msec = "0" + msec;
    }
    this.setData({
      min: min,
      sec: sec,
      msec: msec,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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