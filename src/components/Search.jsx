var Search = (props) => {
  
  var handleSearch = () => {
    var videoName = document.getElementsByClassName('form-control')[0].value;
    props.handleVideoSearch(videoName);
  };

  //live search is cooler
  var waitToSearch = _.debounce(handleSearch, 500);

  return (
    <div className="search-bar form-inline">
      <input 
        className="form-control" 
        type="text"
        onChange={() => waitToSearch()}
         />
      <button 
        className="btn hidden-sm-down"
        onClick={() => waitToSearch()}
      >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  ); 
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
