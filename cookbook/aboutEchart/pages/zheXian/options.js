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
    title: { // 图表名称
      text: '折线图',
      left: '2%',
      top: '10',
      textStyle: {
        color: '#FFAD13',
        fontSize: 16,
        align: 'center',
        lineHeight: 24
      }
    },
    // backgroundColor:'#fff', // 图表背景
    legend: { // 与series对应多项目
      data: legendData, // series.name组成的数组
      top: 0,
      left: 'center', // legend居中
      itemWidth: 13, // 图例标记宽度
      itemHeight: 11, // 图例标记高度
      textStyle: { // legend文案样式
        color: '#fff',
        fontSize: 12
      },
      itemStyle: { // legend项目图标样式
        borderWidth: 1
      }
    },
    grid: { // 网格
      show: true,
      containLabel: true,
      top: 40,// 图表top距离
      bottom: 0,
      right: 50,
      borderWidth: 0, // 图表边框
      backgroundColor: '#09356A', // 网格背景纯色
      // backgroundColor: { // 网格区域渐变
      //   type: 'linear',
      //   x: 0,
      //   y: 0,
      //   x2: 0,
      //   y2: 1,
      //   colorStops: [{// "#7CD98E", "#A6B566", "#BEA460", "#AA694C", "#933838"
      //       offset: 1, color: '#7CD98E' // 0% 处的颜色
      //   }, {
      //       offset: 0.7, color: '#C8D97C' // 100% 处的颜色
      //   }, {
      //     offset: 0.45, color: '#E8C977' // 100% 处的颜色
      //   }, {
      //     offset: 0.2, color: '#E39B7A' // 100% 处的颜色
      //   }, {
      //     offset: 0, color: '#F26565' // 100% 处的颜色
      //   }],
      //   global: false // 缺省为 false
      // },
    },
    xAxis: {
      type: 'category', // 类目
      boundaryGap: true, // 设置类目项不是从圆点开始
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
        formatter: (val) => { // x轴label文案垂直展示
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
    yAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: { // y轴线
        show: false,
        lineStyle: {
          color: '#fff'
        },
      },
      axisLabel: { // 刻度标签
        show: true,
        color: "#fff",
        fontSize: 13,
        interval(index, value) { // 设置标签分隔数
          if (value.indexOf('text') > 0) {
            return index
          }
        },
        formatter(value) { // 设置标签文案自定义
          if (value.indexOf('text') > 0) {
            return value.split(',')[0]
          }
        }
      },
      axisTick: { // y轴刻度
        show: false,
        color: '#fff'
      },
      splitLine: { // 网格样式
        show: true,
        interval(index, value) { // 网格间隔数
          if (value % 10 == 0) {
            // console.log(index, value)
            return index
          }
        },
        lineStyle:{
          color: ['#fff'],//["#7CD98E", "#A6B566", "#BEA460", "#AA694C", "#933838"],// ['#0A1A47'],
          width: 0.5,
          type: 'dashed',
          opacity: 0.82
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
      // 整数表示正常等级
      data: [
        '0.3','0.4','0.5','0.6','0.7','0.8','0.9','1', '无风险,text', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '10.1', '11', '11.1', '12', '12.1', '13', '14', '预防,text', '15', '16','16.1', '17', '18','18.1', '19', '20',
        '20.1', '21', '21.1', '22', '22.1', '23', '24', '低风险,text', '25', '26', '26.1', '27', '28','28.1', '29', '30',
        '30.1', '31', '32', '33', '34', '中风险,text', '35', '36', '37', '38', '39', '40',
        '40.1', '41', '42', '43', '44', '高风险,text', '45', '46', '47', '48', '49', '50'
      ]
    },{
      type: 'category',
      boundaryGap: false,
      axisLine: { // y轴线
        show: false,
        lineStyle: {
          color: '#fff'
        },
      },
      axisLabel: { // 刻度标签
        show: true,
        inside: false, // 标签在坐标轴内部
        // margin: 0, // 坐标轴刻度文案距离坐标轴距离
        color: "#fff",
        fontSize: 13,
        interval(index, value) { // 设置标签分隔数
          if ( value % 10 === 0) {
            return index
          }
        },
        formatter(value) { // 设置标签文案自定义
          if ( value % 10 == 0) {
            return value.split(',')[0]
          }
        }
      },
      axisTick: { // y轴刻度
        show: false,
        color: '#fff'
      },
      // 整数表示正常等级
      data: [
        '0.3','0.4','0.5','0.6','0.7','0.8','0.9','1', '无风险,text', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '10.1', '11', '11.1', '12', '12.1', '13', '14', '预防,text', '15', '16','16.1', '17', '18','18.1', '19', '20',
        '20.1', '21', '21.1', '22', '22.1', '23', '24', '低风险,text', '25', '26', '26.1', '27', '28','28.1', '29', '30',
        '30.1', '31', '32', '33', '34', '中风险,text', '35', '36', '37', '38', '39', '40',
        '40.1', '41', '42', '43', '44', '高风险,text', '45', '46', '47', '48', '49', '50'
      ]
    }],
    series: getSeries(chartData)
  }

  return option
}
function getText(arr, index) {
  let text = ''
  if (arr.length < 2) {
    text = '蓝线-最新筛查'
  } else {
    text = index > 0 ? '蓝线-最新筛查' : '黄线-首次筛查'
  }
  return text
}
// 获取图表series
function getSeries(arr) {
  const series = []
  const color = ['#EA9D34', '#0058FF' ]//#0058FF #EA9D34
  const lineLabel = ['首次', '最新' ]
  arr.forEach((item, index) => {
    const seriesItem = {
      name: getText(arr, index) + moment(item.checkDate * 1000).format('YYYY.MM.DD'), // 每根折线name,需与legend中data某项元素一致
      endLabel: { // 折线末端文案
        show: true,
        color: '#fff',
        formatter: function (params) {
          return arr.length > 1 ? lineLabel[index] : lineLabel[1]
        }
      },
      type: 'line',
      smooth: true,
      symbol: 'circle',//'emptyCircle', // circle
      symbolSize: 9,
      // animationDuration: 3000, // 绘制折线时间
      lineStyle: {
        color: arr.length > 1 ? color[index] : color[1],
        width: 2,
      },
      itemStyle: {
        normal: {
          // 静止时：
          color: arr.length > 1 ? color[index] : color[1], // 折线坐标点颜色
          borderWidth: 1, // 折线坐标点border
          borderColor: '#fff',
          label: {
            color: '#fff',//arr.length > 1 ? color[index] : color[1],
            show: true, // 节点出现数值
            fontSize: 14,
            formatter: function(data) {
              if (arr.length === 1 || arr.length > 1 && index == 1) {
                return item.diseaseList[data.dataIndex].riskValue
              }
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 1, color:'rgba(255,255,255,0)', // 0% 处的颜色
              }, {
                offset: 0, color:  arr.length > 1 ? color[index] : color[1]//'rgba(94, 38, 227, 0.5)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
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