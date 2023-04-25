export interface ExternalServiceInfo {
  name: string
  apiUrl: string
  projectUrl: string
  attribution?: string
}

export interface ExternalService {
  serviceInfo: ExternalServiceInfo
}

