// pages/myinfo/mygetcar/mygetcar.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drivingage:''
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
      drivingage: e.detail.value
    })
  },
  //保存用户信息
  Closeinfobox() {
    if (this.data.drivingage != '') {
      app.Requestpost({ drivingAge: this.data.drivingage }, 'auth/updataUserInfo', function (res) {
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
    } else {
      setTimeout(function () {
        wx.showToast({
          title: '驾龄不能为空',
          icon: 'none',
          duration: 1000
        })
      }, 500)
    }
  }
})