// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  phone:'',
  sms:'',
  smstext:"获取验证码",
  smsStatus:true,
  time: 30,
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
  Getphone(e){
    this.setData({
      phone:e.detail.value
    })
  },
  Getcode(){
    var that = this;
    if (this.data.smsStatus) {
      if (!this.phoneTF()) {
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none',
          duration: 2000
        })
      } else {
        app.Requestpost({ mobilePhone: this.data.phone },'code/getCode',function(res){
          console.log("code",res)
          if(res.data.errno==0){
          }else{
            wx.showToast({
              title: '验证码获取失败，请重试',
              duration: 2000
            })
          }
        })
        this.Stime()
      }
    }
  },
  Getsms(e){
    console.log(e)
    this.setData({
      sms:e.detail.value,
    })
  },
    // 手机号判断
    phoneTF() {
      if ((/^1[34578]\d{9}$/.test(this.data.phone))) {
        return true
      } else {
        return false
      }
    },
    // 计时器
    Stime() {
      var that = this;
      var ctime = setInterval(function () {
        if (that.data.time > 0) {
          that.data.time--
          that.setData({
            smstext: that.data.time + "s",
            smsStatus: false
          })
        }
        else {
          clearInterval(ctime);
          that.setData({
            time:30,
            smstext: "获取验证码",
            smsStatus: true
          })
        }
      }, 1000)
    },
    Login(){
      if(this.data.phone!=''&&this.data.sms!=''){
        app.Requestpost({ mobilePhone: this.data.phone, code: this.data.sms},'auth/binPhone',function(res){
          console.log("phone",res)
          if(res.data.errno==0){
            wx.navigateTo({
              url: '../index/index',
            })
          }else{
            wx.showToast({
              title: '登录失败，请重试',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }else{
        wx.showToast({
          title: '手机号或者验证码不能为空',
          icon: 'none',
          duration: 2000
        })
      }
    }
})