import { Component } from "react";
import PropTypes from "prop-types";
import React from "react";
import { Magnifier } from "./Magnifier";

class Lightbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: props.files,
      index: props.index,
    };
    this.componentRef = React.createRef();
  }

  componentDidMount() {
    this.componentRef.current.focus();
  }

  handleKeyDown = (e) => {
    const ESC = 27;
    const LEFT_ARROW = 37;
    const RIGHT_ARROW = 39;

    if (e.keyCode === RIGHT_ARROW) {
      this.nextImage();
    } else if (e.keyCode === LEFT_ARROW) {
      this.previousImage();
    } else if (e.keyCode === ESC) {
      this.props.setIsOpen(false);
    }
  };

  nextImage = () => {
    let newIndex;

    if (this.state.index + 1 > this.state.files.length - 1) {
      newIndex = 0;
    } else {
      newIndex = this.state.index + 1;
    }

    this.setState({
      index: newIndex,
    });
  };

  previousImage = () => {
    let newIndex;

    if (this.state.index - 1 < 0) {
      newIndex = this.state.files.length - 1;
    } else {
      newIndex = this.state.index - 1;
    }
    this.setState({
      index: newIndex,
    });
  };

  render() {
    return (
      <div
        className="lightbox"
        onKeyDown={this.handleKeyDown}
        tabIndex={0}
        ref={this.componentRef}
      >
        <span className="lightbox__images-count">
          {this.state.index + 1}/{this.state.files.length}
        </span>
        <button
          className="lightbox__arrow lightbox__arrow--left"
          onClick={this.previousImage}
        >
          <i className="fa fa-3x fa-angle-left"></i>
        </button>
        <Magnifier image={this.state.files[this.state.index].image_raw} />
        <button
          className="lightbox__arrow  lightbox__arrow--right"
          onClick={this.nextImage}
        >
          <i className="fa fa-3x fa-angle-right"></i>
        </button>
        <button
          onClick={() => this.props.setIsOpen(false)}
          className="lightbox__close fa fa-close"
        ></button>
        <p className="lightbox__filename">
          <strong>{this.state.files[this.state.index].filename}</strong>
        </p>
      </div>
    );
  }
}

Lightbox.propTypes = {
  files: PropTypes.array.isRequired,
  fileIndexInBox: PropTypes.number.isRequired,
  setIsOpen: PropTypes.func,
};

export default Lightbox;
