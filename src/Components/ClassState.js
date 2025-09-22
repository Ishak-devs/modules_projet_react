import React, { Component } from 'react'

class ClassState extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 0
        }
    }

    addone=() => {
             this.setState(prevState => {
                return {
                   name: prevState.name + 1
                }
             })
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