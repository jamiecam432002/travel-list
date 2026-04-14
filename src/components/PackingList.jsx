import { useState } from 'react';
import PackingItem from './PackingItem';

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
	const [sortBy, setSortBy] = useState('input');

	/* note: we did NOT require any new state to sort the list. we simply make a copy
	of the items, since that is going to cause a rerender whenever the list changes
	and on the re-render the list items can be resorted */
	let sortedItems;

	if (sortBy === 'input') sortedItems = items;
	if (sortBy === 'description')
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	if (sortBy === 'packed')
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className='list'>
			<ul>
				{sortedItems.map((item) => (
					<PackingItem
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
						item={item}
						key={item.id}
					/>
				))}
			</ul>

			<div className='actions'>
				<select
					value={sortBy}
					name=''
					onChange={(e) => setSortBy(e.target.value)}>
					<option value='input'>Sort by input order</option>
					<option value='description'>Sort by description</option>
					<option value='packed'>Sort by packed status</option>
				</select>
			</div>
		</div>
	);
}
