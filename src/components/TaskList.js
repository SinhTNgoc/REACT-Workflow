import React from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1, //all:-1, active:1 ,deactive: 0
    };
  }
  onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState(
      {
        [name]: value,
      }
      // ,() => {
      //   console.log(this.state)
      // }
    );
  };
  render() {
  //  var tasks = this.props.tasks;
    var elmTasks = this.props.tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onUpdateStatus={this.props.onUpdateStatus}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
        />
      );
    });
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Ten</th>
                <th className="text-center">Trang thai</th>
                <th className="text-center">Hanh dong</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="filterName"
                    value={this.state.filterName}
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <select
                    className="form-control"
                    name="filterStatus"
                    value={this.state.filterStatus}
                    onChange={this.onChange}
                  >
                    <option value="-1">Tat ca</option>
                    <option value="0">An</option>
                    <option value="1">Kich hoat</option>
                  </select>
                </td>
              </tr>
              {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
};
export default connect(mapStateToProps,null)(TaskList);
