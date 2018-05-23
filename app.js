//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     console.log("appid",res)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //           wx.setStorage({
    //         key: 'userpic',
    //         data: '',
    //       })
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null
  },
  Requestpost:function(wxdata,appurl,callback){
    var Url ='http://192.168.1.233:4000/api/';
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: Url + appurl,
      header:{
        "x-nideshop-token": wx.getStorageSync("token")||''
      },
      data: wxdata,
      method:"POST",
      success: function (res) {
        callback(res)
      },
      fail:function(res){
        callback(res)
      },
      complete:function(res){
        wx.hideLoading()
      }
    })
  },
  Requestget: function (wxdata, appurl, callback){
    var Url = 'http://192.168.1.233:4000/api/';
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: Url + appurl,
      data: '',
      header: {
        "x-nideshop-token": wx.getStorageSync("token") || ''
      },
      method: "GET",
      success: function (res) {
        callback(res)
      },
      fail: function (res) {
        callback(res)
      },
      complete: function (res) {
        wx.hideLoading()
      }
    })
  }
})