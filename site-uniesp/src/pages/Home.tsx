import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BannerAdd from '../components/BannerAdd'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Container className="py-4">

        <BannerAdd/>

        <Card className="mb-4 ra">
        <p>
            A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal...
        </p>
        <p>
            Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático...
        </p>
        <p>
            A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
        </p>
        </Card>

        <Row className="g-4">
            <Col>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                        alt="Main Building"
                        style={{ height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Vida no campus
                        </Card.Title>
                        <Card.Text>
                            Um ambiente vibrante e acolhedor
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                        alt="Main Building"
                        style={{ height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Biblioteca
                        </Card.Title>
                        <Card.Text>
                            Uma biblioteca com um acervo completo e atualizado
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985"
                        alt="Main Building"
                        style={{ height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Prédio principal
                        </Card.Title>
                        <Card.Text>
                            O centro de nossa instituição, com salas de aulas mordernas e laboratórios equipados para atender às necessidades dos cursos
                        </Card.Text>
                    </Card.Body>                    
                </Card>
            </Col>
        </Row>

        <Row className="g-4 mt-4">
            <Col md={6}>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0"
                        alt="Main Building"
                        style={{ height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Parceria com empresas
                        </Card.Title>
                        <Card.Text>
                            Mantemos acordos com empresas locais e multinacionais...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
                        alt="Main Building"
                        style={{ height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Compromisso com a Educação
                        </Card.Title>
                        <Card.Text>
                            Investimos continuamente na qualidade do ensino
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Footer/>
    </Container>
  )
}

export default Home