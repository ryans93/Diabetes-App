import React, {Component} from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch';
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css" 

class HyperToggle extends Component {

    state = {
      switched: this.props.switched
    };
 
  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.switched !== this.state.switched) {
    this.props.getSwitched(this.state);
    }
  }
 
  render() {
    return (
        <div>
            <Switch onClick={this.toggleSwitch} on={this.state.switched}/>
        </div>
    );
  }
}
 
export default HyperToggle;