import { Col, Modal, Row } from 'react-bootstrap';
import Carrusel from './Carrusel';
import '../css/VewModal.css';

const VewModal = ({ show, handleClose, data }) => {

  const { id, institucion, sede, ciudad, departamento, ...imagenes } = data;
  const imgs = Object.values(imagenes).filter(valor => valor !== null);

  return (
    <Modal size={'xl'} show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Row className="w-100 vh-50 modal_carrusel">
          <Col md={8}>
            <Carrusel imagenes={imgs} />
          </Col>
          <Col md={4} className='d-flex flex-column justify-content-center'>
            <p className="d-none">{id}</p>
            <p className='title-modal w-md-50 text-uppercase fs-4 fw-bold'>{institucion}</p>
            <p className='m-0 text-capitalize'><b>Sede:</b> {sede}</p>
            <p className='m-0 text-capitalize'><b>Ciudad:</b> {ciudad}</p>
            <p className='m-0 text-capitalize'><b>Departamento:</b> {departamento}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

export default VewModal;