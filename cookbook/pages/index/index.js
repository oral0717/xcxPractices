import create from '../../utils/create'
import store from '../../store/index'

//获取应用实例
const app = getApp()

create.Page(store, {
  use: [
    'motto',
    'userInfo',
    'hasUserInfo',
    'canIUse',
    'newProp'
  ],
  computed: {
    reverseMotto() {
      return this.motto.split('').reverse().join('')
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(11111, app.globalData.userInfo, this.data)

    // if (app.globalData.userInfo) {
    //   this.store.data.userInfo = app.globalData.userInfo
    //   this.store.data.hasUserInfo = true
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.store.data.userInfo = res.userInfo
    //     this.store.data.hasUserInfo = true
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.store.data.userInfo = res.userInfo
    //       this.store.data.hasUserInfo = true
    //     }
    //   })
    // }

    // setTimeout(() => {
    //   this.store.data.logs.push('abc')
    //   this.store.data.motto = '123456'
    // }, 1000)

    // setTimeout(() => {
    //   this.store.data.motto = 'abcdefg'
    // }, 2000)

    // setTimeout(() => {
    //   this.store.set(this.store.data, 'newProp', 'newPropVal')
    // }, 3000)


    // const handler = function (evt) {
    //   console.log(evt)
    // }
    // store.onChange(handler)

    //store.offChange(handler)

  },
  getUserInfo(e) {
    // this.store.data.userInfo = e.detail.userInfo
    // this.store.data.hasUserInfo = true
    const self = this
    wx.getUserProfile({
      lang: 'zh_CN',
      desc: '用于头像昵称展示',
      success: res => {
        console.log(33333, res)
        // 可以将 res 发送给后台解码出 unionId
        app.globalData.userInfo = res.userInfo
        self.store.data.userInfo = res.userInfo
        self.store.data.hasUserInfo = true
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        // if (this.userInfoReadyCallback) {
        //   this.userInfoReadyCallback(res)
        // }
      }
    })
  }
})
