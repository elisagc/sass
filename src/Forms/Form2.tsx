import React from "react";

class Form2 extends React.Component {
  state = {
    currentTask: "",
    tasks: [],
    lenght: 0
  };

  submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (this.state.currentTask !== "") {
      this.setState({
        currentTask: "",
        tasks: [...this.state.tasks, this.state.currentTask],
        lenght: 1
      });
    }
  };

  render() {
    console.log(this.state.tasks);

    if (this.state.lenght === 0) {
      return (
        <div className="container__form">
          <div className="container__form-box">
            <form onSubmit={e => this.submitFormHandler(e)}>
              <div>
                <input
                  type="text"
                  className="h"
                  name="name"
                  placeholder="Name..."
                  value={this.state.currentTask}
                  onChange={e => this.setState({ currentTask: e.target.value })}
                />
                <input type="text" name="surname" placeholder="Surname.." />
                <input
                  type="text"
                  name="phone"
                  value={this.state.currentTask}
                  placeholder="Your telephone number.."
                  onChange={e => this.setState({ currentTask: e.target.value })}
                />

                <div className="date">
                  <span>Entry:</span>
                  <input type="date" />
                  <span>Departure:</span>
                  <input type="date" />
                </div>

                <select name="room">
                  <option value="">Select room:</option>
                  <option value="room1">Room1</option>
                  <option value="room2">Room2</option>
                  <option value="room3">Room3</option>
                </select>
                <select name="room">
                  <option value="">Number of persons:</option>
                  <option value="room1">1</option>
                  <option value="room2">2</option>
                  <option value="room3">3</option>
                </select>

                <label>More details:</label>
                <textarea name="text"></textarea>
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Reserva confirmada</h1>
          <button>Ver mi reserva</button>
        </div>
      );
    }
  }
}

export default Form2;
