import React from 'react'
import './App.css';
import Search from './Search'
import Api from './Api'
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'
import Video from './Video'
class App extends React.Component {

  state = {
    videoMetaInfo:[],
    selectVideoId:null
  }

  onSearch = async keyword => {
    const response = await Api.get("/search",{
      params:{
        q:keyword
      }
    })

    this.setState({
      videoMetaInfo:response.data.items,
      selectedVideoId:response.data.items[0].id.videoId
    })
  }


  onVideoSelected = videoId =>{
    this.setState({
      selectedVideoId:videoId
    })
  }
  render()
  {
    return (
    <div>
    <h1 style={{marginLeft:30}}>Youtube</h1>
    <Search onSearch={this.onSearch} />
    <VideoList onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo} />
    <VideoPlayer videoId={this.state.selectedVideoId} />
    </div>
      );
  }
}

export default App;
