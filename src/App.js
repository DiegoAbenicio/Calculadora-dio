import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row, Title, Column, Background } from "./style";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("0");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleEClear = () => {
    setCurrentNumber("0");
    setOperation("");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation("");
    }
  };

  const handleMultNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation("");
    }
  };

  const handleDivNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultNumber();
          break;
        case "/":
          handleDivNumber();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Background>
      <Container>
        <Column>
          <Title>Calculator</Title>
          <Content>
            <Input value={currentNumber} />
            <Row>
              <Button label="e" onClick={() => handleEClear()} />
              <Button label="C" onClick={() => handleOnClear()} />
              <Button label="/" onClick={handleDivNumber} />
              <Button label="*" onClick={handleMultNumber} />
            </Row>
            <Row>
              <Button label="7" onClick={() => handleAddNumber("7")} />
              <Button label="8" onClick={() => handleAddNumber("8")} />
              <Button label="9" onClick={() => handleAddNumber("9")} />
              <Button label="-" onClick={handleMinusNumbers} />
            </Row>
            <Row>
              <Button label="4" onClick={() => handleAddNumber("4")} />
              <Button label="5" onClick={() => handleAddNumber("5")} />
              <Button label="6" onClick={() => handleAddNumber("6")} />
              <Button label="+" onClick={handleSumNumbers} />
            </Row>
            <Row>
              <Button label="3" onClick={() => handleAddNumber("3")} />
              <Button label="2" onClick={() => handleAddNumber("2")} />
              <Button label="1" onClick={() => handleAddNumber("1")} />
              <Button label="=" onClick={handleEquals} />
            </Row>
          </Content>
        </Column>
      </Container>
    </Background>
  );
}

export default App;
