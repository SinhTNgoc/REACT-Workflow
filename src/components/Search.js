import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    }
  }
  onChange = (e) => {
    var target = e.target
    var name = target.name;
    var value = target.value
    this.setState({
      [name]: value
    })
   
  }
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhap tu khoa..."
                  name='keyword'
                  value={this.state.keyword}
                  onChange={this.onChange}
                />
                <span className="input-group-btn">
                  <button 
                  className="btn btn-primary" 
                  type="button"
                  onClick={this.onSearch}
                  >
                    <i className="fas fa-search mr-5"></i>Tim
                  </button>
                </span>
              </div>
            </div>
        )
    }
}
export default Search;