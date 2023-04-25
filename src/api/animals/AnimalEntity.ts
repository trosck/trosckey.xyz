export interface AnimalServiceInfo {
  name: string
  apiUrl: string
  projectUrl: string
}

export interface AnimalEntityService {
  serviceInfo: AnimalServiceInfo
  getRandomItem: () => Promise<string>
}

export interface AnimalEntity {
  quoteService?: AnimalEntityService
  imageService?: AnimalEntityService
}
