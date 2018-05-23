// pages/myinfo/mycard/mycard.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   card:''
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
  
  },
  Input(e) {
    this.setData({
      card: e.detail.value
    })
  },
  //保存用户信息
  Closeinfobox() {
    if (this.data.card != '') {
      if (this.isCardNo(this.data.card)){
        app.Requestpost({ idCard: this.data.card }, 'auth/updataUserInfo', function (res) {
          console.log(res)
          if (res.data.errno == 0) {
            wx.navigateTo({
              url: '../../myinfo/myinfo',
            })
          } else {
            setTimeout(function () {
              wx.showToast({
                title: res.data.errmsg,
                icon: 'none',
                duration: 1000
              })
            }, 500)
          }
        })
      }else{
        setTimeout(function () {
          wx.showToast({
            title: '请输入正确的身份证号',
            icon: 'none',
            duration: 1000
          })
        }, 500)
      }
    } else {
      setTimeout(function () {
        wx.showToast({
          title: '身份证号不能为空',
          icon: 'none',
          duration: 1000
        })
      }, 500)
    }
  },
  isCardNo: function (card) {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(card) === false) {
      return false;
    } else {
      return true
    }
  }
})