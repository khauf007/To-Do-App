import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Addbutton extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.props.onClick}>Add</button>
            </div>
        );
    }
}
class Delbutton extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.props.onClick}>Delete</button>
            </div>
        );
    }
}
class Textbox extends React.Component{
    render(){
        return (
            <input type="text" value = {this.props.value} onChange={this.props.onChange} placeholder="Enter item here"></input>
        );
    }
}
class Display extends React.Component{
    render(){
        return (
            <ul>
            {this.props.array.map(function(name){
                    return <li>{name}</li>;
                  })}
            </ul>
        );
    }
}
class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            items: [],
        }
        this.onClickAdd = this.onClickAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClickDel = this.onClickDel.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    onClickAdd(event) {
        event.preventDefault();
        const val = this.state.value;
        const items = this.state.items.slice();
        items.push(val);
        this.setState({items: items});
        this.setState({value: ''});
    }
    onClickDel(event) {
        event.preventDefault();
        const items = this.state.items.slice();
        items.pop();
        this.setState({items: items});
        this.setState({value: ''});
    }
    
    render(){
        return [
             <Textbox value={this.state.value} onChange={this.handleChange}/>,
             <Addbutton onClick={this.onClickAdd} />,
             <Delbutton onClick={this.onClickDel}/>,
             <Display array={this.state.items}/>,
        ];
    }
}
// ============================
ReactDOM.render(
    <ToDoApp />,
    document.getElementById('root')
  );
  