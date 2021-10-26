import React, { Component } from 'react';

type Test = {
    name: string,
    number: string
}
interface IProps {
    setUser: (name: string, number: string) => void,
}



class ContactForm extends Component<IProps> {

    state: Test = {
        name: '',
        number: '',
    }

    handlerAdd = (event: any) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value})
    }

    render() {
        const {name, number}: Test = this.state;
        return (
            <form>
            <div>
              <label>
                Name <br/>
                <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  value={name}
                  onChange={this.handlerAdd}
                />
              </label>
            </div>
            <div>
              <label>
                Number <br/>
                <input
                  type="tel"
                  name="number"
                  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                  title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                  required
                  value={number}
                  onChange={this.handlerAdd}
                />
              </label>
            </div>
            <div>
              <button 
                type="button" 
                onClick={() => {
                    this.props.setUser(name, number)
                    this.setState({name: '', number: ''})
                }}
                >
                    Add name
                </button>
            </div>
          </form>
        );
    }
}

export default ContactForm;