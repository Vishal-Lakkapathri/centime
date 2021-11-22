import React from 'react';

const AddCategory = ({ handleSubmitClick }: { handleSubmitClick: () => any }) => {
	return (
		<div>
			<form>
				<label for='toName'>From</label>
				<input type='text' id='fromId' name='From' />
				<label for='toName'>To</label>
				<input type='text' id='toId' name='To' />
				<label for='weight'>Weight</label>
				<input type='text' id='weightId' name='Weight' />
			</form>
			<button type='button' onClick={handleSubmitClick}>
				Submit
			</button>
		</div>
	);
};

export default AddCategory;
