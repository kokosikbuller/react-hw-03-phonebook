import React, { FC } from 'react';

interface Contacts {
	id: string;
	name: string;
	number: string;
}

interface Props {
	filter: string;
	contacts: Contacts[];
	removeUser: (id: string) => void;
}

const ContactList: FC<Props> = ({ filter, contacts, removeUser }) => {
	console.log();
	return (
		<ul>
			{filter
				? contacts
						.filter(
							(item) =>
								item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
						)
						.map(({ name, number, id }) => (
							<li key={id}>
								{name}: {number}
								<button onClick={() => removeUser(id)}>Delete</button>
							</li>
						))
				: contacts.map(({ name, number, id }) => (
						<li key={id}>
							{name}: {number}
							<button onClick={() => removeUser(id)}>Delete</button>
						</li>
				  ))}
		</ul>
	);
};

export default ContactList;
