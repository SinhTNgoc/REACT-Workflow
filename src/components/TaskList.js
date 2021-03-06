import React from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

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
    var value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    var filter = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus,
    };
    this.props.onFilterTable(filter);
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
    var tasks = this.props.tasks;
    var filterTable = this.props.filterTable;
    var keyword = this.props.keyword;
    var sort = this.props.sort;
    //filter table
    var filterTasks = [];
    var elmTasks = [];
    if (filterTable.name) {
      filterTasks = tasks.filter((task) => {
        return (
          task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
        );
      });
    }
    filterTasks = filterTasks.filter((task) => {
      if (filterTable.status === -1) {
        return task;
      } else if (filterTable.status === 1) {
        return task.status === true;
      } else return task.status === false;
    });
    if (filterTable.name) {
      elmTasks = filterTasks.map((task, index) => {
        return <TaskItem key={task.id} index={index} task={task} />;
      });
    } else {
      elmTasks = this.props.tasks.map((task, index) => {
        return <TaskItem key={task.id} index={index} task={task} />;
      });
    }

    // // Chuc nang tim kiem
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
      elmTasks = tasks.map((task, index) => {
        return <TaskItem key={task.id} index={index} task={task} />;
      });
    }

    //Chuc nang sort
    if (sort.by) {
      if (sort.by === "name") {
        tasks = tasks.sort((a, b) => {
          if (a.name > b.name) return sort.value;
          else if (a.name < b.name) return -sort.value;
          else return 0;
        });
      } else {
        tasks = tasks.sort((a, b) => {
          if (a.status > b.status) return -sort.value;
          else if (a.status < b.status) return sort.value;
          else return 0;
        });
      }

      elmTasks = tasks.map((task, index) => {
        return <TaskItem key={task.id} index={index} task={task} />;
      });
    }

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
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(actions.filterTask(filter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
