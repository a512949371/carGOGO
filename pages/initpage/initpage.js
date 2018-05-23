// pages/initpage/initpage.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userpic:'',
    code:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getStorage({
      key: 'token',
      success: function (res) {
        console.log("2222",res.data)
        if(res.data!=undefined&&res.data!=''){
          wx.navigateTo({
            url: '../index/index',
          })
        }
      }
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
  
  },
  //获取用户信息
  Getinfo(){
    var that=this;
        wx.login({
          success: res => {
            console.log("appid",res)
            that.setData({
              code:res.code
            })
            wx.getUserInfo({
              success: res => {
                that.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
                })
                wx.setStorage({
                  key: 'userpic',
                  data: res.userInfo.avatarUrl,
                })
                wx.setStorage({
                  key: 'username',
                  data: res.userInfo.nickName,
                })
                console.log("3", res)
                let wxdata = {
                  code: that.data.code,
                  userInfo: res
                }
                app.Requestpost(wxdata, 'login/loginByWeixin', function (res) {
                  console.log("222", res)
                  wx.setStorage({
                    key: 'token',
                    data: res.data.data.token,
                  })
                  wx.navigateTo({
                    url: '../index/index',
                  })
                }) 
              }
            }) 
          }
        })
  }
})