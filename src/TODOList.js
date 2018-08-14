import React, {Component} from "react";
import TODOItems from "./TODOItems.js";
class TODOList extends Component {
	constructor(props) {
		super(props);
		this.state = {items : []}
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(event) {
		if(this._inputElement.value !== "") {
			var newItem = {
				key: Date.now(),
				text: this._inputElement.value
			};

			this.setState((prevState)=> {
				return {
					items: prevState.items.concat(newItem)
				};
			});
			this._inputElement.value = "";
		}

		console.log(this.state.items);
		event.preventDefault();
	}
	deleteItem(key) {
		var filteredItem = this.state.items.filter(function(item) {
			return (item.key != key)
		});

		this.setState({
			items: filteredItem
		});
	}
	render() {
		return(
			<div>
				<form onSubmit={this.addItem}>
					<input type="text" placeholder="here" ref={(a)=> this._inputElement = a}/>
					<button type="submit">Add</button>
					<TODOItems entries={this.state.items} 
					delete={this.deleteItem} />
				</form>
			</div>
		);
	}
}

export default TODOList;