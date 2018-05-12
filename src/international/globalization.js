/**
 * Created by Administrator on 2018/4/3.
 */
/* let res = wx.getSystemInfoSync()
let lang =  wx.getStorageSync('LanguageKey') || res['language']
console.log(lang) */

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
    'hearError': '对不起，没听清楚您说什么~',
    'setting': '设置',
    'simpleChanese': '简体中文',
    'english': 'English',
    'languages': '多语言',
    'talkBackground': '聊天背景'
  },
  zh_HK: {
    'assistant': '智慧助理',
    'roomService': '人客房服务',
    'bookRestaurant': '订餐厅',
    'conferenceInfo': '会议信息',
    'maintenanceReport': '故障服务',
    'talk': '按住说话',
    'send': '松开发送',
    'upCancel': '手上扒，取消发送',
    'vibrateSuccess': '扽成功',
    'vibrateFail': '扽失败',
    'backgroundSetting': '自定义背景',
    'reset': '恢复预设',
    'apply': '应用',
    'loading': '载入中...',
    'listening': '聆听中，唔该讲',
    'hold': '请等阵',
    'hearError': '对唔住，冇听清楚您说咩~',
    'setting': '设置',
    'simpleChanese': '简体中文',
    'english': 'English',
    'languages': '多语言',
    'talkBackground': '倾计背景'
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
    'hearError': "I am sorry, I didn't know what you said",
    'setting': 'Setting',
    'simpleChange': '简体中文',
    'english': 'English',
    'languages': 'Languages',
    'talkBackground': 'Talk Background'
  }
}
export default configs
