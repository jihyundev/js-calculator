export class Calculator {
  #firstNumberString;
  #secondNumberString;
  #operator;
  #displayText;
  #hasClickedOperator;

  constructor() {
    this.#firstNumberString = "";
    this.#secondNumberString = "";
    this.#operator = "";
    this.#displayText = "";
    this.#hasClickedOperator = false;
  }

  #updateDisplayText = (text) => {
    const total = document.querySelector("#total");
    total.innerText = text;
  };

  #initializeInputData = () => {
    this.#firstNumberString = "";
    this.#secondNumberString = "";
    this.#operator = "";
    this.#hasClickedOperator = false;
  };

  #isLessThanThreeDigits = (numberString) => {
    if (numberString.length < 3) {
      return true;
    }
    return false;
  };

  setEventListeners() {
    const digits = document.getElementsByClassName("digit");
    for (const digit of digits) {
      digit.addEventListener("click", () => {
        if (this.#hasClickedOperator) {
          if (this.#isLessThanThreeDigits(this.#secondNumberString)) {
            this.#secondNumberString += digit.textContent;
            this.#displayText =
              this.#firstNumberString +
              this.#operator +
              this.#secondNumberString;
          } else {
            window.alert("한번에 최대 3자리 수까지 입력할 수 있어요. ");
          }
        } else {
          if (this.#isLessThanThreeDigits(this.#firstNumberString)) {
            this.#firstNumberString += digit.textContent;
            this.#displayText = this.#firstNumberString;
          } else {
            window.alert("한번에 최대 3자리 수까지 입력할 수 있어요. ");
          }
        }
        this.#updateDisplayText(this.#displayText);
      });
    }

    const operations = document.getElementsByClassName("operation");
    for (const operation of operations) {
      operation.addEventListener("click", () => {
        this.#hasClickedOperator = true;
        this.#operator = operation.textContent;
        this.#displayText += operation.textContent;
        this.#updateDisplayText(this.#displayText);
      });
    }

    const equal = document.getElementById("equal");
    equal.addEventListener("click", () => {
      // 연산
      const firstNumber = Number(this.#firstNumberString);
      const secondNumber = Number(this.#secondNumberString);
      this.#displayText = calculate(firstNumber, secondNumber, this.#operator);
      this.#updateDisplayText(this.#displayText);
      this.#initializeInputData();
    });

    const modifier = document.getElementsByClassName("modifier")[0];
    modifier.addEventListener("click", () => {
      this.#displayText = "0";
      this.#initializeInputData();
      this.#updateDisplayText(this.#displayText);
    });
  }
}

export const Operator = {
  DIVIDE: "/",
  MULTIPLY: "X",
  DECREASE: "-",
  INCREASE: "+",
};

export const calculate = (num1, num2, operator) => {
  switch (operator) {
    case Operator.DIVIDE:
      return Math.floor(num1 / num2);
    case Operator.MULTIPLY:
      return num1 * num2;
    case Operator.DECREASE:
      return num1 - num2;
    case Operator.INCREASE:
      return num1 + num2;
    default:
      return 0;
  }
};
