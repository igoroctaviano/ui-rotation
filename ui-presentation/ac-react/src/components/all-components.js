/* import React from 'react';

class FilterableProductTable extends React.Component {
	render() {
		return (
		);
	}
}

export default FilterableProductTable;

class SearchBar extends React.Component {
	render() {
		return (
		);
	}
}

class ProductTable extends React.Component {
	render() {
		return (
		);
	}
}

class ProductRow extends React.Component {
	render() {
		return (
		);
	}
} */














// STATELESS COMPONENT


import React from 'react';

function FilterableProductTable(props) {
	const products = [
		{price: '$49.99', name: 'Football'},
		{price: '$9.99', name: 'Baseball'},
		{price: '$29.99', name: 'Basketball'},
		{price: '$99.99', name: 'iPod Touch'},
		{price: '$399.99', name: 'iPhone 5'},
		{price: '$199.99', name: 'Nexus 7'}
	];

	const productRows = products.map((product, index) =>
		<ProductRow key={index}
		            name={product.name}
		            price={product.price} />
	);

	return (
		<div>
			<SearchBar />
			<ProductTable rows={productRows}/>
		</div>
	);
}

export default FilterableProductTable;

function SearchBar(props) {
	return (
		<form>
			<input type="text" placeholder="Search..."/>
		</form>
	);
}

function ProductTable(props) {
	return (
		<table>
			<thead>
			<tr>
				<th>Name</th>
				<th>Price</th>
			</tr>
			</thead>
			<tbody>
			{props.rows}
			</tbody>
		</table>
	);
}

function ProductRow(props) {
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.price}</td>
		</tr>
	);
}











// PROMISE EXAMPLE


/* import React from 'react';
import axios from 'axios';

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: []
		};
	}

	componentWillMount() {
		axios.get('http://localhost:4000/products', {port: 4000}).then((result) =>
			this.setState({
				products: result.data
			})
		);
	}

	render() {
		let rows = this.state.products.map((product, index) => <ProductRow key={index} name={product.name} price={product.price} />);

		return (
			<div>
				<SearchBar />
				<ProductTable rows={rows}/>
			</div>
		);
	}
}

export default FilterableProductTable;

class SearchBar extends React.Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="Search..."/>
			</form>
		);
	}
}

class ProductTable extends React.Component {
	render() {
		return (
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
				</thead>
				<tbody>
					{this.props.rows}
				</tbody>
			</table>
		);
	}
}

class ProductRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.price}</td>
			</tr>
		);
	}
} */



















