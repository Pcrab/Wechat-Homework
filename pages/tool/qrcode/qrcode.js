const app = getApp();
var result;
// pages/tool/qrcode/qrcode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scan: "/images/scan.png",
    isUrl: false,
  },
  copyTBL:function(e){
    var self=this;
    wx.setClipboardData({
      data: result,
      success: function(res) {
        wx.showModal({
          title: '提示',
          content: '复制成功',
          success: function(res) {
            if (res.confirm) {
              console.log('确定')
            } else if (res.cancel) {
              console.log('取消')
            }
          }
        })
      }
    });
  },

  getScancode: function () {
    var _this = this;

    wx.scanCode({
      success: (res) => {
        result = res.result;
        var html = /(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%$#_]*)?/
        if (html.test(result)) {
          _this.setData({
            result: "这是一个网址，请复制后到浏览器内打开：  " + result,
            isUrl: true,
          })
        } else {
          _this.setData({
            result: result,
          })
        }
      }
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