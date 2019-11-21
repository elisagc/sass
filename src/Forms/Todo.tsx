import React from "react";

class Todo extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: "",
      tasks: []
    };
  }

  submitFormHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (this.state.currentTask !== "") {
      this.setState({
        currentTask: "",
        tasks: [...this.state.tasks, this.state.currentTask]
      });
    }
  };

  renderTask(): JSX.Element[] {
    return this.state.tasks.map((task: string, index: number) => {
      console.log(task);
      return <div key={index}>{task}</div>;
    });
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <form onSubmit={e => this.submitFormHandler(e)}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name..."
              value={this.state.currentTask}
              onChange={e => this.setState({ currentTask: e.target.value })}
            />

            <input type="submit" />

            <div>{this.renderTask()} </div>
          </div>
        </form>
      </div>
    );
  }
}

interface IState {
  currentTask: string;
  tasks: Array<string>;
}

export default Todo;
