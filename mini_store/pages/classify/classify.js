// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftHeight: "0",
    dataList: [{
      "li": "1"
    }],
    scrollTop: "0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(0)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          leftHeight: (res.windowHeight)
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.onLoad();
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
  catchTouchMove: function(res) {
    return false
  },
  getDataList(e) {
    console.log(e.currentTarget.dataset.idx);
    // 请求数据
  }
})