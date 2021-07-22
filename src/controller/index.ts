import { Controller, Get, Provide, Inject } from '@midwayjs/decorator'
import { Context } from 'egg'
import { IApiService, IApiDetailService } from '../interface'
import ScrapingService from 'src/service/scraping'

interface IEggContext extends Context {
  apiService: IApiService
  apiDeatilservice: IApiDetailService
}

@Provide()
@Controller('/')
export class Index {
  @Inject()
  ctx: IEggContext

  @Inject('ApiService')
  apiService: IApiService

  @Inject('ApiDetailService')
  apiDeatilservice: IApiDetailService

  @Inject()
  busRouteService: ScrapingService

  @Get('/')
  async handler (): Promise<void> {
    console.log('handler')
    const data = await this.busRouteService.scrapingPowerOffList()
    return data
  }
}
