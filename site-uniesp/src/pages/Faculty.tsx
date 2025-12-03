 import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card, CardBody, Container } from 'react-bootstrap'
import Footer from '../components/Footer'

const Faculty = () => {
  return (
    <Container className="py-4">
        <h2 className="mb-4">A Faculdade</h2>

        <Card className="mb-4 shadow sm">
            <CardBody>
                <p>
                    A Faculdade uniesp é boa!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consects
                </p>
            </CardBody>
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
                <Footer/>
        
    </Container>
  )
}

export default Faculty;