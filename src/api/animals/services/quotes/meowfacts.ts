import type { AnimalEntityService } from '@/api/animals/AnimalEntity'

interface ApiResponse {
  data: string[]
}

export class MeowFacts implements AnimalEntityService {
  serviceInfo = {
    projectUrl: 'https://github.com/wh-iterabb-it/meowfacts',
    apiUrl: 'https://meowfacts.herokuapp.com/',
    name: 'meowfacts'
  }

  async getRandomItem() {
    const response = (await fetch(this.serviceInfo.apiUrl).then((response) =>
      response.json()
    )) as ApiResponse

    return response.data[0]
  }
}
