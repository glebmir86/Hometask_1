The task:
Task 1: Based on requirements create 3 manual test cases
 

Test case ID: REG_001
Test name: Happy path – user registration with all fields filled    correctly.

Precondition: 
1. User is on registraion form - https://auth-home-task.vercel.app/register

Test steps:
1. Enter value from Test data.
2. Click “Register” button


Test data:
Username: TestUser1
Email: test@email.com
Password: Password1!
Confirm Password: Password1!

Expected result:
1. User redirected to Home page
2. Message “You have registered successfully!” appears



Test case ID: REG_002
Test name: Check that all mandatory fields are mandatory

Precondition: 
1. User is on registraion form - https://auth-home-task.vercel.app/register

Test steps:
1. Enter value from Test data. Leave one field empty (e.g. “Username”)
2. Click “Register” button
3. Observe validation behaviour and whether form submission is blocked
4. Repeat steps 1-3, leave different field empty each time (Email, Password, Confirm Password)


Test data:
Username: TestUser1
Email: test@email.com
Password:Password1!
Confirm Password: Password1!


Expected result:
1. Validation error appears under empty field
2. User Registration is blocked 


Test case ID: REG_003
Test name: Check field validation rules

Precondition:
1. User is on registraion form - https://auth-home-task.vercel.app/register

Test steps:
1. For each field, enter value from Test data
2. Click “Enter”

Test data:
Username: Aa; User_; Test User; 12345678901234567890a
Email: test; test@email; email.com; !%^&*()@email.com; @email.com; Joe Smith <email@test.com>; email@example@example.com
Password: 12345Aa; password1; PASSWORD1; TestPassword; !@#$%^&*()_;
Confirm password: Any value, different from value is Password field.  

Expected result:
1. Validation error with rule should appear under the field.


Task 2: Report at least 1 Bug You have found during the testing 

Bug ID: 001
Summary: Field with error is not highlighted
Precondtion: User is on Registration form

Steps to reporoduce:
1. Enter invalid data in all fields
2. Click “Register” button

Expected result:
As per requirement field with error should be highlighted

Actual result:
Error message appears, but fields are not highlighted

Priority: Medium (From my experience, final decision on priority is with BA or Delivery Manager)

Bug ID: 002
Summary: Email field with invalid data has pop up error message
Precondtion: User is on Registration form

Steps to reporoduce:
1. Enter invalid data in Email field like: “example()@gmail”
2. Enter invalid data for other fields
3. Click “Register” button

Expected result:
1. Clear error message should appear for each field
2. Error messages for different fields should be with the same style. 
(For other fields, we see error message under the field. For email – pop up)

Actual result:
Pop up appears with message: “Please enter an email address”

There are no error messages for other fields. If we delete email and click “Enter”, then error message for other fields appear.


Priority: High
Comments: Unfortunatelly, can not attach screenshots.

Task 3: Based on requirements automate 1 manual test case using playwright 
Task 4: Add points to improve form's UI/UX 

Could implement password visibility toggle – to allow users to show / hide password inputs.
Could implement placeholder text to show expected input format (e.g. John1990 for username) 
Could disable the "Register" button until all fields are valid.


Task 5: Anything You would improve/specify more in the existing requirements 

Looks like "Registration Form Fields" and "Field Validation" sections contain same information. If appropriate, I would advice to combine them in one section. In additional, for larger forms, I would include if field is mandatory, or optional.
Define maximum characters for password. Currently, I could create user with password length 750 characters.
Recommend updating the password rule to include at least one special character. This improves password strength and aligns with common security best practices.
Minor remark, would change “Submit” button to “Registration” button
There is a tricky moment with email validation. Would like to clarify which email formats we intend to accept and which we do not. From experience, if we have customers worldwide, some customers may have email addresses with valid, but uncommon formats — allowed by their email providers — that our current validation might reject. 
 

Task 6: What else can be tested? 

Check that password is sent in API request body over HTTPS protocol
Check how password is stored in DB. It should be in hash, not plain text.
Check that you can log in with registered user.
Check that you can not create 2 users with same email or username
Check that registration form accepts different valid email formats. Like "email"@example.com   


Link to app:  https://auth-home-task.vercel.app/

Save all answers in README file and send automated test code link to public git repository Add any other comments You have about home task 


Registration page requirements

Registration Form Fields:

-Username (required, alphanumeric, 3-20 characters) 
-Email (required, valid email format) 
-Password (required, minimum 8 characters, at least 1 uppercase, 1 lowercase, and 1 number) 
-Confirm Password (required, must match the Password field) 
-Submit Button (to submit the form) 


Field Validations:

-Username: Must be between 3 and 20 characters. Only alphanumeric characters (letters and numbers) are allowed. 
-Email: Must be a valid email format (e.g., example@domain.com). 
-Password: Must be at least 8 characters long. Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. 
-Confirm Password: Must match the value entered in the Password field.


Validation Feedback: 

Display clear error messages for each field if validation fails. Highlight the fields with errors. 

Form Submission: 
If all validations pass: Redirect the user to the Home Page. 
Display a success message: "You have registered successfully!"
