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
  isGzip = true
): urllib.RequestOptions {
  const ua = pc[Math.floor(Math.random() * pc.length)]
  return {
    method,
    // dataType: 'json',
    dataType: 'text',
    data,
    headers: {
      'Content-Type': method === 'POST' ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json; charset=UTF-8',
      'User-Agent': ua,
      'Accept-Encoding': 'gzip',
      'X-Requested-With': 'XMLHttpRequest',
      cookie: 'FSSBBIl1UgzbN7NS=5lBolo_70AtjfeusJxmdiySjQ83r27Ow_XRpXPQ1u93wBxtaz7Jv7k8t2n4HFcVa5Bpfbbwvg_TX8lqR3HDvHnq; cookie-web=78968004; orgNo=41101; orgName=%E6%B2%B3%E5%8D%97; CSWEBSID=VxhMg5TL9Q9krfd1T11P29RybvWG2Krg!140833578; _pk_ses.4.9c8b=*; _pk_id.4.9c8b=b1049571429a23e4.1626919488.4.1626952488.1626932527.; cookie-webcc=37132023; FSSBBIl1UgzbN7NT=53H2VBCkyVnGqqqm_uIWMxa7FJ0i0BOaALAlqIVOanBjA4oaX4k_xwDLqoi8tL.qvbzPd9cUX8MZYWe50hbZCM_ezO8ekpBNfIqhCr1AXMdfmhipNS8RgaVHecBcyWlgwmzRBRfiWjcEuQqd5DjI0K692CHCzGVl1IaS7uDIPYKpAtfvBGby9pDeDqI0jLwXeMkFKkwKfVu_YaYk9O0Ics2FPDv9gGLydExj0IlLLebhXQPfv7Hyp5Rccq85sZ_r2Dea8G7HLp6M1BxTkJpNHXdKYEz7p3a1E1k7833l7yuK_fZ3nwNZY_7Teywv0_pm2Di.b_5_5HUWk8Z26GM.A2tLss9JIFR3zSRGH8j0tKBrq'
    },
    gzip: isGzip
  }
}
