import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // tasks: [], //id, name, status
      // isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyWord: "",
      sort: {
        by: "",
        value: 1,
      },
    };
  }
  onGeneraData = () => {
    var tasks = [
      {
        id: this.generateId(),
        name: "Hoc lap trinh",
        status: true,
      },
      {
        id: this.generateId(),
        name: "Hoc toan",
        status: false,
      },
    ];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  // Duoc goi duy nhat 1 lan khi component duoc gan vao
  // componentDidMount() {
  //   if (localStorage && localStorage.getItem("tasks")) {
  //     var task = JSON.parse(localStorage.getItem("tasks"));
  //     this.setState({
  //       tasks: task,
  //     });
  //   }
  // }

  onToggleForm = () => {
    // if (this.state.isDisplayForm && this.state.taskEditing !== null) {
    //   this.setState({
    //     isDisplayForm: true,
    //     taskEditing: null,
    //   });
    // } else {
    //   this.setState({
    //     isDisplayForm: !this.state.isDisplayForm,
    //     taskEditing: null,
    //   });
    this.props.onToggleForm();
  };

  // onCloseForm = () => {
  //   // this.setState({
  //   //   isDisplayForm: false,
  //   // });
  //   this.props.onCloseForm();
  // };
  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };
  // onSubmit = (data) => {
  //   var tasks = this.state.tasks;
  //   //THEM
  //   if (data.id === "") {
  //     data.id = this.generateId();
  //     tasks.push(data);
  //   }
  //   //SUA
  //   else {
  //     var index = this.findIndex(data.id);
  //     tasks[index] = data;
  //   }
  //   this.setState({
  //     tasks: tasks,
  //     taskEditing: null,
  //   });
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };
  //Chuc nang cap nhat status
  // onUpdateStatus = (id) => {
  //   // console.log(id)
  //   var tasks = this.state.tasks;
  //   var index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks[index].status = !tasks[index].status;
  //     this.setState({
  //       tasks: tasks,
  //     });
  //   }
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  //Chuc nang xoa
  // onDelete = (id) => {
  //   var tasks = this.state.tasks;
  //   var index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks.splice(index, 1);
  //     this.setState({
  //       tasks: tasks,
  //     });
  //     localStorage.setItem("tasks", JSON.stringify(tasks));
  //   }
  //   this.onCloseForm();
  // };
  //Chuc nang sua
  // onUpdate = (id) => {
  //   var tasks = this.state.tasks;
  //   // var taskEditing= this.state.taskEditing;
  //   var index = this.findIndex(id);
  //   // var taskEditing = tasks[index];
  //   if (index !== -1) {
  //     this.setState({
  //       taskEditing: tasks[index],
  //     });
  //     // console.log(taskEditing);
  //   }
  //   // console.log(id);
  //   this.onShowForm();
  // };
  //Chuc nang loc du lieu
  onFilter = (filterName, filterStatus) => {
    filterStatus = 1.0 * filterStatus;
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
    // console.log(this.state.filter)
  };
  onSearch = (keyword) => {
    // console.log(keyword)
    this.setState({
      keyWord: keyword.toLowerCase(),
    });
  };
  onSort = (sort) => {
    this.setState({
      sort: sort,
    });
  };
  render() {
    //Chuc nang loc du lieu
    // var filter = this.state.filter;
    // var tasks = this.state.tasks;
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    //   tasks = tasks.filter((task) => {
    //     if (filter.status === -1) {
    //       return task;
    //     } else {
    //       return task.status === (filter.status === 1 ? true : false);
    //     }
    //   });
    // }
    // // Chuc nang tim kiem
    // var keyWord = this.state.keyWord;
    // if (keyWord) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyWord) !== -1;
    //   });
    // }
    // //Chuc nang sort
    // var sort = this.state.sort;
    // if (sort) {
    //   if (sort.By === "name") {
    //     tasks = tasks.sort((a, b) => {
    //       if (a.name > b.name) return sort.value;
    //       else if (a.name < b.name)
    //         return -sort.value;
    //       else return 0;
    //     });
    //   } else {
    //     tasks = tasks.sort((a, b) => {
    //       if (a.status > b.status) return -sort.value;
    //       else if (a.status < b.status) return sort.value;
    //       else return 0;
    //     });
    //   }
    // }
    var isDisplayForm = this.props.isDisplayForm;
    // var elmTaskForm = isDisplayForm ? (
    //   <TaskForm
    //     // onCloseForm={this.onCloseForm}
    //     // onSubmit={this.onSubmit}
    //     task={this.state.taskEditing}
    //   />
    // ) : (
    //   ""
    // );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quan Ly Cong Viec</h1>
        </div>
        <hr />
        <div className="row">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {/* TaskForm - 4cot */}
            <TaskForm
              // onCloseForm={this.onCloseForm}
              // onSubmit={this.onSubmit}
              task={this.state.taskEditing}
            />
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <i className="fas fa-plus mr-5"></i>Them cong viec
            </button>
            <button
              type="button"
              className="btn btn-danger ml-5"
              onClick={this.onGeneraData}
            >
              Generate Data
            </button>
            <Control onSearch={this.onSearch} onSort={this.onSort} />
            <TaskList
              // tasks={
              //   filter.name
              //     ? tasks
              //     : keyWord
              //     ? tasks
              //     : sort
              //     ? tasks
              //     : this.state.tasks
              // }
              // onUpdateStatus={this.onUpdateStatus}
              // onDelete={this.onDelete}
              // onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
