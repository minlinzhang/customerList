import React,{Component}  from "react";
import "./index.css";
class CustomerList extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      toDoList: []
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  };

  handleAdd = () => {
    const list = [...this.state.toDoList];
    list.push(this.state.text);
    this.setState({
      toDoList: list,
      text: ""
    });
  };
render(){
  const { toDoList } = this.state;
  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" data-testid="app-input"   value={this.state.text}
          onChange={this.handleChange} />
        <button type="submit" className="ml-30" data-testid="submit-button" onClick={this.handleAdd}>Add Customer</button>
      </section>

      <ul className="styled mt-50" data-testid="customer-list" >
      {toDoList.map((el, index) => {
            return (
              <li className="slide-up-fade-in" data-testid="list-item1" key="list-item1" >
                {el}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
  
}

export default CustomerList