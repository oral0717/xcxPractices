// 食物种类占比图option
export function getOption(data) {

  const option = {
    title: {
      text: '种类',
      left: 'center',
      top: '28%',
      textStyle: {
        color: '#FFAD13',
        fontSize: 16,
        align: 'center',
        lineHeight: 24
      }
    },
    legend: {
      width: '80%',
      top: '65%',
      left: '10%',
      itemGap: 12, // 图例标记上下间距
      itemWidth:16, // 图例标记宽度
      itemHeight: 12, // 图例标记高度
      borderRadius: 0, // 图例标记圆角，不生效
      itemStyle: {
        borderWidth: 0,
        borderRadius: 0
      },
      textStyle: {
        color: '#fff',
        // width: 100,
        fontSize: 12
      }
    },
    series: [{
      label: {
        width: 200,
        normal: {
          position: 'inner',
          show: false,
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '33%'],
      radius: ['33%', '60%'],
      labelLine: {
        show: false
      },
      itemStyle: {
        borderRadius: 6, // 圆环各模块边框圆角
        borderColor: '#fff', // 圆环各模块边框颜色
        borderWidth: 0.5 // 圆环各模块边框宽度
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }]
  };
  return option
}

