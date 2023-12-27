import React from 'react';
import Itemtask from './Itemtask';
import tododata from './todojson';
import './todomain.css';

class Todomain extends React.Component {
  constructor() {
    super();
    this.state = {
      tododatajson: tododata
    };
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.tododatajson.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });

      return {
        tododatajson: updatedTodos
      };
    });
  }

  render() {

 

    const todoItemslist = this.state.tododatajson.map(item => (
      <Itemtask key={item.id} value={item} handlechange={this.handlechange} />
    ));

    return <div className='todomain-header'>{todoItemslist}</div>;
  }
}

export default Todomain;
