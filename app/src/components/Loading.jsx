import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className='Loading'>
      <div className={`Loading vw-100 vh-100 position-absolute top-0 start-0 bg-light bg-opacity-75 d-flex flex-column justify-content-center align-items-center z-3`}>
        <Spinner animation="border" variant="danger" />
      </div>
    </div>
  );
};

export default Loading;