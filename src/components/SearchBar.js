import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.onFormSubmit(this.state.term)

    // TODO: make sure we call callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment" style={{ marginTop: '20px' }}>
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              id="search"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
