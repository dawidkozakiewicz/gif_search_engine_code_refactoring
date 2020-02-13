class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      searchingText: "",
      gif: {}
    };
  }

  handleSearch = searchingText => {
    this.setState({
      loading: true
    });

    this.getGif(searchingText, gif => {
      this.setState({
        loading: false,
        gif: gif,
        searchingText: searchingText
      });
    });
  };

  getGif = (searchingText, callback) => {
    var GIPHY_PUB_KEY = "Tj0Zkn8M11H60GBwCg70bAUZ0IDvheBi";
    var GIPHY_API_URL = "https://api.giphy.com";
    var url =
      GIPHY_API_URL +
      "/v1/gifs/random?api_key=" +
      GIPHY_PUB_KEY +
      "&tag=" +
      searchingText;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText).data;
        console.log(data)
        var gif = {
          // url: data.fixed_width_downsampled_url,
          url: data.images.downsized_large.url,
          sourceUrl: data.url
        };
        callback(gif);
      }
    };
  };

  render() {
    return (
      <div>
        <h1>Wyszukiwarka GIFów!</h1>
        <p>
          Znajdź GIFy na:
          <a href="http://giphy.com">giphy.com</a>
          <br />
          Wciśnij enter aby załadować więcej.
        </p>
        <Search onSearch={this.handleSearch} />
        <Gif
          loading={this.state.loading}
          url={this.state.gif.url}
          sourceUrl={this.state.gif.sourceUrl}
        />
      </div>
    );
  }
}
