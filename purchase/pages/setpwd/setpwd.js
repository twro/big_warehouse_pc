// pages/setpwd/setpwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pwd1: "",
    pwd: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  pwd(e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  pwd1(e) {
    this.setData({
      pwd1: e.detail.value
    })
  },
  formSubmitSetPwd(e) {
    const val = e.detail.value;
    console.log(val)
    if (val.pwd === val.pwd1) {
      wx.showToast({
        title: '密码修改成功',
        success: function(e) {
          if (e.errMsg.split(":").pop() == 'ok') {
            wx.switchTab({
              url: '/pages/index/index',
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '2次密码不一致',
        icon: 'none',
        mask: true
      })
    }
  }
})