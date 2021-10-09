import * as React from "react";
import Filter from "../components/Filter";
import Form from "../components/Form";
import Square from "../components/Square";
import { Colors } from "../data/dataContainer";

const Home: React.FC = () => {
  const [hexacode, setHexacode] = React.useState<any>("");
  const [r, setR] = React.useState<any>(false);
  const [g, setG] = React.useState<any>(false);
  const [b, setB] = React.useState<any>(false);
  const [error, setError] = React.useState<any>(false);
  const extractedColor: any[] = [];

  const colorOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setHexacode(newValue.toUpperCase());
    Validate(newValue);
  };

  //validation
  const Validate = (text: string) => {
    if (text.charAt(0) === "") {
      setError(false);
    } else if (text.charAt(0) !== "#") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const rChange = () => {
    setR(() => !r);
  };

  const gChange = () => {
    setG(() => !g);
  };

  const bChange = () => {
    setB(() => !b);
  };

  const addColor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("hexacode", JSON.stringify(hexacode));
    Colors.push(hexacode);
    setHexacode("");
    HextoRgb(Colors);
  };
  // hex to rbg function
  const HextoRgb = (arr: any) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      extractedColor.push([
        ((((("0x" as any) + arr[i][1]) as any) + arr[i][2]) as any) | 0,
        ((((("0x" as any) + arr[i][3]) as any) + arr[i][4]) as any) | 0,
        ((((("0x" as any) + arr[i][5]) as any) + arr[i][6]) as any) | 0,
      ]);
    }
    return extractedColor;
  };
  HextoRgb(Colors);
  return (
    <>
      <div className="container">
        <h1 className="page-title"> Color Gallery</h1>
        <Form
          submitColor={addColor}
          colorOnChange={colorOnChange}
          hexacode={hexacode}
          error={error}
        />
        <Filter
          r={r}
          g={g}
          b={b}
          rChange={rChange}
          gChange={gChange}
          bChange={bChange}
        />
        <div className="card-wrapper">
          {extractedColor.map((el, index) => {
            // control flow
            // all checked
            return r && g && b ? (
              el[0] > 127 && (
                  <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
                ) &&
                el[1] > 127 && (
                  <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
                ) &&
                el[2] > 127 && (
                  <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
                )
            ) : // r & g checked
            r && g ? (
              el[0] > 127 && (
                <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
              ) &&
              el[1] > 127 && (
                <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
              )
            ) : // g & b checked
            g && b ? (
              el[1] > 127 && (
                <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
              ) &&
              el[2] > 127 && (
                <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
              )
            ) : // r & b checked
            r && b ? (
              el[0] > 127 && (
                <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
              ) &&
              el[2] > 127 && (
                <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
              )
            ) : // r checked
            r ? (
              el[0] > 127 && (
                <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
              )
            ) : // g checked
            g ? (
              el[1] > 127 && (
                <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
              )
            ) : // b checked
            b ? (
              el[2] > 127 && (
                <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
              )
            ) : (
              <Square key={index} r={el[0]} g={el[1]} b={el[2]} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
