import { Container, Title } from '@mantine/core'
import BookForm from '../components/BookForm'
import { Book, NewBook } from '../types/Book'
import { useNavigate } from 'react-router'

const AddBook = () => {
  const navigate = useNavigate()

  const addBook = async (newBookData: NewBook) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBookData),
      })
      if (response.status === 201) {
        const createdBook = (await response.json()) as Book
        navigate(`/books/${createdBook.id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Title style={{ textAlign: 'center' }}>Add a new book</Title>
      <BookForm onSubmit={addBook} />
    </Container>
  )
}

export default AddBook
