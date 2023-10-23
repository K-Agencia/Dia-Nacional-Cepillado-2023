import React from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../components/InputText';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Inscripciones = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      institucion: '',
      sede: '',
      ciudad: '',
      departamento: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='Inscripciones'>

      <Row>
        <Col>
          <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputText
                {...register('institucion', {
                  required: "Este campo es requerido"
                })}
                label={"Nombre de la institución"}
                autoComplete={false}
                error={errors?.institucion}
              />

              <InputText
                {...register('sede', {
                  required: "Este campo es requerido"
                })}
                label={"Nombre de la institución"}
                autoComplete={false}
                error={errors?.sede}
              />

              <InputText
                {...register('ciudad', {
                  required: "Este campo es requerido"
                })}
                label={"Nombre de la institución"}
                autoComplete={false}
                error={errors?.ciudad}
              />

              <InputText
                {...register('departamento', {
                  required: "Este campo es requerido"
                })}
                label={"Nombre de la institución"}
                autoComplete={false}
                error={errors?.departamento}
              />

              <InputText
                {...register('file', {
                  required: "Este campo es requerido"
                })}
                type='file'
                label={"Nombre de la institución"}
                autoComplete={false}
                error={errors?.file}
              />

              <Button type='submit'>Enviar</Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  )
};

export default Inscripciones;