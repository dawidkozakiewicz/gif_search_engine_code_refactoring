var GIPHY_LOADING_URL = "assets/tomato.gif";

class Gif extends React.Component {
  constructor(props) {
    super(props);
  }

  getUrl = () => {
    return this.props.sourceUrl;
  };

  render() {
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
    return (
      <div>
        <a href={this.getUrl()} title={this.getUrl()} target="new">
          <img id="gif" src={url} />
        </a>
      </div>
    );
  }
}
