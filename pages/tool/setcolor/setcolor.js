// pages/tool/setcolor/setcolor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentRed: 0,
    currentGreen: 0,
    currentBlue: 0,
    padBorder: "none"
  },

  setColor: function (e) {

    let color = e.target.dataset.color;

    if (e.detail.value > 255) {
      e.detail.value = 255;
    } else if (e.detail.value < 0) {
      e.detail.value = 0;
    }

    if ("red" == color) {
      this.setData({
        currentRed: e.detail.value
      })
    } else if ("green" == color) {
      this.setData({
        currentGreen: e.detail.value
      })
    } else if ("blue" == color) {
      this.setData({
        currentBlue: e.detail.value
      })
    }

    let red = 255 - this.data.currentRed;
    let green = 255 - this.data.currentGreen;
    let blue = 255 - this.data.currentBlue;
    let border = "1rpx solid rgb(" + red + ", " + green + ", " + blue + ")";
    this.setData({
      padBorder: border
    })
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