import * as React from "react";

interface Props {
  text: string;
  handleClick?: () => void;
}

export class Button extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.handleClick}>
          {this.props.text}
        </button>
      </div>
    );
  }
}
