import React from "react";
import "../App.css";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "status") {
      value = e.target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    //Close form && Clear
    this.onClearForm();
    this.onCloseForm();
  };
  onClearForm = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  componentDidMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
      });
    }
    // console.log("123");
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps && nextProps.task) {
  //     this.setState({
  //       id: nextProps.task.id,
  //       name: nextProps.task.name,
  //       status: nextProps.task.status,
  //     });
  //   } else if (!nextProps.task) {
  //     this.setState({
  //       id: "",
  //       name: "",
  //       status: false,
  //     });
  //   }
  // console.log(nextProps);
  // }
  static getDerivedStateFromProps(props, state) {
    // console.log("props", props);
    // console.log("state", state);
    if (props.task) {
      if (props.task.id !== state.id) {
        return {
          id: props.task.id,
          name: props.task.name,
          status: props.task.status,
        };
      }
    } else {
      if (state.id) {
        return {
          id: "",
          name: "",
          status: true,
        };
      }
    }
    return null;
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading text-icon">
          <h3 className="panel-title">
            {this.state.id ? "Cap nhat cong viec" : "Them cong viec"}
          </h3>
          <i
            className="fas fa-times-circle text-right "
            onClick={this.onCloseForm}
          ></i>
        </div>
        <div className="panel-body">
          <form action="" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Ten :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trang thai :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Kich hoat</option>
              <option value={false}>An</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Them
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClearForm}
              >
                Huy bo
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default TaskForm;
