import type { AnimalEntityService } from '@/api/animals/AnimalEntity'

interface ApiResponse {
  data: {
    id: string
    type: string
    attributes: {
      body: string
    }
  }[]
}

export class DogapiDog implements AnimalEntityService {
  serviceInfo = {
    projectUrl: 'https://github.com/kinduff/dogapi.dog',
    apiUrl: 'https://dogapi.dog/api/v2',
    name: 'Dog API'
  }

  async getRandomItem() {
    const response = (await fetch(this.serviceInfo.apiUrl + '/facts').then((response) =>
      response.json()
    )) as ApiResponse

    return response.data[0].attributes.body
  }
}
