import * as echarts from '../../comps/ec-canvas/echarts';
import { getOption } from './options'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    diseaseChart: {
      disableTouch: true,
      lazyLoad: true
    },
    diseaseDetail: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {disease, checkDate} = options
    this.getReportDetail({disease , checkDate})
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
  // 获取疾病种类
  async getReportDetail(obj) {
    const {disease, checkDate} = obj
    try {
      // const {code, data} = await loadReportDetail({
      //   session: wx.getStorageSync('session'),
      //   check: disease,
      //   checkDate
      // })
      const data = {
        name: 'brainBlock',
        id: 1,
        advise: [],
        firstReport: {
          checkDate: 1636353188,
          diseaseList: [
            {id: 77, name:"动脉粥样硬化", danger: '中风险', riskValue: '8'},
            {id: 78, name:"出血性损伤", danger: '中风险', riskValue: '18'},
            {id: 79, name:"缺血型损伤", danger: '中风险', riskValue: '42'},
            {id: 80, name:"脑血液循环障碍", danger: '中风险', riskValue: '32'},
          ]
        },
        lastReport: {
          checkDate: 1636683188,
          diseaseList: [
            {id: 77, name:"动脉粥样硬化", danger: '中风险', riskValue: '2'},
            {id: 78, name:"出血性损伤", danger: '中风险', riskValue: '8'},
            {id: 79, name:"缺血型损伤", danger: '中风险', riskValue: '20'},
            {id: 80, name:"脑血液循环障碍", danger: '中风险', riskValue: '21'},
          ]
        }
      }
      // if(code == API_STATUS.SUCCESS) {
        this.setData({diseaseDetail: data})
        this.init_diseaseChart(data)
      // }
    } catch (ex) {}
  },
  // 初始化疾病chart
  init_diseaseChart(data) {
    this.diseaseChartComponnet = this.selectComponent('#chart');        //去获取echarts    这里的id就是echarts的id
    this.diseaseChartComponnet.init((canvas, width, height, dpr) => {
      const diseaseChart = echarts.init(canvas, null, {        //echarts会继承父元素的宽高
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      diseaseChart.setOption(getOption()); //这一步是给echarts 设置数据及配置项
      return diseaseChart;
    });
  }
})