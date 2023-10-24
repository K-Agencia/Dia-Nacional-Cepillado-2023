import { useEffect, useState } from 'react';
import { CONEXION } from '../components/conexion';
import toast from 'react-hot-toast';
import CardImagen from '../components/CardImagen';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {

  const [instituciones, setInstituciones] = useState([]);

  useEffect(() => {
    CONEXION({
      url: '/all'
    })
      .then(({ data }) => {
        console.log(data);
        setInstituciones(data);
      })
      .catch((err) => {
        toast.error(err.response.data);
        console.log(err);
      })
  }, []);

  return (
    <div className='Home py-3'>
      <Container>
        <Row className='w-100 g-1 g-md-4 row-cols-md-4'>
          {instituciones.map((institucion, index) => (
            <Col key={index} >
              <CardImagen data={institucion} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
};

export default Home;