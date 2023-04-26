export type ResponseLanguage =
  // English USA
  | 'eng-us'
  | 'eng'
  // German DE
  | 'ger-de'
  | 'ger'
  // Ukrainian UA
  | 'ukr-ua'
  | 'ukr'
  // Russian RUS
  | 'rus-ru'
  | 'rus'
  // Portuguese BR
  | 'por-br'
  | 'por'
  // Spanish	ES
  | 'esp-es'
  | 'esp'
  // Spanish	MX
  | 'esp-mx'
  | 'esp'
  // Filipino PH
  | 'tl-fil'
  | 'fil'
  // Urdu UR
  | 'urd-ur'
  | 'urd'
  // Czech	CZ
  | 'ces-cz'
  | 'cze-cz'
  | 'cze'
  | 'ces'

export interface ResponseFactList {
  data: string[]
}
