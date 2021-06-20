import React from "react";

class TaskItem extends React.Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  }
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  }
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
          onClick={this.onDelete}
          >
            <i className="fas fa-trash mr-5"></i>Xoa
          </button>
        </td>
      </tr>
    );
  }
}
export default TaskItem;
