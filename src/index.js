import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

//Components
import Search from './components/Search'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetails'

const API_KEY = 'AIzaSyB9NFY0xonmEdueVjxa9i5_Q4L9Jn5V8_o';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('nails')
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
      <div>
        <Search onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));