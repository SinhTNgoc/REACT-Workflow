import React from "react";
// import "../App.css";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  //Lay du lieu nhap tu form
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
    // this.props.onSubmit(this.state);
    //Close form && Clear
    this.props.onSaveTask(this.state);
    this.onClearForm();
    this.onCloseForm();
  };
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onClearForm = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  componentDidMount() {
    // console.log(this.props.editTask);
    if (this.props.editTask) {
      this.setState({
        id: this.props.editTask.id,
        name: this.props.editTask.name,
        status: this.props.editTask.status,
      });
    }
    // console.log("123");
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editTask) {
      this.setState({
        id: nextProps.editTask.id,
        name: nextProps.editTask.name,
        status: nextProps.editTask.status,
      });
    } else if (!nextProps.editTask) {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  // console.log(nextProps);
  }
  // static getDerivedStateFromProps(props, state) {
  //   // console.log("props", props);
  //   // console.log("state", state);
  //   if (props.editTask) {
  //     if (props.editTask.id !== state.id) {
  //       return {
  //         id: props.editTask.id,
  //         name: props.editTask.name,
  //         status: props.editTask.status,
  //       };
  //     }
  //   } else {
  //     if (state.id) {
  //       return {
  //         id: "",
  //         name: "",
  //         status: true,
  //       };
  //     }
  //   }
  //   return null;
  // }
  render() {
    if (this.props.isDisplayForm === false) {
      return "";
    } else {
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
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    editTask: state.editTask,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
