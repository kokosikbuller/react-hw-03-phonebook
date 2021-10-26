import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';


class App extends Component {

  state = {
    contacts: []
  }

  setUser = (name: string, number: string) => {
    const user = {
      id: Date.now(),
      name,
      number
    }

    this.setState({
      contacts: [...this.state.contacts, user]
    })

  }

  render() {
    return (
      <div>
        <ContactForm
          setUser={this.setUser}
        />
      </div>
    );
  }
}

export default App;
