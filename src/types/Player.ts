export interface PlayerDBInterface {
  message: string,
  code: string,
  data: {
    player?: PlayerDBData,
  },
  success: boolean,
  error: boolean,
}

export interface PlayerDBData {
  meta: {
    name_history: NameHistory[]
  },
  username: string,
  id: string,
  raw_id: string,
  avatar: string,
}

interface NameHistory {
  name: string,
  changedToAt?: number
}