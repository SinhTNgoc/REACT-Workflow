import React from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskItem extends React.Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatusTask(this.props.task.id);
  };
  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.closeForm();
  };
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  render() {
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.task.name}</td>
        <td className="text-center">
          <span
            className={
              this.props.task.status
                ? "label label-success"
                : "label label-danger"
            }
            onClick={this.onUpdateStatus}
          >
            {this.props.task.status ? "Kich hoat" : "An"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onUpdate}
          >
            <i className="fas fa-pencil-alt mr-5"></i>Sua
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDeleteTask}
          >
            <i className="fas fa-trash mr-5"></i>Xoa
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks, //cach '2'
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatusTask: (id) => {
      dispatch(actions.updateStatusTask(id));
    },
    onDeleteTask: (id) => {
      dispatch(actions.onDeleteTask(id));
    },
    closeForm: () => {
      dispatch(actions.closeForm());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
