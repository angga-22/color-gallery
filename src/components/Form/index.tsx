import * as React from "react";
import { Button } from "../Button";

interface Props {
  submitColor(event: React.FormEvent<HTMLFormElement>): void;
  hexacode: string;
  colorOnChange(e: React.FormEvent<HTMLInputElement>): void;
  error: boolean;
}

const Form: React.FC<Props> = ({
  submitColor,
  hexacode,
  colorOnChange,
  error,
}) => {
  return (
    <div className="form-container">
      <h4 className="heading">Add new Color:</h4>
      <form className="form-wrapper" onSubmit={submitColor}>
        <input
          className="form-input"
          type="text"
          value={hexacode}
          onChange={colorOnChange}
          placeholder="Please input Hex Code"
        />
        <span className="error-message">
          {error === true ? <p>Please input hashtag first</p> : null}
        </span>
        <Button text="Submit" />
      </form>
    </div>
  );
};

export default Form;
