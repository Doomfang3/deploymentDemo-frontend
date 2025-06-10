/*   title      String
  year       Int
  summary    String?
  quantity   Int      @default(0)
  genres     String[]
  authorName String */

import { Button, MultiSelect, NumberInput, Textarea, TextInput } from '@mantine/core'
import { NewBook } from '../types/Book'
import { ChangeEvent, FormEvent, useState } from 'react'

const BookForm = ({ onSubmit }: { onSubmit: (bookData: NewBook) => void }) => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [year, setYear] = useState(2025)
  const [quantity, setQuantity] = useState(0)
  const [genres, setGenres] = useState<string[]>([])
  const [authorName, setAuthorName] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    onSubmit({ title, summary, year, quantity, genres, authorName })
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label='Title'
        withAsterisk
        value={title}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
      />
      <Textarea
        label='Summary'
        value={summary}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setSummary(event.target.value)}
      />
      <NumberInput
        label='Published year'
        withAsterisk
        value={year}
        onChange={value => {
          if (typeof value === 'string') {
            setYear(parseInt(value))
          } else {
            setYear(value)
          }
        }}
      />
      <NumberInput
        label='Quantity'
        withAsterisk
        value={quantity}
        onChange={value => {
          if (typeof value === 'string') {
            setQuantity(parseInt(value))
          } else {
            setQuantity(value)
          }
        }}
      />
      <MultiSelect
        label='Genres'
        withAsterisk
        data={['Biography', 'Classics', 'Crime', 'Fantasy', 'History', 'Poetry']}
        value={genres}
        onChange={values => setGenres(values)}
      />
      <TextInput
        label='Author name'
        withAsterisk
        value={authorName}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setAuthorName(event.target.value)}
      />
      <Button type='submit'>Create</Button>
    </form>
  )
}

export default BookForm
