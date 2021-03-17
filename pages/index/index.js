Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的首页菜单的索引
    currentIndexNav: 0,
    // 首页导航数据
    navList: [],
    // 首页轮播图数据
    swiperList: [],
    // 视频列表数据
    videosList: []
  },

  /**
   * 点击首页导航的响应
   */
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },

  /**
   * 获取轮播图数据
   */
  getSwiperList() {
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success(response) {
        if (response.data.code === 0) {
          that.setData({
            swiperList: response.data.data.swiperList
          })
        }
      }
    })
  },

  /**
   * 获取视频列表数据
   */
  getVideosList() {
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videosList',
      success(response) {
        if (response.data.code === 0) {
          that.setData({
            videosList: response.data.data.videosList
          })
        }
      }
    })
  },

  /**
   * 获取首页导航数据
   */
  getNavList() {
    let that = this;
    // 利用小程序内置发送请求的方法
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList',
      success(response) {
        // console.log(response)
        if (response.data.code === 0) {
          that.setData({
            navList: response.data.data.navList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取首页导航数据
    this.getNavList();
    // 获取首页轮播图数据
    this.getSwiperList();
    // 获取首页视频列表数据
    this.getVideosList();
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
    
  }
})