import { Button } from '@mantine/core'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          padding: '0',
        }}
      >
        <li>
          <Button variant='subtle' component={Link} to='/'>
            All Books
          </Button>
        </li>
        <li>
          <Button variant='subtle' component={Link} to='/books/new'>
            Add Book
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
