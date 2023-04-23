# Week-2-password-generator

## User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


## Challenges to complete

GIVEN I need a new, secure password

- WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria.

- WHEN prompted for password criteria THEN I select which criteria to include in the password

- WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters

- WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

- WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected

- WHEN all prompts are answered THEN a password is generated that matches the selected criteria

- WHEN the password is generated THEN the password is either displayed in an alert or written to the page

### Solutions

- When the user clicks the generate button, a series of five message prompts will appear for the password criteria.

- All the 4 different criteria are declared with the coresponding name of character type.

- To create the password length a window.prompt with the message 'How long would you like your password to be (must between 8-128 characters)' is shown.

- Next the user confirms which character types they want in their password (lowercase, uppercase, numeric, and/or special characters).

- If the user doesnt select at least one of the 4 character options then an alert message will appear forcing the user to restart the process.

- After the last prompt is confirmed then password is generated and displayed in the text box.
