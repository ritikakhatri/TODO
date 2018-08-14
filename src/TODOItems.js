import React,{Component} from "react";

class TODOItems extends Component {
	constructor(props) {
		super(props);
		this.createTask = this.createTask.bind(this);
	}
	delete(key) {
		this.props.delete(key);
	}
	createTask(item) {
		return <li key={item.key} onClick={()=>this.delete(item.key)}>{item.text}</li>
	}
	render() {
		var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask);		
		return(
			<ul className="">
				{listItems}
			</ul>
		);
	}
}

export default TODOItems;