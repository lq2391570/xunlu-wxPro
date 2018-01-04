var API_URI = "http://192.168.0.199:8080/xunlu/rest/"
var LOGIN_URL = "user/login.htm"

function fetchApi(type, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API_URI}/${type}`,
      data: params,
      header: {
        'content-type': 'json'
      },
      success: resolve,
      fail: reject
    })
  })

}
module.exports = {
  getList: function (type, pn) {
    return fetchApi(type, { "start": pn, "count": 20 })
      .then(res => res.data)
  }
}

function loginInterFace(params,succeedCallBack){
  wx.request({
    url: API_URI+LOGIN_URL,
    data:params,
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    method:"POST",
    success: function (res) {
      console.log(res.data)
      succeedCallBack(res.data)
    }
  })
  
}
module.exports = {
  loginInterFace:loginInterFace

}


