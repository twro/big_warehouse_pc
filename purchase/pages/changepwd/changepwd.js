// pages/changepwd/changepwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldpwd: "",
    phomeNum: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const reg = /^(\d{3})\d{4}(\d{4})$/;
    const phone = '13367823126'.replace(reg, '$1****$2');
    this.setData({
      phomeNum: phone
    });
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
  oldpwdIpt(e) {
    this.setData({
      oldpwd: e.detail.value
    })
  },
  formSubmitChange(e) {
    if (e.detail.value.oldpwd!==""){
      wx.navigateTo({
        url: '/pages/changenewpwd/changenewpwd',
      })
    }
  }
})