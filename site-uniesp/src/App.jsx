import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavBar'
import Home from './pages/Home'
import Faculty from './pages/Faculty'
import Dpo from './pages/Dpo'
import News from './pages/News'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <CustomNavbar/>
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-faculdade" element={<Faculty/>}/>
                 <Route path="/dpo-lgpd" element={<Dpo/>}/>
            <Route path="/noticias" element={<News/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>

  )
}

export default App