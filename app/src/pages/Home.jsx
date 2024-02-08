import { useEffect, useState } from 'react';
import { CONEXION } from '../components/conexion';
import toast from 'react-hot-toast';
import CardImagen from '../components/CardImagen';
import { Container } from 'react-bootstrap';
import logo from '../img/logo.png'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '../css/Home.css';
import VewModal from '../components/VewModal';
import Loading from '../components/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {

  const [instituciones, setInstituciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [institucion, setInstitucion] = useState({});
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(0);

  const handleClose = () => {
    setInstitucion({})
    setShow(false)
  };

  const handleShow = (id) => {

    setLoading(true);

    CONEXION({
      url: '/institucion',
      params: {
        id: id
      }
    })
      .then(({ data }) => {
        setInstitucion(data);
      })
      .catch((err) => {
        toast.error(err.response.data);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })

    setShow(true)
  };

  const get_data = () => {
    setLoading(true);

    const newPage = page + 1;

    CONEXION({
      url: `/data/${newPage}`
    })
      .then(({ data }) => {
        setPage(newPage);
        setInstituciones(instituciones.concat(data));
      })
      .catch((err) => {
        toast.error(err.response.data);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    get_data(page);
  }, []);

  return (
    <div className='Home pt-3 pb-5'>
      <Container>

        <div className='h-25 py-5 py-mb-2 d-flex justify-content-center align-items-center'>
          <img src={logo} alt="" className='logo' />
        </div>
        <InfiniteScroll
          dataLength={instituciones.length} //This is important field to render the next data
          next={() => get_data()}
          hasMore={true}
          loader={<h1>Cargando...</h1>}
          scrollableTarget="InfiniteScroll"
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
          >
            <Masonry gutter='20px'>
              {instituciones.map((institucion, index) => (
                <CardImagen key={index} data={institucion} handleShow={handleShow} />
              ))}

            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>

        <VewModal show={show} handleClose={handleClose} data={institucion} />

      </Container>
      {loading && <Loading />}

    </div>
  )
};

export default Home;