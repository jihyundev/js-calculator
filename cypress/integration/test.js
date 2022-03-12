describe("Calculator Test", function () {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("2개의 숫자에 대해 덧셈이 가능하다.", function () {
    cy.contains("9").click();
    cy.contains("+").click();
    cy.contains("8").click();
    cy.get("#equal").click();

    cy.get("#total").should("have.text", "17");
  });

  it("2개의 숫자에 대해 뺄셈이 가능하다.", function () {
    cy.contains("9").click();
    cy.contains("-").click();
    cy.contains("8").click();
    cy.get("#equal").click();

    cy.get("#total").should("have.text", "1");
  });

  it("2개의 숫자에 대해 곱셈이 가능하다.", function () {
    cy.contains("9").click();
    cy.contains("X").click();
    cy.contains("8").click();
    cy.get("#equal").click();

    cy.get("#total").should("have.text", "72");
  });

  it("2개의 숫자에 대해 나눗셈이 가능하다.", function () {
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("/").click();
    cy.contains("5").click();
    cy.get("#equal").click();

    cy.get("#total").should("have.text", "2");
  });

  it("AC(All Clear)버튼을 누르면 0으로 초기화 한다.", function () {
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("/").click();
    cy.contains("5").click();

    cy.get(".modifier").click();

    cy.get("#total").should("have.text", "0");
  });

  it("숫자는 한번에 최대 3자리 수까지 입력 가능하다.", function () {
    cy.contains("1").click();
    cy.contains("2").click();
    cy.contains("3").click();
    cy.contains("4").click();

    cy.get("#total").should("have.text", "123");
  });

  it("계산 결과를 표현할 때 소수점 이하는 버림한다.", function () {
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("/").click();
    cy.contains("3").click();
    cy.get("#equal").click();

    cy.get("#total").should("have.text", "3");
  });
});