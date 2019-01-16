
export default {
  deepCopyValue: function (target, original) {
    // 不要用JSON的stringify parse   JSON.parse（str)返回的新的对象, target指向新的对象，非原对象
    if ((typeof target !== 'object') || (typeof original !== 'object')) {
    } else {
      for (let i in original) {
        if (typeof original[i] === 'object') {
          this.deepCopyValue(target[i], original[i])
        } else {
          target[i] = original[i]
        }
      }
    }
  },

  deepCopy: function (obj) { // 慎用deepCopy 因为它会创建新的对象，返回的新的对象，被赋值的对象指向的是新的对象，不是原对象
    let str, newObj
    newObj = obj.constructor === Array ? [] : {}
    if (typeof obj !== 'object') {
      return
    } else if (window.JSON) {
      str = JSON.stringify(obj) // 系列化对象
      newObj = JSON.parse(str)
    } else {
      for (let i in obj) {
        newObj[i] = typeof obj[i] === 'object' ? this.deepCopy(obj[i]) : obj[i]
      }
    }
    return newObj
  }
}
