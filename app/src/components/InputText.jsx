import React from 'react';
import { Form } from 'react-bootstrap';

const InputText = React.forwardRef(({
  label,
  descripcion,
  type = 'text',
  name,
  onChange,
  onBlur,
  multiple = false,
  autoComplete = "off",
  placeholder = '',
  error
}, ref) => (
  <Form.Group controlId={`controlId_${name}`} className='mb-2'>
    <Form.Label className={error ? "text-danger fw-medium" : ""}>{label}</Form.Label>
    <br />
    <Form.Control
      ref={ref}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      accept={type === 'file' ? "image/png, image/jpeg" : 'false'}
      multiple={multiple}
      isInvalid={error ? true : false}
    />
    {descripcion && <Form.Label className="fs-6">{descripcion}</Form.Label>}
    {error && <Form.Control.Feedback type="invalid" className='d-block'>{error.message}</Form.Control.Feedback>}
  </Form.Group>
)
);

export default InputText;