// pages/tool/ascii/ascii.js
let ascii = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getResult: true,
  },

  search: function (e) {
    let word = (e.target.id).toString();
    let ten = word.charCodeAt();
    let two = ten.toString(2);
    let sixteen = ten.toString(16);
    if (0 == ten) {
      word = "空字符 ";
    } else if (1 == ten) {
      word = "标题开始 ";
    } else if (2 == ten) {
      word = "正文开始 ";
    } else if (3 == ten) {
      word = "正文结束 ";
    } else if (4 == ten) {
      word = "传输结束 ";
    } else if (5 == ten) {
      word = "请求 ";
    } else if (6 == ten) {
      word = "收到通知 ";
    } else if (7 == ten) {
      word = "响铃 ";
    } else if (8 == ten) {
      word = "退格 ";
    } else if (9 == ten) {
      word = "水平制表符 ";
    } else if (10 == ten) {
      word = "换行键 ";
    } else if (11 == ten) {
      word = "垂直制表符 ";
    } else if (12 == ten) {
      word = "换页键 ";
    } else if (13 == ten) {
      word = "回车键 ";
    } else if (14 == ten) {
      word = "不用切换 ";
    } else if (15 == ten) {
      word = "启用切换 ";
    } else if (16 == ten) {
      word = "数据链路转义 ";
    } else if (17 == ten) {
      word = "设备控制1 ";
    } else if (18 == ten) {
      word = "设备控制2 ";
    } else if (19 == ten) {
      word = "设备控制3 ";
    } else if (20 == ten) {
      word = "设备控制4 ";
    } else if (21 == ten) {
      word = "拒绝接收 ";
    } else if (22 == ten) {
      word = "同步空闲 ";
    } else if (23 == ten) {
      word = "结束传输块 ";
    } else if (24 == ten) {
      word = "取消 ";
    } else if (25 == ten) {
      word = "媒介结束 ";
    } else if (26 == ten) {
      word = "代替 ";
    } else if (27 == ten) {
      word = "换码(溢出) ";
    } else if (28 == ten) {
      word = "文件分隔符 ";
    } else if (29 == ten) {
      word = "分组符 ";
    } else if (30 == ten) {
      word = "记录分隔符 ";
    } else if (31 == ten) {
      word = "单元分隔符 ";
    } else if (32 == ten) {
      word = "空格 ";
    } else if (127 == ten) {
      word = "退格 ";
    }
    for (; 8 > two.length; two = "0" + two);
    word += " ";
    this.setData({
      getResult: false,
      char: word,
      inTen: ten,
      inTwo: two,
      inSixteen:sixteen,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (let i = 0; i < 128; ++i) {
      ascii[i] = String.fromCharCode(i);
    }
    this.setData({
      ascii: ascii,
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