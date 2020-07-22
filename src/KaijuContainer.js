//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    form: false
  }

  componentDidMount() {
    requests.fetchKaijus()
    .then(kaijus => this.setState({ kaijus: kaijus }))
  }

  toggleForm = () => {
    this.setState(prevState => ({
      form: !prevState.form
    }))
  }

  deleteKaiju = (id) => {
    fetch(`http://localhost:3000/kaijus/${id}`, 
    { method: 'DELETE'})
    .then(r => r.json())
    .then(this.removeFromState(id)) 
  }

  removeFromState = (id) => {
    const filtered = this.state.kaijus.filter(k => k.id !== id)
    this.setState({
      kaijus: filtered
    })
  }

  addKaiju = (newKaiju) => {
    const config = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(newKaiju)
    }
    fetch('http://localhost:3000/kaijus', config)
    .then(r => r.json())
    .then(kaiju =>  this.setState({kaijus: [...this.state.kaijus, kaiju]}))
  }

  editKaiju = (updatedKaiju) => {
    const updatedKaijus = this.state.kaijus.map(k => {
      if (updatedKaiju.id === k .id) {
        return updatedKaiju
      }
      else {
        return k
      }
    })
    this.setState({
      kaijus: updatedKaijus
    })
  }

  render() {
    return (
      <>

        {this.state.form ? <CreateKaijuForm addKaiju={this.addKaiju}/> : null}
        <button onClick={this.toggleForm}>kaiju form</button>

        <div id='kaiju-container'>
          {this.state.kaijus.map(k => <KaijuCard editKaiju={this.editKaiju} deleteKaiju={this.deleteKaiju} key={k.id} kaiju={k}/>)}
        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
