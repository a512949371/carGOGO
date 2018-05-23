// pages/myinfo/mybank/mybank.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bankname: '',
    bank:'',
    banknumber:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      bankname:options.name
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
  
  }, //输入银行卡信息
  Inputbank(e) {
    if (e.currentTarget.dataset.bank == 2) {
      this.setData({
        bank: e.detail.value
      })
    } else if (e.currentTarget.dataset.bank == 3) {
      this.setData({
        banknumber: e.detail.value
      })
    }
  },
  //保存用户信息
  Closeinfobox() {
    if (this.data.bank != '' && this.data.banknumber != '') {
      app.Requestpost({ cardholder: this.data.bankname, belongBank: this.data.bank, bankAccount: this.data.banknumber}, 'auth/updataUserInfo', function (res) {
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
          title: '银行信息不能为空',
          icon: 'none',
          duration: 1000
        })
      }, 500)
    }
  }
})