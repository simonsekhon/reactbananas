import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const FormExampleField = (props) => (
  <Form>
    <Form.Field>
      <h1>{props.item}</h1>
      <br/>
      <label># Bananas</label>
      <input name="bananas"onChange={(evt) => props.change(evt)}/>
      <br/>
        <label>Date</label>
      <input name="date" onChange={(evt) => props.change(evt)}/>
      <br/>
      <Button onClick={() => props.submit()} style={{marginTop: '5%'}}>Submit</Button>
    </Form.Field>
  </Form>
)

export default FormExampleField;
