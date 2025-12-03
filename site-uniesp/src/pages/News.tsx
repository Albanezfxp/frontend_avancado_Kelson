import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer'

const News = () => {
  return (
    <Container className="py-4">
        <h2 className="mb-4">Notícias</h2>
        <Row className="g-4">
            <Col>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://www.iesp.edu.br/sistema/uploads/imagens/noticias/_thumb/divulgado-o-calendario-academico-de-2026-1.png"
                        alt="Calendário acadêmico"
                        style={{ height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Text>
                            <a href="https://www.iesp.edu.br/noticias/divulgado-o-calendario-academico-de-2026-1">Divulgado o calendário acadêmico de 2026</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://www.iesp.edu.br/sistema/uploads/imagens/noticias/_thumb/concurso-de-bolsas-acontece-no-proximo-sabado-06-.png"
                        alt="Concurso de bolsas"
                        style={{ height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Text>
                            <a href="https://www.iesp.edu.br/noticias/concurso-de-bolsas-acontece-no-proximo-sabado-06-">Concurso de bolsas acontece no próximo sábado</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://www.iesp.edu.br/sistema/uploads/imagens/noticias/_thumb/red-friday-uniesp-lanca-condicoes-especiais-para-graduacao.png"
                        alt="Red Friday"
                        style={{ height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Text>
                            <a href="https://www.iesp.edu.br/noticias/red-friday-uniesp-lanca-condicoes-especiais-para-graduacao">Red Friday: UNIESP lança condições especiais para graduação</a>
                        </Card.Text>
                    </Card.Body>                    
                </Card>
            </Col>
        </Row>
                <Footer/>
        
    </Container>
  )
}

export default News