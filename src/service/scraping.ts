import { Application } from 'egg'
import { App, Config, Logger, Provide } from '@midwayjs/decorator'
import { ILogger } from '@midwayjs/logger'
import { genCurlConfig } from 'src/utils'

@Provide()
export default class ScrapingService {
  @App()
  app: Application

  @Logger()
  coreLogger: ILogger

  @Config('userConfig')
  userConfig

  /**
   * 国家电网数据
   * @param outageStartTime 停电开始时间
   * @param outageEndTime 停电结束时间
   * @param scope 停电范围 搜索关键字
   * @param provinceNo 省级编号
   * @param typeCode 停电类型
   * @param lineName 线路名称
   * @param orgNo 所在区变电所名称
   */
  async scrapingPowerOffList (outageStartTime?: string, outageEndTime?: string, scope?: string, provinceNo?: number, typeCode?: string, lineName?: string, orgNo: number = 41401) {
    const test = {
      orgNo: 41401,
      outageStartTime: '2021-07-22',
      outageEndTime: '2021-07-29',
      scope: '',
      provinceNo: 41401,
      typeCode: '02',
      lineName: '',
      anHui: '02'
    }
    const url = `${this.userConfig.domain}/95598/outageNotice/queryOutageNoticeList?MmEwMD=5BK9YYbcopoPlXx_naeMVs__FtblQgeKujSrbS13clfg1oU.RGaemQJaforZFtjRLmIzO7w5oSGezWJY5KQ3vNriS3RIP26REKYQg.MCbYSBoUxpGYu90Ltutf3wUeZ0TXQgiV4KzMN614EhH5EXXbhBTdMiyaEyKjTch41Gd7RBILT_xWonu5PkZem355GZbXvcTKipkv9fEArNawqUI_9SO59BA8FUqkiIA8Q_GrSCL5s7GZe5y2HsqnSe_ptSOb_HH2wdEfVNt6zE1T9eFD1Ypn58AoWwdob1EV68h66_2Yoox4FjKoO6S10IiTFZuV1xMKk.JD5dxjV5_IG1l7zBm_FEp.vMj3MMbI2uSvGDXae_VhWgjwIPP8fJWbk2ZJy8UUbGpLYZc.tefam9VQa`
    try {
      const result = await this.app.curl(
        url,
        genCurlConfig('POST', {
          outageStartTime,
          outageEndTime,
          scope,
          provinceNo,
          typeCode,
          lineName,
          orgNo,
          ...test
        })
      )
      this.coreLogger.warn(result)
      if (result.status === 403) {
        console.log(result)
      } else {
        return result.data
      }
    } catch (error) {
      console.error('error' + error)
    }
  }
}
