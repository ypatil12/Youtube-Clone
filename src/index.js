import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB2eMVjf5esfzNgPS57cd4RJJt6c2DIgk8'


// add component to DOM
// Fat arrow is the equivalent to function
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { videos: [], selectedVideo: null};

    this.videoSearch('johnny');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    return (
      <div>
        <SearchBar searchTerm = {term => this.videoSearch(term)}/>
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos} />
      </div>
    );
  }
}
// Need to make an instance of the component
ReactDOM.render(<App />, document.querySelector('.container'));
