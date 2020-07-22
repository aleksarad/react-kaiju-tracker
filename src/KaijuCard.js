// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {
  
  state = {
    editToggle: false
  }

  toggleState = () => {
    this.setState(prevState=>({
      editToggle: !prevState.editToggle
    }))
  }

  // How can we show the edit form conditionally?
  render() {
    const {id, name, power, image} = this.props.kaiju
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{name}</h2>
        <h3 className='kaiju-card-power'>Power: {power}</h3>

        <img className='kaiju-card-image' src={image} alt={name} />

        <button className='kaiju-card-edit-button' onClick={this.toggleState}>Edit</button>
        {this.state.editToggle ? <EditKaijuForm editKaiju={this.props.editKaiju} kaiju={this.props.kaiju}/> : null}
        <button onClick={() => this.props.deleteKaiju(id)}>delete</button>
      </div>
    )
  }
}

export default KaijuCard
