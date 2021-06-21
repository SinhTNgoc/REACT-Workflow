import React from 'react';
// import "../App.css";

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        by: 'name',
        value: 1
      }
    }
  }
  onClick= async(sortBy,sortValue) => {
    await this.setState({
      sort: {
        by: sortBy,
        value: sortValue
      }
    });
   this.props.onSort(this.state.sort)

  }
    render() {
      var sort = this.state.sort;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            {/* DROP DOWN IN BOOTRAP */}
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Sap xep<i className="fas fa-caret-square-down ml-5"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li onClick={()=>this.onClick('name',1)} >
                    <a href="#aa" role="button" className="text-iconn">
                    
                    <i className="fas fa-sort-alpha-up"></i>
                      Ten A-Z
                      <i className={(sort.by==='name'&&sort.value===1)?'fas fa-check ml-15':''}></i>
                    </a>
                  </li>
                  <li onClick={()=>this.onClick('name',-1)}>
                    <a href="#aaa"role="button" className="text-iconn">
                    <i className="fas fa-sort-alpha-down"></i>
                      Ten Z-A
                      <i className={(sort.by==='name'&&sort.value===-1)?'fas fa-check ml-15':''}></i>
                    </a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li onClick={()=>this.onClick('status', 1)} className="text-iconn">
                    <a href="#aa" role="button">Trang thai kich hoat</a>
                    <i className={(sort.by==='status'&&sort.value===1)?'fas fa-check ':''}></i>
                  </li>
                  <li onClick={()=>this.onClick('status',-1)} className="text-iconn">
                    <a href="#aa" role="button">Trang thai an</a>
                    <i className={(sort.by==='status'&&sort.value===-1)?'fas fa-check':''}></i>
                  </li>
                </ul>
              </div>
            </div>
        )
    }
}
export default Sort;