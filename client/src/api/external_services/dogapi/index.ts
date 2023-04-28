import type { ExternalService } from '..'
import type { ResponseBreedSingle, ResponseFactList } from './types'
import type { ResponseBreedList } from './types'

export class Dogapi implements ExternalService {
  serviceInfo = {
    projectUrl: 'https://dogapi.dog',
    apiUrl: 'https://dogapi.dog/api/v2',
    name: 'Dog API',
    attribution: 'Powered by Stratonauts Dog API'
  }

  async getBreedList() {
    const response = (await fetch(this.serviceInfo.apiUrl + '/breeds').then((r) =>
      r.json()
    )) as ResponseBreedList
    return response.data
  }

  async getBreedSingle(id: string) {
    const response = (await fetch(this.serviceInfo.apiUrl + '/breeds/' + id).then((r) =>
      r.json()
    )) as ResponseBreedSingle
    return response.data
  }

  /**
   * returns single random fact in an array
   */
  async getFactList() {
    const response = (await fetch(this.serviceInfo.apiUrl + '/facts').then((r) =>
      r.json()
    )) as ResponseFactList
    return response.data
  }
}
