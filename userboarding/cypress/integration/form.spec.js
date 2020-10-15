describe("Form App", () => {
  
    //Schedule us to navigate to localhost before we run each test
    beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Helpers to avoid tons of repetition
  const nameInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const userNameInput = () => cy.get("input[name=username]");
  const passwordInput = () => cy.get("input[name=password]");
  const tServiceInput = () => cy.get("input[name=termsofservice]");
  const subButton = () => cy.get("button[id=submitBtn]");

  //it keyword for tests
  it("The proper elements exist", () => {
    nameInput().should("exist");
    emailInput().should("exist");
    userNameInput().should("exist");
    passwordInput().should("exist");
    tServiceInput().should("exist");
    subButton().should("exist");

    describe("can type inside of the imputs and submit", () => {
      
        //testing if tyler can be typed in name textbox
      nameInput()
        .should("have.value", "")
        .type("Tyler")
        .should("have.value", "Tyler");
      
        //testing if tyler@gmail.com can be typed in email textbox
      emailInput()
        .should("have.value", "")
        .type("tyler@gmail.com")
        .should("have.value", "tyler@gmail.com");
      
        //testing if user name tyler can be typed in userName textbox
      userNameInput()
        .should("have.value", "")
        .type("user name tyler")
        .should("have.value", "user name tyler");
      
        //testing if password can be typed in password textbox
      passwordInput()
        .should("have.value", "")
        .type("password")
        .should("have.value", "password");
      
        //testting if the terms of service button clicks and changes state
      tServiceInput().click().should("have.value", "on");
      
      //testing if the submit button submits and resets the form
      subButton().click();
    });
  });
});
