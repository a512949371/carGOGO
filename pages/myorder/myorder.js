// pages/myorder/maorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderdata: [{
      carname: '兰博基尼LP',
      cartype: '1',
      carid: '1',
      carstatus: "1",
      carcard: '云A203KX',
      carexpect: '2018/5/10 18:00-2018/5/10 18:00',
      caractual: '2018/5/10 18:00-2018/5/10 18:00',
      cardeposit: '300000',
      carrent: '30000'
    },
    {
      carname: '宝马I8',
      cartype: '2',
      carid: '2',
      carstatus: "2",
      carcard: '云A203KX',
      carexpect: '2018/5/10 18:00-2018/5/10 18:00',
      caractual: '',
      cardeposit: '300000',
      carrent: ''
    }]
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
  Opendetail(e){
    wx.navigateTo({
      url: './orderdetail/orderdetail?id='+e.currentTarget.dataset.id,
    })
  }
})