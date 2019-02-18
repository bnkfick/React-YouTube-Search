import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import _ from "lodash";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";
import { VideoList, VideoListItem } from "./components/VideoList";
import styled from "styled-components";


const StyledContainer = styled(Container)`
  animation-name: moveInUp ;
  animation-duration: 1500ms;
  animation-timing-function: ease-out;
`

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
      this.searchYouTube("puppies");
  }

  searchYouTube = term => {
    API.searchVideos(term)
      .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] }))
      .catch(err => console.log(err));
  }

  selectVideo = video => {
    this.setState({
      selectedVideo:video
    });
  }

  throttledSearch = _.debounce(this.searchYouTube, 500);

  render() {
    return (
      <>
      
      <Navbar></Navbar>

      <StyledContainer>
        <Row>
          <Col>
            <SearchBar searchYouTube={this.throttledSearch}/>
          </Col>
        </Row>
        <Row>
          <Col md="9">
            <VideoDetail video={this.state.selectedVideo} />
          </Col>
          <Col md="3">
            <VideoList>
              {this.state.videos.map(video => (
                <VideoListItem 
                video={video} 
                key={video.id.videoId || video.id.playlistId}
                selectedVideo={this.state.selectedVideo}
                selectVideo={this.selectVideo} />
            
              ))}
            </VideoList>
          </Col>
        </Row>
      </StyledContainer>
      </>
    );
  }
}

export default App;