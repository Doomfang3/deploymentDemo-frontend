import { useParams } from 'react-router'
import { Book } from '../types/Book'
import { useEffect, useState } from 'react'
import { Badge, Container, Group, Text, Title } from '@mantine/core'

const BookDetails = () => {
  const { bookId } = useParams()

  const [book, setBook] = useState<Book>()

  const fetchBook = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/books/${bookId}`)
      if (response.ok) {
        const bookData = await response.json()
        setBook(bookData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBook()
  }, [])

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {book && (
        <>
          <Title>{book.title}</Title>
          <Group>
            {book.genres.map(genre => (
              <Badge key={genre} variant='light'>
                {genre}
              </Badge>
            ))}
          </Group>
          <Text>{book.summary}</Text>
          <Text>Published year : {book.year}</Text>
          <Text>Quantity : {book.quantity}</Text>
        </>
      )}
    </Container>
  )
}

export default BookDetails
