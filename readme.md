**Angular Assessment**

We would like you to take an assessment that will give you a chance to exhibit your Angular skills. 

This small application has a number of defects, ranging in difficulty from simple to quite difficult, that need to be resolved. 
There are also a few additional requirements that you can implement if you have the time.

**_The assessment requires no Java knowledge. You can use your preferred IDE_**

You will be allowed to utilize any resources other than people, including the internet, and you will have two hours to complete it.

We will hop on a Zoom call with you for the technical interview. We will clarify any questions that you may have regarding the application and the assessment. You will share your screen with us so that we can see how you perform the assessment. 

_**Note that you are not expected to finish the entirety of the assessment in the time provided.**_

***

**Defects**

1. Resolve an Angular property binding alias defect
    1. When a flight is clicked, the arrival-list component should pass information to the arrivals component so that the details can be displayed (on the right-side of the application). 
    2. _Hint_ - There is a problem with the property binding that causes this to fail
2. Resolve a TypeScript code issue
    1. One should be able to toggle the flight's status from 'On time' to 'Delayed' (by clicking the Change Status button) and have that reflected in the list
    2. _Hint_ - There is a changeStatus method in the departure and arrival services, and it is poorly implemented. This method needs to be fixed
3. Resolve a defect in the arrival-list and departure-list components that prevents the list of flights from being updated in the UI when a flight is added
    1. Verify that the list is accurate, and once you have confirmed it is, determine why the list of flights is not reflected in the UI
    2. _Hint_ - Pay attention to the list components and the arrival/departure services
4. Update the application to utilize a time picker instead of a text field for the times
    1. The time picker should allow the user to specify a time in a more user frinedly fashion
    2. _Hint_ - Use https://ng-bootstrap.github.io/#/components/timepicker/examples

***

**New Requirements (if you have time)**

1. Add the ability to edit and delete flights and make sure that the list is updated appropriately
2. Locate duplicate code (arrival tab vs departure tab) and refactor appropriately so there is no duplication

If you are running out of time, do not hesitate to move to the next task and come back to that one later. If you decide to do that, it is a good idea to add comments explaining what you would do to resolve the problem so that we can understand your thought process

Once you are finished, we will review your code and discuss it with you

***

**Additional Questions**

1. What would you change about this application and how it was implemented?
2. What are your observations about the flow of data through the application? 
