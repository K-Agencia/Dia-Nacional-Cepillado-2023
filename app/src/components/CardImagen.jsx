import { Card } from 'react-bootstrap';
import { baseURL } from '../constants/RoutersLinks';

const CardImagen = ({ data: { institucion, sede, ciudad, departamento, imagen } }) => {
  return (
    <Card className='w-auto h-100'>
      <Card.Img variant="top" src={`${baseURL}/img?key=${imagen}`} />
      <Card.Body>
        <Card.Title className='text-uppercase'>{institucion}</Card.Title>
        <Card.Subtitle className='text-capitalize'>Sede: {sede}</Card.Subtitle>
        <Card.Text>
          <p className='m-0 text-capitalize'>Ciudad: {ciudad}</p>
          <p className='m-0 text-capitalize'>Departamento: {departamento}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardImagen;