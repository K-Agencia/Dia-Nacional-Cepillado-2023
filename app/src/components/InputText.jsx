import React from 'react';
import { Form } from 'react-bootstrap';

const InputText = React.forwardRef(({
  label,
  type = 'text',
  name,
  onChange,
  onBlur,
  autoComplete = false,
  placeholder = '',
  error
}, ref) => (
  <Form.Group controlId="validationCustom01">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      ref={ref}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      autoComplete={autoComplete.toString()}
      placeholder={placeholder}
      accept={type === 'file' ? "image/png, image/jpeg":'false'}
    />
    {error && <Form.Control.Feedback>{error.message}</Form.Control.Feedback>}
  </Form.Group>
)
);

export default InputText;