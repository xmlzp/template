var util = require('../../utils/util.js');
var weekday = util.getWeek(11);
Page({
  data: {
    activeIndex: 0,
    weekday: weekday,
    currentCity: '',
    theater: [] //电影的详情的数据
  },
  onLoad: function (options) {
    var id = options.id;
    var title = options.title;
    wx.setNavigationBarTitle({
      title: title
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8888/data/indexTheater?city='+that.data.currentCity+'&id='+id+'&index=0',
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          theater: res.data.data
        })
      }
    })
  },
  selDate: function (ev) {
    console.log(ev.target.id)
    this.setData({
      activeIndex: ev.target.id
    })
    wx.request({
      url: 'http://localhost:8888/data/indexTheater?city='+that.data.currentCity+'&id='+id+'&index='+ev.target.id,
      success: function (res) {
        console.log(res.data)
        that.setData({
          theater: res.data.data
        })
      }
    })
  }
})