import React from "react";
//class component
class AddContact extends React.Component {
    //state in class component
    state={
        name:"",
        email:"",
    };
//adding to console
add = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    if (!name || !email) {
      alert('All the fields are mandatory!');
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: '', email: '' });
  };
  

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form "onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={this.state.name}
onChange={(e)=>this.setState({name:e.target.value})}></input>
          </div>

          <div className="field">
            <label>Email</label>
            <input 
            type="text" 
            name="email" 
            placeholder="Email"
            value={this.state.email}
            onChange={(e)=>this.setState({email:e.target.value})}></input>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;