function Promi(executor) {
  this.$$status = 'pending'
  this.failCallBack = undefined
  this.successCallback = undefined
  this.error = undefined
  setTimeout((_) => {
    try {
      executor(this.onResolve.bind(this), this.onReject.bind(this))
    } catch (e) {
      this.error = e
      if (this.callBackDefer && this.callBackDefer.fail) {
        this.callBackDefer.fail(e)
      } else if (this._catch) {
        this._catch(e)
      } else {
        throw new Error('un catch')
      }
    }
  })
}

Promi.prototype = {
  constructor: Promi,
  onResolve: function (params) {
    if (this.$$status === 'pending') {
      this.$$status = 'success'
      this.resolve(params)
    }
  },
  resolve: function (params) {
    let successCallback = this.successCallback
    if (successCallback) {
      this.defer(successCallback.bind(this, params))
    }
  },
  defer: function (callBack) {
    let result
    let defer = this.callBackDefer.success
    if (this.$$status === 'fail' && !this.catchErrorFunc) {
      defer = this.callBackDefer.fail
    }
    try {
      result = callBack()
    } catch (e) {
      result = e
      defer = this.callBackDefer.fail
    }
    if (result && result instanceof Promi) {
      result.then(this.callBackDefer.success, this.callBackDefer.fail)
      return ''
    }
    defer(result)
  },
  onReject: function (error) {
    if (this.$$status === 'pending') {
      this.$$status = 'fail'
      this.reject(error)
    }
  },
  reject: function (error) {
    // let _this = this
    this.error = error
    let failCallBack = this.failCallBack
    let _catch = this._catch
    if (failCallBack) {
      this.defer(failCallBack.bind(this, error))
    } else if (_catch) {
      _catch(error)
    } else {
      setTimeout((_) => {
        throw new Error('un catch promise')
      }, 0)
    }
  },
  then: function (success = () => {}, fail) {
    let resetFail = (e) => e
    if (fail) {
      resetFail = fail
      this.catchErrorFunc = true
    }
    let newPromise = new Promi((_) => {})
    this.callBackDefer = {
      success: newPromise.onResolve.bind(newPromise),
      fail: newPromise.onReject.bind(newPromise),
    }
    this.successCallback = success
    this.failCallBack = resetFail
    return newPromise
  },
  catch: function (catchCallBack = () => {}) {
    this._catch = catchCallBack
  },
}

// 测试代码

new Promi((resolve, reject) => {
  setTimeout(() => {
    resolve('你好')
  })
})
  .then((res) => {
    console.log('1:' + res)
    return '第一个then'
  })
  .then((res) => {
    return new Promi((res) => {
      setTimeout((_) => res('第二个then'), 0)
    })
  })
  .then((res) => {
    console.log(res)
  })
  .then((res) => {
    return new Promi((suc, fail) => {
      setTimeout((_) => {
        fail('then失败')
      }, 400)
    })
  })
  .then((res) => {
    console.log(iko)
  })
  .then(
    (_) => {},
    () => {
      return new Promi(function (res, rej) {
        setTimeout((_) => rej('promise reject'), 0)
      })
    }
  )
  .then()
  .then()
  .then(
    (_) => {},
    (rej) => {
      console.log(rej)
      return rej + '处理完成'
    }
  )
  .then((res) => {
    console.log(res)
    // 故意出错
  })
  .then(
    (res) => {},
    (rej) => {
      console.log(rej)
    }
  )
  .catch((e) => {
    console.log(e)
  })
