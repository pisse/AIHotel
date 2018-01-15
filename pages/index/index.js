//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    /*
    const recorderManager = wx.getRecorderManager()

    recorderManager.onStart(() => {
      console.log('recorder start')
    })
    recorderManager.onResume(() => {
      console.log('recorder resume')
    })
    recorderManager.onPause(() => {
      console.log('recorder pause')
    })
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const { tempFilePath } = res
    })
    recorderManager.onFrameRecorded((res) => {
      const { frameBuffer } = res
      console.log('frameBuffer.byteLength', frameBuffer.byteLength)
    })

    const options = {
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50
    }

    recorderManager.start(options)
    */
  
    /*
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath
      },
      fail: function (res) {
        //录音失败
      }
    })
    setTimeout(function () {
      //结束录音  
      wx.stopRecord()
    }, 10000)
    */

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
