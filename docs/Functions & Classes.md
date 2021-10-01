# FrontEnd:
## 1. Authentication(src/actions/auth.js)
### I.Function Login
#### Parameters:(Email, Password)
#### Method: 'POST'
#### Decription: Makes an API call to create a session for the user. The function receives JSON data from the server side.
If the login is successful, the function calls "Login successful" function that updates the state of the user on client side.
"Login Failed" function is calledif there is an error or if the credentials are invalid.
#### Output:
data(token, user)
#### message:sign in successful
success:True/False

### II. Function SignUp
#### Parameters: Email, password, confirm Password, name
#### Method: "Post"
#### Description:
Create a user. The server side checks the conditions.
a.Password & Confirm Password matches.
b.If a user already exists with the same email. If user already exists, it returns the user.
c.Creates a new user if there is not a user with the same email in DB.

The function updates the state of the user on client side on success.

### III. Function Edit User Profile
#### Parmaters: 
height, wieght, goal. target, userID
#### Method: "Post"
#### Description: 
Finds the user inside the database & updates its height, weight, goal, Target, userID
#### Output: 
#updated user data
data{token, user}

### IV. Function addTotal
#### Parameters: 
total
#### Description: 
Updates the total calories state of the user on the client side
#### Output: 
Updated total calories state

### V. Function getHistory
#### Parameters: 
date, UserID
#### Method:
'GET'
#### Description:
Function makes an API call to get user's calories data for a specific date.
#### Output: 
Receives JSON data
#### Message: 
history:history
success: true

### VI. Function edit History
#### Parameters- 
date, total, burnout, userID
#### Description: 
Function makes an API call with users calories information for the date & adds it the database.
#### Output:
#### Message: 
{"History created successfully"
date: {History}
Success: true
}

### VII. Function search Users
#### Parameters- 
searchText: Food
#### Description:
Makes an API call to get the list of foods that contains the search text in their name
#### Output:
JSON data:{Message: "The list of searched food"
data:{food}
success: true
}

## Components:
### 1.Class App - 
App component contains all the components that resides on the client side.
### 2.Class Goal - 
Goal components is used to enter user's day to day calories intake and burnout
### 3.Class History - 
History component displays the user's calories/workout information for a specific selected date.
### 4.Class Login & Signup - 
Both components have the functinality to register & visit the website.
### 5.Class Navbar - 
This component contains the logo, tabs to switch between components, and logged in user's Name and login/logout buttons.
### 6.Class settings - 
Settings component is used to update the user's height, weight, goal and target weight.
