import React, { Component, createRef, FormEvent } from "react";

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

  submitFormHandler2 = (event: FormEvent) => {
    event.preventDefault();
    if (this.name.current) {
      console.log(this.name.current.value);
    }
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
