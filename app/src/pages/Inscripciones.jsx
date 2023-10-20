import React from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../components/inputText';

const Inscripciones = () => {

  const { register, formState: { errors } } = useForm({
    defaultValues: {
      institucion: '',
      sede: '',
      ciudad: '',
      departamento: ''
    }
  });

  return (
    <div className='Inscripciones'>

      <InputText
        {...register('institucion', {
          required: "Este campo es requerido"
        })}
        label={"Nombre de la institución"}
        autoComplete={false}
        error={errors?.institucion}
      />
    </div>
  )
};

export default Inscripciones;