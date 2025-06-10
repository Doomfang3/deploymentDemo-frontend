import { IconPencil, IconTrash, IconZoom } from '@tabler/icons-react'
import { ActionIcon, Avatar, Badge, Card, Group, Text } from '@mantine/core'
import classes from '../styles/BookCard.module.css'
import { Book } from '../types/Book'
import { useNavigate } from 'react-router'

export function BookCard({
  book,
  handleDelete,
}: {
  book: Book
  handleDelete: (id: number) => void
}) {
  const navigate = useNavigate()

  return (
    <Card withBorder padding='lg' radius='md' className={classes.card}>
      <Group>
        {book.genres.map(genre => (
          <Badge key={genre} variant='light'>
            {genre}
          </Badge>
        ))}
      </Group>
      <Text className={classes.title} style={{ textAlign: 'center' }}>
        {book.title}
      </Text>

      <Group mt='lg' justify='center'>
        <Avatar src='https://avatar.iran.liara.run/public' radius='sm' />
        <div>
          <Text fw={500}>{book.authorName}</Text>
          <Text fz='xs' c='dimmed'>
            {book.year}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group justify='center'>
          <ActionIcon variant='subtle' color='gray' onClick={() => navigate(`/books/${book.id}`)}>
            <IconZoom size={20} color='var(--mantine-color-blue-6)' stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant='subtle'
            color='gray'
            onClick={() => navigate(`/books/${book.id}/update`)}
          >
            <IconPencil size={20} color='var(--mantine-color-yellow-6)' stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='subtle' color='gray' onClick={() => handleDelete(book.id)}>
            <IconTrash size={20} color='var(--mantine-color-red-6)' stroke={1.5} />
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  )
}
