import React from 'react';

class Search extends React.Component {

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhap tu khoa..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search mr-5"></i>Tim
                  </button>
                </span>
              </div>
            </div>
        )
    }
}
export default Search;