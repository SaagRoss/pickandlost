const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tempFilePaths: null,
    text:"科技向善",
  },
  res: function (e) {
    const db = wx.cloud.database()//定义db
    const _ = db.command
    var that = this

    db.collection('pickname').where({
      StudentNumber: e.detail.value,

    })
      .get({
        success: res => {
          that.setData({
            queryResult: JSON.stringify(res.data, null, 2)//搜索成功后得到的数组
          })
          console.log('[数据库] [查询记录] 成功: ', res.data)
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })//提示搜索失败
          console.error('[数据库] [查询记录] 失败：', err)
        }
      })
  },
  text:function(){
    var text=this.data.text;
    text="欢迎使用沙邮失物招领平台"
    this.setData({
      text:text
    })
  },


  onLoad: function () {


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})