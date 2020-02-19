// pages/tool/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: null,
    displayValue: "0",
    operator: null,
    waitingForOperand: false
  },

  clearAll() {
    this.setData({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    })
  },

  /* 仅清空当前显示的输入值 */
  clearDisplay() {
    this.setData({
      displayValue: '0'
    })
  },

  onTapFunction: function(event) {
    const key = event.target.dataset.key;

    switch(key) {
      case 'key-clear':
        if (this.data.displayValue !== '0') {
          this.clearDisplay();
        } else {
          this.clearAll();
        }

        break;

      case 'key-sign':
        var newValue = parseFloat(this.data.displayValue) * -1
        
        this.setData({
          displayValue: String(newValue)
        })

        break;

      case 'key-percent':
        const fixedDigits = this.data.displayValue.replace(/^-?\d*\.?/, '')
        var newValue = parseFloat(this.data.displayValue) / 100
        
        this.setData({
          displayValue: String(newValue.toFixed(fixedDigits.length + 2))
        });

        break;
        
      default:
        break;
    }
  },

  onTapOperator: function(event) {
    const nextOperator = event.target.dataset.key;
    const inputValue = parseFloat(this.data.displayValue);
    
    if (this.data.value == null) {
      this.setData({
        value: inputValue
      });
    } else if (this.data.operator) {
      const currentValue = this.data.value || 0;
      const newValue = this.calculatorOperations[this.data.operator](currentValue, inputValue);

      this.setData({
        value: newValue,
        displayValue: String(newValue)
      });
    }
    
    this.setData({
      waitingForOperand: true,
      operator: nextOperator
    });
  },

  onTapDigit: function(event) {
    const key = event.target.dataset.key; // 根据data-key标记按键

    if(key == 'key-dot') {
      // 按下点号
      if (!(/\./).test(this.data.displayValue)) {
        this.setData({
          displayValue: this.data.displayValue + '.',
          waitingForOperand: false
        })
      }
    } else {
      // 按下数字键
      const digit = key[key.length-1];

      if (this.data.waitingForOperand) {
        this.setData({
          displayValue: String(digit),
          waitingForOperand: false
        })
      } else {
        this.setData({
          displayValue: this.data.displayValue === '0' ? String(digit) : this.data.displayValue + digit
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.calculatorOperations = {
      'key-divide': (prevValue, nextValue) => prevValue / nextValue,
      'key-multiply': (prevValue, nextValue) => prevValue * nextValue,
      'key-add': (prevValue, nextValue) => prevValue + nextValue,
      'key-subtract': (prevValue, nextValue) => prevValue - nextValue,
      'key-equals': (prevValue, nextValue) => nextValue
    }
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