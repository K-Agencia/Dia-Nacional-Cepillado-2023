import { Card } from 'react-bootstrap';
import Carrusel from './Carrusel';
import { BsArrowsFullscreen } from 'react-icons/bs';
import '../css/CardImagen.css';

const CardImagen = ({ data, handleShow }) => {

  const { id, institucion, sede, ciudad, departamento, ...imagenes } = data;

  const imgs = Object.values(imagenes).filter(valor => valor !== null);

  return (
    <Card className=''>
      <Card.Body className='p-0'>
        <div className='button-icon'>
        <BsArrowsFullscreen className='icon-expand' onClick={() => handleShow(id)} />
        </div>
        <Carrusel imagenes={imgs} />
      </Card.Body>
      <Card.Body>
        <Card.Title className='w-md-50 text-uppercase fw-bold'>{institucion}</Card.Title>
        <Card.Text className='m-0 text-capitalize'><b>Sede:</b> {sede}</Card.Text>
        <Card.Text className='m-0 text-capitalize'><b>Ciudad:</b> {ciudad}</Card.Text>
        <Card.Text className='m-0 text-capitalize'><b>Departamento:</b> {departamento}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardImagen;