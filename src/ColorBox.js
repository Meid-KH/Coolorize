import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles";
import { withStyles } from "@material-ui/core/styles";
import CopyToClipbaord from "react-copy-to-clipboard";
import { Spring } from "react-spring/renderprops";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }
  handleCopy = () => {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  };
  render() {
    const {
      name,
      background,
      paletteId,
      colorId,
      showMoreLink,
      classes,
      index
    } = this.props;
    const { copied } = this.state;

    return (
      <Spring
        delay={`${index}00`}
        from={{
          opacity: 0,
          transform: "scale(0.8)",
          transformOrigin: "center"
        }}
        to={{ opacity: 1, transform: "scale(1)" }}
      >
        {({ opacity }) => (
          <CopyToClipbaord text={background} onCopy={this.handleCopy}>
            <div
              style={{ background, opacity }}
              className={`${classes.colorBox} ${copied && classes.show}`}
            >
              <div
                className={`${classes.copyOverlay} copy_overlay`}
                style={{ background }}
              />
              <div className={`${classes.copyMsg} copy_msg`}>
                <h1>Copied</h1>
                <p>{background}</p>
              </div>
              <span className="colorbox_name">{name}</span>
              <span className="colorbox_copy"> Copy </span>
              {showMoreLink && (
                <Link
                  exact="true"
                  to={`/palette/${paletteId}/${colorId}`}
                  onClick={e => e.stopPropagation()}
                >
                  <span className="colorbox_more"> More </span>
                </Link>
              )}
            </div>
          </CopyToClipbaord>
        )}
      </Spring>
    );
  }
}

export default withStyles(styles)(ColorBox);
