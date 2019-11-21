import React, { ChangeEvent, Component } from "react";
import Confirm from "./Confirm";

export class Form1 extends Component<
  {},
  { name: string; surname: string; data: string[] }
> {
  constructor(props: { name: string; surname: string }) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      data: []
    };
  }

  handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value
    });
    // console.log(event.target.value);
  };

  handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      surname: event.target.value
    });
    // console.log(event.target.value);
  };

  handleButton = (event: React.FormEvent) => {
    event.preventDefault();

    if (this.state.name === "" || this.state.surname === "") {
      this.setState({ name: "", surname: "" });
    } else {
      this.setState({
        data: this.state.data.concat(this.state.name, this.state.surname)
      });
      this.setState({ name: "", surname: "" });
    }
  };

  render() {
    if (this.state.data.length === 0) {
      return (
        <div className="container__form">
          <form action="#">
            <p>Por favor, rellene todos los campos</p>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleUsernameChange}
              />
              <input
                type="text"
                placeholder="Surname"
                value={this.state.surname}
                onChange={this.handleSurnameChange}
              />
              <input type="submit" value="Send" onClick={this.handleButton} />
            </div>
          </form>
        </div>
      );
    } else {
      return <Confirm data={this.state.data} />;
    }
  }
}

export default Form1;
