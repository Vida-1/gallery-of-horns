import React from 'react';
import Form from 'react-bootstrap/Form';

class FilterForm extends React.Component {

  filter = (event) => {
    const numOfHorns = parseInt(event.target.value);  //Note values coming in from event.target is always going to be a string
    let gallery = this.props.data;

    if (numOfHorns) {
      gallery = this.props.data.filter(dataElement => dataElement.horns === numOfHorns);
    }
    console.log(gallery);
    console.log(this.props.upFiltBeasts);
    this.props.upFiltBeasts(gallery);
  }


  render() {
    return (
      <Form>
        <Form.Label>How many horns?</Form.Label>
        <Form.Select as="select" onChange={this.filter}>
          <option value="">All the beasts!</option>
          <option value="1">One horn!</option>
          <option value="2">Two horns!</option>
          <option value="3">Three horns!</option>
          <option value="100">WOW... too many horns to count!</option>
        </Form.Select>
      </Form>
    );
  }
}

export default FilterForm;