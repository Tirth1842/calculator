import React, {Component} from 'react';

class Button extends Component {
    
    render (){
        return (
            <button>{this.props.name}</button>
        );
    }
}

Button.propTypes = {
    name: React.PropTypes.string,
  };
export default Button;