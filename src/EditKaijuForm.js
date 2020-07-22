import React from 'react'

class EditKaijuForm extends React.Component {

  state = {
    id: this.props.kaiju.id,
    name: this.props.kaiju.name,
    power: this.props.kaiju.power,
    image: this.props.kaiju.image
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.editKaiju(this.state)
  }

  render() {
    return (
      <>
        <form className='kaiju-card-edit-form' onSubmit={this.handleSubmit}>

          <label>Name: </label>
          <input name='name' onChange={this.handleChange} value={this.state.name} type='text' />
          <br/>

          <label>Power: </label>
          <input name='power' onChange={this.handleChange} value={this.state.power} type='text' />
          <br/>

          <label>Image URL: </label>
          <input name='image' onChange={this.handleChange} value={this.state.image} type='text' />
          <br/>

          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
