import '@mantine/core/styles.css'
import { AppShell, MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import BookDetails from './pages/BookDetails'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 70 }} padding='md'>
        <AppShell.Header>
          <Navbar />
        </AppShell.Header>
        <AppShell.Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books/new' element={<AddBook />} />
            <Route path='/books/:bookId' element={<BookDetails />} />

            <Route path='*' element={<h1>404 Page</h1>} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}
