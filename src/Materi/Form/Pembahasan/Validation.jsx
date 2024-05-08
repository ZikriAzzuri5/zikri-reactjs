import React from "react";
import * as Validator from 'validatorjs'; // Import Validator directly as default export

const Input = ({label, type, name, onChange}) => {
  return(
    <div>
      <label>{label} :</label>
      <br />
      <input type={type} name={name} onChange={e=> onChange(e.target.value)}/>
      <br />
    </div>
  )
}

const ShowErrors = ({errors}) => {
  return(
    <ul style={{color: 'red', marginLeft: '-20px'}}>
      {errors.map((err, i) => <li key={i}>{err}</li>)}
    </ul>
  )
}

export default class Validation extends React.Component {
  state = {
    email: '',
    password: '',
    errors: []
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {email, password} = this.state;
    let data = { email, password }

    let rules = {
      email: 'required|email',
      password: 'min:8|required',
    }

    let validation = new Validator(data, rules);
    validation.passes();
    console.log(validation.errors.all());


    // let message = []

    // if (email.length === 0) {
    //   message = [...message, 'email tidak boleh kosong']
    // }else if (password.length === 0) {
    //   message = [...message, 'password tidak boleh kosong']
    // }

    // if (message.length > 0) {
    //   this.setState({
    //     errors: message
    //   })
    // }

  }

  render() {
    const style ={
      width: '400px',
      margin: '100px auto 0',
      border: '1px solid black',
      padding: '10px'
    }
    return(
      <div style={style}>
        {this.state.errors && <ShowErrors errors={this.state.errors}/>}

        <h4>Login page</h4>
          <form onSubmit={this.handleSubmit}>
            <Input type="email" name="email" label="email" onChange={value => this.setState({email: value})}/>
            <Input type="password" name="password" label="password" onChange={value => this.setState({password: value})} />
            <br />
            <button>Login</button>
          </form>
      </div>
    )
  }
}
