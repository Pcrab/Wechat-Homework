// pages/tool/moss/moss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide: true,
    weight: "normal",
  },

  parse: function (eng) {
    var somethingWrong = 0;
    var result = "";
    for (var i = 0; i < eng.length;) {
      var subEng = eng.substring(i, ++i);
      if ("a" == subEng) {
        result += ".-  ";
      } else if ("a" == subEng) {
        result += ".-  ";
      } else if ("b" == subEng) {
        result += "-...  ";
      } else if ("c" == subEng) {
        result += "-.-.  ";
      } else if ("d" == subEng) {
        result += "-..  ";
      } else if ("e" == subEng) {
        result += ".  ";
      } else if ("f" == subEng) {
        result += "..-.  ";
      } else if ("g" == subEng) {
        result += "--.  ";
      } else if ("h" == subEng) {
        result += "....  ";
      } else if ("i" == subEng) {
        result += "..  ";
      } else if ("j" == subEng) {
        result += ".---  ";
      } else if ("k" == subEng) {
        result += "-.-  ";
      } else if ("l" == subEng) {
        result += ".-..  ";
      } else if ("m" == subEng) {
        result += "--  ";
      } else if ("n" == subEng) {
        result += "-.  ";
      } else if ("o" == subEng) {
        result += "---  ";
      } else if ("p" == subEng) {
        result += ".--.  ";
      } else if ("q" == subEng) {
        result += "--.-  ";
      } else if ("r" == subEng) {
        result += ".-.  ";
      } else if ("s" == subEng) {
        result += "...  ";
      } else if ("t" == subEng) {
        result += "-  ";
      } else if ("u" == subEng) {
        result += "..-  ";
      } else if ("v" == subEng) {
        result += "...-  ";
      } else if ("w" == subEng) {
        result += ".--  ";
      } else if ("x" == subEng) {
        result += "-..-  ";
      } else if ("y" == subEng) {
        result += "-.--  ";
      } else if ("z" == subEng) {
        result += "--..  ";
      } else if ("0" == subEng) {
        result += "-----  ";
      } else if ("1" == subEng) {
        result += ".----  ";
      } else if ("2" == subEng) {
        result += "..---  ";
      } else if ("3" == subEng) {
        result += "...--  ";
      } else if ("4" == subEng) {
        result += "....--  ";
      } else if ("5" == subEng) {
        result += ".....  ";
      } else if ("6" == subEng) {
        result += "-....  ";
      } else if ("7" == subEng) {
        result += "--...  ";
      } else if ("8" == subEng) {
        result += "---..  ";
      } else if ("9" == subEng) {
        result += "----.  ";
      } else {
        somethingWrong = 1;
        break;
      }
    }
    if (somethingWrong == 1) {
      return false;
    }
    this.setData({
      result: result,
    })
    return true;
  },

  trans: function (e) {
    var eng = e.detail.value.eng;
    if (this.parse(eng)) {
      this.setData({
        hide: false,
        weight: "normal",
      })
    } else {
      this.setData({
        hide:true,
        weight: "bold",
      })
    }
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