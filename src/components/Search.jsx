var Search = (props) => {
  
  var handleSearch = () => {
    var videoName = document.getElementsByClassName('form-control')[0].value;
    // console.log('videoName', videoName);
    props.handleVideoSearch(videoName);
  };

  return (
    <div className="search-bar form-inline">
      <input 
        className="form-control" 
        type="text"
        onChange={() => handleSearch()}
         />
      <button 
        className="btn hidden-sm-down"
        onClick={() => handleSearch()}
      >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  ); 
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
