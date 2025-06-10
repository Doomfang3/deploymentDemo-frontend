export type Book = {
  id: number
  title: string
  year: number
  summary?: string
  quantity: number
  genres: string[]
  authorName: string
  createdAt: string
  updatedAt: string
}

export type NewBook = {
  title: string
  year: number
  summary?: string
  quantity: number
  genres: string[]
  authorName: string
}
