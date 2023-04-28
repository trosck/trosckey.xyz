import type { ResponseFactList, ResponseLanguage } from './types'
import type { ExternalService } from '..'
import { URLParams } from '@trosckey/url-params'

export class MeowFacts implements ExternalService {
  serviceInfo = {
    projectUrl: 'https://github.com/wh-iterabb-it/meowfacts',
    apiUrl: 'https://meowfacts.herokuapp.com/',
    name: 'meowfacts'
  }

  async getFactList({
    count = 1,
    id,
    lang = 'eng-us'
  }: {
    count: number
    id?: number
    lang: ResponseLanguage
  }) {
    const apiEndpoint = new URLParams(this.serviceInfo.apiUrl)
    apiEndpoint.setAll({
      count,
      lang
    })

    if (id) {
      apiEndpoint.set('id', id)
    }

    const response = (await fetch(apiEndpoint.url).then((response) =>
      response.json()
    )) as ResponseFactList

    return response.data[0]
  }
}
