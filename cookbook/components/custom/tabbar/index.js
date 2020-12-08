Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbarActive: {
      type: Number,
      value: 1
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbarList: [
      {
        title: "首页",
        icon: {
          normal: '/images/tabbar/home.png',
          active: '/images/tabbar/home_fill.png',
        }
      },
      {
        title: "我的",
        icon: {
          normal: '/images/tabbar/mine.png',
          active: '/images/tabbar/mine_fill.png',
        }
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换tab
    _onChange(event) {
      this.triggerEvent('changeTab', event)
    }
  }
})
