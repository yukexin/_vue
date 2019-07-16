import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://129.28.173.207/api',
  timeout: 1000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
})

export function postRequest(url,params={}) {
  instance.post(url,params)
    .then(response=> {

    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
}

export function getRequest(url,params={}) {
  return new Promise( (resolve,reject) => {
    instance.get(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error)
        console.log(error)
      })
      .finally(() => {

      })
  })
}


