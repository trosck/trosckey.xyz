export interface BreedInfo {
  id: string
  type: string
  attributes: {
    name: string
    description: string
    life: {
      max: number
      min: number
    }
    male_weight: {
      max: number
      min: number
    }
    female_weight: {
      max: number
      min: number
    }
    hypoallergenic: boolean
  }
  relationships: {
    group: {
      data: {
        id: string
        type: string
      }
    }
  }
}

export interface ResponseBreedSingle {
  data: BreedInfo
  links: {
    self: string
  }
}

export interface ResponseBreedList {
  data: BreedInfo[]
  links: {
    self: string
    current: string
    next: string
    last: string
  }
}

export interface ResponseFactList {
  data: Array<{
    id: string
    type: string
    attributes: {
      body: string
    }
  }>
}
