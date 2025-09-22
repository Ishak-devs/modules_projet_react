import React, { Component } from 'react'

class ClassState extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "0"
        }
    }

    addone=() => {
             
    }

  render() {
    return (

      <div>{this.state.name}
      <button onClick={this.addone}>Ajouter 1</button>
      </div>
    )
  }
}

export default ClassState