import { useEffect, useState } from 'react'
import { Book } from '../types/Book'
import { BookCard } from '../components/BookCard'
import { Container, SimpleGrid } from '@mantine/core'

const Home = () => {
  const [books, setBooks] = useState<Book[]>([])

  const fetchAllBooks = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/books`)
      if (response.ok) {
        const booksData = (await response.json()) as Book[]
        setBooks(booksData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllBooks()
  }, [])

  const handleDelete = async (bookId: number) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/books/${bookId}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        fetchAllBooks()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <SimpleGrid cols={4}>
        {books.map(book => (
          <BookCard key={book.id} book={book} handleDelete={handleDelete} />
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Home
