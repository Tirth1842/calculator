import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Button extends Component {
    handleClick = () => {
        console.log("clicked");
    }
    render (){
        return (
            <button onClick={this.handleClick}>{this.props.name}</button>
        );
    }
}

Button.propTypes = {
    name: PropTypes.string
  };
export default Button;