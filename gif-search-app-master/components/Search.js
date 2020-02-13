class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchingText: ""
    };
  }

  handleChange = (event) => {
    var searchingText = event.target.value
    this.setState({
      searchingText: searchingText
    })

    if (searchingText.length > 2) {
      this.props.onSearch(searchingText)
    }
  }

  handleKeyUp = event => {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText)
    }
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Wpisz coś"
        value={this.state.searchingText}
      />
    )
  }
}
