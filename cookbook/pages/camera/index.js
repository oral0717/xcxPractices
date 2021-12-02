// pages/camera/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cameraFlash: 'off'
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
  takePhoto() {
    const { cameraFlash } = this.data
    const ctx = wx.createCameraContext()

    this.setData({
      cameraFlash: cameraFlash == 'off' ?
        'torch' : // 手电筒常亮
        'off'
    })
    // 获取 Camera 实时帧数据
    // const listener = ctx.onCameraFrame((frame) => {
    //   // console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)
    //   console.log(frame.data, frame.width, frame.height)
    // })
    // listener.start()
    // setTimeout(() => {
    //   listener.stop({
    //     success() {
    //       console.log('suc')
    //     },
    //     fail() {
    //       console.log('fail')
    //     }
    //   })
    // }, 5000);

    // 拍照
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})