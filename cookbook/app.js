//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({ // 在微信、企业微信环境均可
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log('微信登录', res)
    //   }
    // })
    wx.qy.login({ // 如果在微信环境中，会报错；用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 api，使用 code 换取 userid 和 session_key 等信息
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('企业微信登录', res)
      },
      timeout() {},
      fail() {},
      complete() {}
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})