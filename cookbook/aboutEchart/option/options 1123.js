import moment from 'moment'
export function diseaseOption(obj) {
  const {
    chartData = []
  } = obj
  const xAxisData = chartData[0].diseaseList.map(item => item.name)
  const legendData = chartData.map((item, index) => {
    return getText(chartData, index) + moment(item.checkDate * 1000).format('YYYY.MM.DD')
  })
  const option = {
    legend: { // 与series对应多项目
      data: legendData,
      top: 0,
      left: 'center',
      itemWidth: 13, // 图例标记宽度
      itemHeight: 11, // 图例标记高度
      textStyle: {
        color: '#fff',
        fontSize: 12
      },
    },
    grid: {
      show: true,
      containLabel: true,
      top: 40,// 27
      bottom: 0,
      borderWidth: 0,
      backgroundColor: { // 图表网格区域背景渐变
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{// "#7CD98E", "#A6B566", "#BEA460", "#AA694C", "#933838"
            offset: 1, color: '#7CD98E' // 0% 处的颜色
        }, {
            offset: 0.7, color: '#C8D97C' // 100% 处的颜色
        }, {
          offset: 0.45, color: '#E8C977' // 100% 处的颜色
        }, {
          offset: 0.2, color: '#E39B7A' // 100% 处的颜色
        }, {
          offset: 0, color: '#F26565' // 100% 处的颜色
        }],
        global: false // 缺省为 false
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisLine: { // x轴线
        show: true,
        lineStyle: {
          color: '#fff'
        },
      },
      axisLabel: { // x轴刻度标签
        show: true,
        color: "#fff",
        interval: 0,
        fontSize: 14,
        // fontWeight: 'bold',
        formatter: (val) => { // x轴label垂直展示
          return val.split('').join('\n')
        }
      },
      axisTick: { // x轴刻度
        show: true,
        color: "#fff",
      },
      data: xAxisData,
      // show: false
    },
    yAxis: {
      type: 'category',
      axisLine: { // y轴线
        show: true,
        lineStyle: {
          color: '#fff'
        },
      },
      axisLabel: { // 刻度标签
        show: true,
        color: "#fff",
        fontSize: 13,
        interval(index, value) { // 设置标签分隔数
          if (value.indexOf('text') > 0 || value % 10 === 0) {
            return index
          }
        },
        formatter(value) { // 设置标签文案自定义
          if (value.indexOf('text') > 0 || value % 10 == 0) {
            return value.split(',')[0]
          }
        }
      },
      axisTick: { // y轴刻度
        show: true,
        color: '#fff'
      },
      splitLine: { // 网格样式
        show: true,
        interval(index, value) { // 网格间隔数
          if (value % 10 == 0 && value != 50) {
            // console.log(index, value)
            return index
          }
        },
        lineStyle:{
          color: ['#0A1A47'],//["#7CD98E", "#A6B566", "#BEA460", "#AA694C", "#933838"],// ['#0A1A47'],
          width: 1,
          type: 'dashed',
          opacity: 0.3
        }
      },
      splitArea: { // 坐标轴象限分块
        show: false,
        areaStyle: {
          opacity: 0.85,
          color: [
            "#0A2962"//"#7CD98E", "#A6B566", "#BEA460", "#AA694C", "#933838"
          ]
        }
      },
      // data: ['无风险,0.1','无风险,0.2','无风险,0.3','无风险,0.4','无风险,0.5','无风险,0.6','无风险,0.7','无风险,0.8','无风险,0.9','无风险,1',
      //   '预防,0.1','预防,0.2','预防,0.3','预防,0.4','预防,0.5','预防,0.6','预防,0.7','预防,0.8','预防,0.9','预防,1',
      //   '低风险,0.1','低风险,0.2','低风险,0.3','低风险,0.4','低风险,0.5','低风险,0.6','低风险,0.7','低风险,0.8','低风险,0.9','低风险,1',
      //   '中风险,0.1','中风险,0.2','中风险,0.3','中风险,0.4','中风险,0.5','中风险,0.6','中风险,0.7','中风险,0.8','中风险,0.9','中风险,1',
      //   '高风险,0.1','高风险,0.2','高风险,0.3','高风险,0.4','高风险,0.5','高风险,0.6','高风险,0.7','高风险,0.8','高风险,0.9','高风险,1'
      // ],
      // 整数表示正常等级
      data: [
        '0.3','0.4','0.5','0.6','0.7','0.8','0.9','1', '无风险,text', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '10.1', '11', '11.1', '12', '12.1', '13', '14', '预防,text', '15', '16','16.1', '17', '18','18.1', '19', '20',
        '20.1', '21', '21.1', '22', '22.1', '23', '24', '低风险,text', '25', '26', '26.1', '27', '28','28.1', '29', '30',
        '30.1', '31', '32', '33', '34', '中风险,text', '35', '36', '37', '38', '39', '40',
        '40.1', '41', '42', '43', '44', '高风险,text', '45', '46', '47', '48', '49', '50'
      ]
    },
    series: getSeries(chartData)
  }

  return option
}
function getText(arr, index) {
  let text = ''
  if (arr.length < 2) {
    text = '蓝线-最新筛查'
  } else {
    text = index > 0 ? '蓝线-最新筛查' : '白线-首次筛查'
  }
  return text
}
// 获取图表series
function getSeries(arr) {
  const series = []
  const color = ['#fff', '#0058FF' ]//#0058FF FFAD13
  arr.forEach((item, index) => {
    const seriesItem = {
      name: getText(arr, index) + moment(item.checkDate * 1000).format('YYYY.MM.DD'),
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 9,
      lineStyle: {
        color: arr.length > 1 ? color[index] : color[1],
        width: 2,
      },
      itemStyle: {
        normal: {
          // 静止时：
          color: arr.length > 1 ? color[index] : color[1],
          label: {
            color: arr.length > 1 ? color[index] : color[1],
            show: true, // 节点出现数值
            fontSize: 14,
            formatter: function(data) {
              if (arr.length === 1 || arr.length > 1 && index == 1) {
                return item.diseaseList[data.dataIndex].riskValue
              }
            }
          }
        }
      },
      data: item.diseaseList.map(item => item.riskValue)
    }
    series.push(seriesItem)
  })
  return series
}