//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current:'1',
    isfirst:"",
    animationData:'',
    animationuser:'',
    animationX:'',
    animatTF:false,
    userpic:'',
    username:'',
    days:[],
    hours:[],
    day:'',
    hour:'',
    value:[0,0],
    showtime:false,
    rentalcartip:false,
    setcardata:{
      carname:'',
      carid:'',
      carnumber:''
    },
    cardata:[{
      carname:'奥迪A8',
      cartype:'1',
      carid:'1',
      carnumber:"",
      useadd:'云南省昆明市官渡区大都摩天一座一楼',
      imgone: ['http://p8x2zn192.bkt.clouddn.com/image_01@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_04@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_02@2x.png','http://p8x2zn192.bkt.clouddn.com/image_03@2x.png'],
      imgtwo: ['http://p8x2zn192.bkt.clouddn.com/image_01_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_04_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_02_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_03_a@2x.png'],
      parameterone:"自动档",
      parametertwo:"2座",
      parameterthree:"1.5T"
    }, {
        carname: '兰博基尼LP',
        cartype: '2',
        carid: '2',
        carnumber: "",
        useadd: '云南省昆明市官渡区大都摩天一座一楼',
        imgone: ['http://p8x2zn192.bkt.clouddn.com/image_05@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_06@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_07@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_08@2x.png'],
        imgtwo: ['http://p8x2zn192.bkt.clouddn.com/image_05_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_06_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_07_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_08_a@2x.png'],
        parameterone: "6速AMT",
        parametertwo: "2座",
        parameterthree: "5.2L"
      }, {
        carname: '奥迪R8',
        cartype: '3',
        carid: '3',
        carnumber: "",
        useadd: '云南省昆明市官渡区大都摩天一座一楼',
        imgone: ['http://p8x2zn192.bkt.clouddn.com/image_audi_01@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_audi_04@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_audi_03@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_audi_02@2x.png'],
        imgtwo: ['http://p8x2zn192.bkt.clouddn.com/image_audi_01_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_audi_04_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_audi_03_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_audi_02_a@2x.png'],
        parameterone: "双离合",
        parametertwo: "2座",
        parameterthree: "5.2L"
    }, {
      carname: '宾利GT',
      cartype: '4',
      carid: '4',
      carnumber: "",
      useadd: '云南省昆明市官渡区大都摩天一座一楼',
      imgone: ['http://p8x2zn192.bkt.clouddn.com/image_bl_01@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_bl_04@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_bl_03@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_bl_02@2x.png'],
      imgtwo: ['http://p8x2zn192.bkt.clouddn.com/image_bl_01_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_bl_04_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_bl_03_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_bl_02_a@2x.png'],
      parameterone: "8档手自一体",
      parametertwo: "4座",
      parameterthree: "4.0T"
      }, {
        carname: '法拉利FF',
        cartype: '5',
        carid: '5',
        carnumber: "",
        useadd: '云南省昆明市官渡区大都摩天一座一楼',
        imgone: ['http://p8x2zn192.bkt.clouddn.com/image_ff_01@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_ff_04@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_ff_03@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_ff_02@2x.png'],
        imgtwo: ['http://p8x2zn192.bkt.clouddn.com/image_ff_01_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_ff_04_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_ff_03_a@2x.png', 'http://p8x2zn192.bkt.clouddn.com/image_ff_02_a@2x.png'],
        parameterone: "双离合",
        parametertwo: "4座",
        parameterthree: "6.3L"
      }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that =this;
    for(let i=0;i<31;i++){
      this.data.days.push(i)
    }
    for (let i = 1; i < 25; i++) {
      this.data.hours.push(i)
    }
    this.setData({
      days: this.data.days,
      hours: this.data.hours,
    })
    wx.getStorage({
      key: 'userpic',
      success: function(res) {
        that.setData({
          userpic:res.data
        })
      },
    })
    wx.getStorage({
      key: 'username',
      success: function (res) {
        that.setData({
          username: res.data
        })
      },
    })
    app.Requestget('','auth/getFirstStatus',function(res){
      console.log("555",res)
      if (res.data.errno==0){
        that.setData({
          isfirst:res.data.data.isFirst
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.initDownAnima();
  },
  //获取用户信息
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  Swiperchange(e){
    this.setData({
      current:"1"
    })
  },
  //图片置顶
  Showtop(e){
    var index =e.currentTarget.dataset.num;
    this.setData({
      current:index
    })
  },
  //打开用户中心
  Openuserbox(){
    var that = this;
    app.Requestget('', 'auth/getUserInfo', function (res) {
      var userinfo = res.data.data.userInfo;
      console.log("userinfo", res)
      if (userinfo.mobilePhone && userinfo.mobilePhone!=''){
        that.setData({
          animatTF: !that.data.animatTF
        })
        that.animationuser = wx.createAnimation({
          duration: 1000,
          timingFunction: "ease",
          delay: 0,
        })
        if (that.data.animatTF) {
          that.animationuser.left(0).step()
        } else {
          that.animationuser.left('-150px').step()
        }
        that.animationX = wx.createAnimation({
          duration: 1200,
          timingFunction: "ease",
          delay: 0,
        })
        if (that.data.animatTF) {
          that.animationX.translateX('150px').step()
        } else {
          that.animationX.translateX(0).step()
        }
        that.setData({
          animationuser: that.animationuser.export(),
          animationX: that.animationX.export()
        })
      }else{
        wx.navigateTo({
          url: '../login/login',
        })
      }
    })
  },
  //打开地图
  Getmap(){
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 15,
          name:"测试地点1",
          address:"昆明五华一号路"
        })
      }
    })
  },
  //选择时间
  Selecttime: function (e) {
    const val = e.detail.value
    this.setData({
      day: this.data.days[val[0]],
      hour: this.data.hours[val[1]],
    })
  },
  //关闭时间选择器
  Closetimebox(){
    this.setData({
      showtime:false,
      day:'0',
      hour:'0'
    })
  },
  //确认租车时间
  Truetimebox(){
    this.setData({
      showtime: false,
      rentalcartip:true
    })
  },
  Closeleftnav(){
    var that=this;
    this.animationuser = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0,
    })
    this.animationuser.left('-150px').step()
    this.animationX = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0,
    })
    this.animationX.translateX(0).step()
    this.setData({
      animationuser: this.animationuser.export(),
      animationX: this.animationX.export()
    })
    setTimeout(function(){
      that.setData({
        animatTF: false
      })
    },1000)
  },
  Openurl(e){
    if(e.currentTarget.dataset.num==1){
      wx.navigateTo({
        url: '../myinfo/myinfo',
      })
    } else if (e.currentTarget.dataset.num == 2) {
      wx.navigateTo({
        url: '../myorder/myorder',
      })
    }
  },
  //选择车型
  Getcar(e){
    var that=this;
    app.Requestget('', 'auth/getUserInfo', function (res) {
      console.log(res.data.data.userInfo)
      var userinfo = res.data.data.userInfo;
      if (userinfo.mobilePhone && userinfo.mobilePhone!=null){
        if (userinfo.name != null && userinfo.idCard != null && userinfo.drivingAge != null && userinfo.experienced != null && userinfo.belongBank != null && userinfo.bankAccount != null) {
          var id = e.currentTarget.dataset.carid;
          for (let i = 0; i < that.data.cardata.length; i++) {
            if (that.data.cardata[i].carid == id) {
              that.setData({
                'setcardata.carname': that.data.cardata[i].carname,
                'setcardata.carid': that.data.cardata[i].carid,
                'setcardata.carnumber': that.data.cardata[i].carnumber,
              })
              break
            }
          }
          that.setData({
            showtime: true
          })
        } else {
          wx.navigateTo({
            url: '../myinfo/myinfo',
          })
        }
      }else{
        wx.navigateTo({
          url: '../login/login',
        })
      }

    })

  },
  //关闭租车提示框
  Closerentalcartip(){
    this.setData({
      rentalcartip:false,
    })
  },
  //微信支付
  Gowxpay(){

  },
  /*******Anima******** */
  initDownAnima: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
    })
    animation.translateY(4).step()
    that.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      that.initUpAnima();
    }.bind(this), 300)

  },

  initUpAnima: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
    })
    animation.translateY(-4).step()
    that.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      that.initDownAnima();
    }.bind(this), 300)

  },
})
