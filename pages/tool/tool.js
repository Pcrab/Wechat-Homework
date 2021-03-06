// pages/tool/tool.js
var tools=[{
    name:"calculator",
    path:"/pages/tool/calculator/calculator",
    img:"/images/tools_calculator_ico.png"
  },{
    name:"clock",
    path:"/pages/tool/clock/clock",
    img:"/images/tools_clock_ico.png"
  },{
    name:"moss",
    path:"/pages/tool/moss/moss",
    img:"/images/tools_moss_ico.png"
  },{
    name:"qrcode",
    path:"/pages/tool/qrcode/qrcode",
    img:"/images/tools_qrcode_ico.png"
  },{
    name:"setcolor",
    path:"/pages/tool/setcolor/setcolor",
    img:"/images/tools_setcolor_ico.png"
  },{
    name:"ascii",
    path:"/pages/tool/ascii/ascii",
    img:"/images/tools_ascii_ico.png"
  },{
    name:"map",
    path:"/pages/tool/map/map",
    img:"/images/tools_map_ico.png"
  },
]
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tools:tools,
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