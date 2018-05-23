// pages/myinfo/myinfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    inputboxTF:false,
    showbox:false,
    judge:1,
    userdata:{
      name:'',
      identitycard:'',
      drivingage:'',
      drivingexperience:'',
      bankname:'',
      bank:'',
      banknumber:''
    },
    showbanktip:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    app.Requestget('','auth/getUserInfo',function(res){ 
      var userinfo=res.data.data.userInfo;
      console.log("userinfo", res)
      that.setData({
        'userdata.name': userinfo.name||'',
        'userdata.identitycard': userinfo.idCard||'',
        'userdata.drivingage': userinfo.drivingAge||'',
        'userdata.drivingexperience': userinfo.experienced||'',
        'userdata.bankname': userinfo.cardholder||'',
        'userdata.bank': userinfo.belongBank||'',
        'userdata.banknumber': userinfo.bankAccount||''
      })
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
  //打开用户信息输入盒子
  Openinputbox(e){
    console.log(e)
    if (e.currentTarget.dataset.num==1){
      wx.navigateTo({
        url: './myname/myname',
      })
    } else if (e.currentTarget.dataset.num == 2){
      wx.navigateTo({
        url: './mycard/mycard',
      })
    } else if (e.currentTarget.dataset.num == 3) {
      wx.navigateTo({
        url: './mygetcar/mygetcar',
      })
    } else if (e.currentTarget.dataset.num == 4) {
      wx.navigateTo({
        url: './mysetcar/mysetcar',
      })
    } else if (e.currentTarget.dataset.num == 5) {
      if (this.data.userdata.name!=''){
        wx.navigateTo({
          url: './mybank/mybank?name=' + this.data.userdata.name,
        })
      }else{
        this.setData({
          showbanktip:true
        })
      }
    }
    
  },
  //保存用户信息
  Closeinfobox(){    
  },
  Closebanktip(){
    this.setData({
      showbanktip: false
    })
  }
})