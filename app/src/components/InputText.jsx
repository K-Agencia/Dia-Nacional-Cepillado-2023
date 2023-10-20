import React from 'react';
import { Form } from 'react-bootstrap';

const InputText = React.forwardRef(({
  label,
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
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      type="text"
      autoComplete={autoComplete.toString()}
      placeholder={placeholder}
    />
    {error && <Form.Control.Feedback>{error}</Form.Control.Feedback>}
  </Form.Group>
)
);

export default InputText;