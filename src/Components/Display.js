import React, {Component} from 'react';

class Display extends Component {
    

    render (){
        return (
            <div>
            <div>
               {this.props.value}
            </div>
            </div>
        );
    }
}

Display.propTypes = {
    value: React.PropTypes.string,
  };

export default Display;