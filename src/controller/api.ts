import { Inject, Controller, Provide, Get } from '@midwayjs/decorator'
import { Context } from 'egg'
import ScrapingService from 'src/service/scraping'

@Provide()
@Controller('/api')
export class Api {
  @Inject()
  ctx: Context

  @Inject()
  busRouteService: ScrapingService

  @Get('/index')
  async getIndexData () {
    const data = await this.busRouteService.scrapingPowerOffList()
    return data
  }
}
