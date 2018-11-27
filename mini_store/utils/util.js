const config = require("config.js");

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//网络请求
function request(parameters = "", success, method = "GET", header = {}) {
  wx.request({
    url: config.BaseURL + (method == "GET" ? "?" : "") + parameters,
    data: {},
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: header ? header : "application/json", // 设置请求的 header
    success: function(res) {
      success(res);
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
}

function postRequest(Json = {}, success, method = "POST", header = {}) {
  wx.request({
    url: config.BaseURL,
    method: method,
    data: json2Form(Json),
    header: header ? header : "application/x-www-form-urlencoded",
    success: function(res) {
      console.log(res)
      success(res)
    }
  })
}


function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}

//成功提示
function showSuccess(title = "成功啦", duration = 2500) {
  wx.showToast({
    title: title,
    icon: 'success',
    duration: (duration <= 0) ? 2500 : duration
  });
}

function showFail(title = "失败了", duration = 2500) {
  wx.showToast({
    title: title,
    icon: "none",
    duration: (duration <= 0) ? 2500 : duration
  })
}
//loading提示
function showLoading(title = "请稍后", duration = 3000) {
  wx.showToast({
    title: title,
    icon: 'loading',
    duration: (duration <= 0) ? 3000 : duration
  });
}
//隐藏提示框
function hideToast() {
  wx.hideToast();
}

//显示带取消按钮的消息提示框
function alertViewWithCancel(title = "提示", content = "消息提示", confirm, showCancel = "true") {
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    success: function(res) {
      if (res.confirm) {
        confirm();
      }
    }
  });
}
//显示不取消按钮的消息提示框
function alertView(title = "提示", content = "消息提示", confirm) {
  alertViewWithCancel(title, content, confirm, false);
}

module.exports = {
  formatTime: formatTime,
  request: request,
  showSuccess: showSuccess,
  showLoading: showLoading,
  hideToast: hideToast,
  alertViewWithCancel: alertViewWithCancel,
  alertView: alertView,
  postRequest: postRequest,
  showFail: showFail
}