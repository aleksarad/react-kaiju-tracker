import React from 'react'

class CreateKaijuForm extends React.Component {
  state = {
    name: '',
    power: '',
    image: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addKaiju(this.state)
  }


  render() {
    return (
      <form id='create-kaiju-form' onSubmit={this.handleSubmit}>

        <label>Name: </label>
        <input type='text' name='name' onChange={this.handleChange} placeholder="add your name here.." />

        <label>Power: </label>
        <input type='text' name='power' onChange={this.handleChange} placeholder="add your power here..." />

        <label>Image: </label>
        <input type='text' name='image' onChange={this.handleChange} placeholder="add your image url here..." />

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
