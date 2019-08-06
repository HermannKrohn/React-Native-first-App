import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'

export default class LinksScreen extends React.Component{

  state = {
    showCamera: false,
    type: Camera.Constants.Type.back
  }

  componentDidMount = () => {
    Permissions.askAsync(Permissions.CAMERA).then((permission) => {
      if(permission.status == 'granted'){
        this.setState({showCamera: true})
      }
    })
  }

  render(){
    return (
      <TouchableOpacity style={{ backgroundColor: 'red', flex: 1 }} onPress={() => {
        this.setState({type: (
          this.state.type === Camera.Constants.Type.back
            ?
          Camera.Constants.Type.front
            :
          Camera.Constants.Type.back
        )})
      }}>
        {this.state.showCamera 
          ?
          <Camera style={{ flex: 1 }} type={this.state.type}></Camera>
          :
          null
        }
      </TouchableOpacity>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};
