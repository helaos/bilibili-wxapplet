// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情数据
    videoInfo: null,
    // 视频推荐数据
    otherList: [],
    // 评论数据
    commentData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },

  /**
   * 根据视频ID获取视频详情
   */
  getCurrentVideo(videoId) {
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/videoDetail?id=' + videoId,
      success(response) {
        if (response.data.code == 0) {
          that.setData({
            videoInfo: response.data.data.videoInfo
          })
        }
      }
    })
  },

  /**
   * 根据视频id获取推荐视频数据
   */
  getOthersList(id) {
    let that = this;
    wx.request({
      url: `http://mock-api.com/mnEe4VnJ.mock/otherList?id=${id}`,
      success(response) {
        if (response.data.code === 0) {
          that.setData({
            otherList: response.data.data.otherList
          })
        }
      }
    })
  },

  /**
   * 获取评论数据
   */
  getCommentList(id) {
    let that = this;
    wx.request({
      url: `http://mock-api.com/mnEe4VnJ.mock/commentList?id=${id}`,
      success(response) {
        if (response.data.code === 0) {
          that.setData({
            commentData: response.data.data.commentData
          })
        }
      }
    })
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
