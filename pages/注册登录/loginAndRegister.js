// pages/注册登录/loginAndRegister.js
//var common = require('../../utils/hello.js')
var api = require('../httpEngine/HttpEngine.js')

var types = ["default", "primary", "warn"]
 var pageObject = {
     data2: {
       defaultSize: 'default',
       primarySize: 'default',
       warnSize: 'default',
       disabled: false,
       plain: true,
       loading: true,
     },
   }
Page({
  /**
   * 页面的初始数据
   */  
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: true,
    loading: false,
    phoneNum:"",
     PassWord:"",

   array:[
     { message:'foo'},
     {message:'bar'} 
   ],
   itm:{
     index:0,
     msg:'this is a template',
     time:'2017-11-23'
   },
   
   bindViewtap:function(event)  {
     event.currentTarget.dataset.alphaBeta === 1 // - 会转为驼峰写法
     event.currentTarget.dataset.alphabeta === 2 // 大写会转为小写
      
  },
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

  textFieldDidInputPhoneNum:function(e){
  //console.log(e)
    this.setData({
      phoneNum:e.detail.value
    })
},
  textFieldDidInputPassWord:function(a){
    this.setData({
      PassWord: a.detail.value
    })
  },
  loginBtnClick:function(btn){
    console.log("登陆" + this.data.phoneNum, +this.data.PassWord)

    api.loginInterFace({ "phone": this.data.phoneNum, "password": this.data.PassWord},(data) =>{
      console.log("123456+++"+data.msg)
      if (data.code == 0){
        //登陆成功后跳转页面
        wx.showToast({
          title: data.msg,
          icon: "success"
        })
        wx.navigateTo({
          url: '../首页/homePage',
        })
        this.setData({
          loading: !this.data.loading
        })
      }else{
        //登陆失败
        wx.showToast({
          title: data.msg,
          icon: "loading"
        })
        this.setData({
          loading: !this.data.loading
        })
      }
      
    })
    this.setData({
      loading:!this.data.loading
    })
   //登陆
    
  },

})