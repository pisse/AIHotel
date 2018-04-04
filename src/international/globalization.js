/**
 * Created by Administrator on 2018/4/3.
 */
let res = wx.getSystemInfoSync()
let lang = res['language']
let configs = {
  zh_CN: {
    'assistant': '智能助理',
    'roomService': '客房服务',
    'bookRestaurant': '预定餐厅',
    'conferenceInfo': '会议信息',
    'maintenanceReport': '故障服务',
    'talk': '按住讲话',
    'send': '松开发送',
    'upCancel': '手指上划，取消发送',
    'vibrateSuccess': '震动成功',
    'vibrateFail': '震动失败',
    'backgroundSetting': '自定义背景',
    'reset': '恢复默认',
    'apply': '应用',
    'loading': '加载中...',
    'listening': '聆听中，请说话',
    'hold': '请稍后',
    'hearError': '对不起，没听清楚您说什么~'
  },
  en: {
    'assistant': 'YiAssistant',
    'roomService': 'Room Service',
    'bookRestaurant': 'Booking a restaurant',
    'conferenceInfo': 'Conference Information',
    'maintenanceReport': 'Maintenance Report',
    'talk': 'Hold to Talk',
    'send': 'Loosening and sending',
    'upCancel': 'Up and cancel',
    'vibrateSuccess': 'Vibrate Success',
    'vibrateFail': 'Vibrate Fail',
    'backgroundSetting': 'Background Setting',
    'reset': 'Reset all settings',
    'apply': 'Apply',
    'loading': 'Loading...',
    'listening': 'Listening, please speak',
    'hold': 'Hold a second',
    'hearError': "I am sorry, I didn't know what you said"
  }
}
export default configs[lang] || configs['en']
