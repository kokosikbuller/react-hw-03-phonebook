import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
	state = {
		contacts: [],
		filter: '',
	};

	componentWillMount() {
		const dataStor: any = localStorage.getItem('contacts');

		this.setState({
			contacts: JSON.parse(dataStor),
		});
	}

	componentDidUpdate(prevProps: any, prevState: any) {
		if (prevState.contacts !== this.state.contacts) {
			window.localStorage.setItem(
				'contacts',
				JSON.stringify(this.state.contacts)
			);
		}
	}

	setUser = (name: string, number: string) => {
		const user = {
			id: Date.now(),
			name,
			number,
		};

		this.setState({
			contacts: [...this.state.contacts, user],
		});
	};

	removeUser = (id: string) => {
		const newArr = this.state.contacts.filter((item: any) => item.id !== id);
		this.setState({
			contacts: newArr,
		});
	};

	changeFilter = (event: any) => {
		this.setState({
			filter: event.target.value,
		});
	};

	render() {
		const { contacts, filter } = this.state;
		return (
			<div>
				<ContactForm setUser={this.setUser} />

				<div>
					<h2>Contacts</h2>
					<Filter filter={filter} changeFilter={this.changeFilter} />

					<ContactList
						removeUser={this.removeUser}
						filter={filter}
						contacts={contacts}
					/>
				</div>
			</div>
		);
	}
}

export default App;
