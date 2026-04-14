import { useState } from 'react';
import PackingList from './components/PackingList';
import Logo from './components/Logo';
import Form from './components/Form';
import Stats from './components/Stats';

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItem(item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item,
			),
		);
	}

	return (
		<div className='app'>
			<Logo />
			<Form onAddItem={handleAddItem} />
			<PackingList
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				items={items}
			/>
			<Stats items={items} />
		</div>
	);
}
