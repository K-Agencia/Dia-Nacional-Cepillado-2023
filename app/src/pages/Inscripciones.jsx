// import React from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../components/InputText';
import { Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import '../css/Inscripciones.css';
import { CONEXION } from '../components/conexion';
import toast from 'react-hot-toast';
import logo from '../img/logo.png'
import { useState } from 'react';
import Loading from '../components/Loading';

const Inscripciones = () => {

  const { register, handleSubmit, formState: { errors }, getValues, setValue, reset } = useForm({
    defaultValues: {
      institucion: '',
      sede: '',
      ciudad: '',
      departamento: '',
      files: []
    }
  });

  const [loading, setLoading] = useState(false);

  const onChangeFiles = () => {
    const files = getValues('files');
    if (files.length > 3) {
      toast.error('¡Máximo 3 archivos permitidos!');
      setValue('files', null);
    }
  }

  const onSubmit = ({ files, ...data }) => {

    setLoading(true)
    const formData = new FormData();
    [...files].forEach(file => formData.append('files', file));
    formData.append('data', JSON.stringify(data))

    CONEXION({
      url: '/',
      method: 'post',
      data: formData,
    })
      .then(({ data }) => {
        toast.success(data);
        reset();
      })
      .catch((err) => {
        toast.error(err.response.data);
        console.log(err);
      }).finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className='Inscripciones d-flex align-items-center pb-5 pb-mb-0'>
      <Container className='h-100'>
        <Row>
          <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
            <div className='w-75 py-5 py-mb-2 d-flex justify-content-center align-items-center'>
              <img src={logo} alt="" className='logo' />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Card body>
              <h3 className='text-center text-danger'>Formulario de Inscripción</h3>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                  <InputText
                    {...register('institucion', {
                      required: "Este campo es requerido"
                    })}
                    label={"Nombre de la institución"}
                    error={errors?.institucion}
                  />

                  <InputText
                    {...register('sede', {
                      required: "Este campo es requerido"
                    })}
                    label={"Sede de la institución"}
                    error={errors?.sede}
                  />

                  <InputText
                    {...register('ciudad', {
                      required: "Este campo es requerido"
                    })}
                    label={"Ciudad"}
                    error={errors?.ciudad}
                  />

                  <InputText
                    {...register('departamento', {
                      required: "Este campo es requerido"
                    })}
                    label={"Departamento"}
                    error={errors?.departamento}
                  />

                  <InputText
                    {...register('files', {
                      required: "Este campo es requerido",
                      onChange: () => onChangeFiles(),
                    })}
                    descripcion="Se permite un máximo de 3 imágenes"
                    multiple={true}
                    type='file'
                    label={"Fotografía"}
                    error={errors?.files}
                  />

                  <Button type='submit' variant='danger' className='w-50 mt-3 mx-auto'>Enviar</Button>
                </Stack>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      {loading && <Loading />}
    </div>
  )
};

export default Inscripciones;