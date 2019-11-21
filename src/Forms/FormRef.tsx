import React, { Component, createRef } from "react";

export default class UncontrolledForm extends Component {
  name: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);

    this.name = createRef();
  }

  submitFormHandler = (event: any) => {
    event.preventDefault();
    //@ts-ignore
    console.log(this.name.current.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFormHandler}>
          <div>
            <input ref={this.name} />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
