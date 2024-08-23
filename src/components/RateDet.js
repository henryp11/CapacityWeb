import React from "react";

class RateDet extends React.Component {
  render() {
    if (this.props.OpenDet === false) {
      return null;
    }

    return (
      <>
        <span className="modalInfo">
          <p>{this.props.detRate}</p>
          {this.props.observac.length > 0 && (
            <p>
              <strong id="asterics">*</strong>
              {this.props.observac}
            </p>
          )}
        </span>
      </>
    );
  }
}

export default RateDet;
