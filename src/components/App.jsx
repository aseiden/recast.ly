class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {},
      videoList: []
    };

    this.handleVideoClick = this.handleVideoClick.bind(this);
  }

  componentDidMount() {
    this.getInitialVideos(YOUTUBE_API_KEY, 'monster trucks', 5);
  }

  handleVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  getVideos(key, query, max) {
    var that = this;

    this.props.searchYouTube({
      key: key,
      query: query,
      max: max
    }, function(videos) {
      that.setState({
        videoList: videos,
      });
    });
  }

  getInitialVideos(key, query, max) {
    var that = this;

    this.props.searchYouTube({
      key: key,
      query: query,
      max: max
    }, function(videos) {
      that.setState({
        videoList: videos,
        currentVideo: videos[0]
      });
    });
  }

  //The following code does not work because ES6 classes don't like arrow functions... ES7 does, though...
  // handleVideoClick = (video) => (
  //   this.setState({
  //     currentVideo: video;
  //   })
  // )


  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList
            handleVideoClick={this.handleVideoClick}
            videos={this.state.videoList}
          />
        </div>
      </div>
    );
  }

}


// var App = () => (

// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

      