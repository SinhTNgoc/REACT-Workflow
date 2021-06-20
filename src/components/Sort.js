import React from 'react';
import "../App.css";

class Sort extends React.Component {

    render() {
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
                  <li>
                    <a href="#aa" role="button">
                      Ten A-Z
                      {/* <i class="fas fa-check"></i> */}
                    </a>
                  </li>
                  <li>
                    <a href="#aaa"role="button">
                      {/* <i className="fas fa-sort-alpha-asc pr-5"></i> */}
                      Ten Z-A
                    </a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="#aa" role="button">Trang thai kich hoat</a>
                  </li>
                  <li>
                    <a href="#aa" role="button">Trang thai an</a>
                  </li>
                </ul>
              </div>
            </div>
        )
    }
}
export default Sort;