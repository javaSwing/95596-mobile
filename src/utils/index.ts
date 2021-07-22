/**
 * 动态生成curl config
 * @param method 请求方法
 * @param data 请求数据
 * @param isUserAgent 是否设置 UserAgent 默认为 true
 * @param isGzip 是否启用gip 默认为 true
 */

const pc = [
  // macOS 10.15.6  Firefox / Chrome / Safari
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:80.0) Gecko/20100101 Firefox/80.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.30 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Safari/605.1.15',
  // Windows 10 Firefox / Chrome / Edge
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.30 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586'
  // Linux 就算了
]

export function genCurlConfig (
  method: urllib.HttpMethod = 'GET',
  data?: any,
  isUserAgent = true,
  isGzip = true
): urllib.RequestOptions {
  return {
    method,
    dataType: 'json',
    data,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': isUserAgent ? pc[Math.floor(Math.random() * pc.length)] : '',
      'Accept-Encoding': 'gzip',
      cookie: 'FSSBBIl1UgzbN7NS=5lBolo_70AtjfeusJxmdiySjQ83r27Ow_XRpXPQ1u93wBxtaz7Jv7k8t2n4HFcVa5Bpfbbwvg_TX8lqR3HDvHnq; cookie-web=78968004; orgNo=41101; orgName=%E6%B2%B3%E5%8D%97; CSWEBSID=mkDQg5JWNKwvw2gZKJ54GJTS0WDnj6wD!140833578; _pk_id.4.9c8b=b1049571429a23e4.1626919488.3.1626932527.1626930481.; cookie-webcc=29404764; FSSBBIl1UgzbN7NT=53H9DuDkyr1gqqqm_uYA24Aq3PlFchfYu5A1fT2WPxeqH2kkO770MYENX0o9VGXC1.zc.j.MQp_43La9sfc5vtmdn9RIA9DioW8fuhhMDzgU3sGkk2SBi9jGEfoM2PUsHN.MS2Q42PqNWpYwdqSHqJnssn6n9ISkVwTUnO43y1393lZBk0ihCsZ4S8m1cq_wzl1a.GLqZ7kEgLYP108WYu6i0b4I327IJterbFpdjXQQVkNnYjxPub9etNbFl5OdBEnzjSaerSZ.bxzwjcXRhD57MA7HEuWe3jc64ViEWwppHOJQ5qGZkPpf3mOJVtcSbv83itlhB25ydhO9yfDCIIs9brts5IYBVzljg.dF9B3IA'
    },
    gzip: isGzip
  }
}
