import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.',
    host: 'https://jdzs.wezhuiyi.com/node/',
    sessionName: 'sessionID',
    pixelRatio: 2
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      // console.log('mixin method tap')
    }
  }

  onShow() {
    // console.log('mixin onShow')
  }

  onReady() {
    // console.log('onready')
  }
  onLoad() {
  }

  rpx2px() {
    console.log('rpx2px')
  }

  trim(str, isGlobal) {
    var result
    result = str.replace(/(^\s+)|(\s+$)/g, '')
    if (isGlobal && isGlobal.toLowerCase() == 'g') {
      result = result.replace(/\s/g, '')
    }
    return result
  }

  getCookie(str, name) {
    const reg = new RegExp('(^| )' + name + '(?:=([^;]*))?(;|$)')
    const val = str.match(reg)
    return val ? (val[2] ? unescape(val[2]) : '') : null
  }

  initDevice () {
    let $root = this.getRoot()
    this.pixelRatio = $root.systemInfo.pixelRatio
  }

  getRoot() {
    let root = this.$parent
    while (root.$parent) {
      root = root.$parent
    }
    console.log(root)
    return root
  }

  getImg(path, suffix) {
    let size = this.pixelRatio <= 1 ? '' : (this.pixelRatio >= 3 ? '@3x' : '@2x')
    return `${path}${size}.${suffix}`
  }
}
