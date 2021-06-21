# Cloud subscription checkout process

## Stack Used

React, Tailwind, craco, axios

## To run: 'npm start'

## Story:

### The checkout has 3 steps:

First step: selecting your plan details

Second step: adding payment details

Third step: adding email address and accepting terms and conditions to confirm the subscription

### Plan selection:

The plan selection defaults to 12 months, 5 gigabytes.

### Payment details:

- Displays subscription summary on the top.

- User cannot progress further without filling in all the fields with valid details.

- Details are validated on blur.

- All details, except expiry date, disappear after navigating away from the page.

### Confirmation:

- Displays subscription summary on the top

- User cannot progress further without filling in all the fields with valid details.

- Details are validated on blur.

- Upon clicking on the confirm button, the request gets sent to the backend and the response result controls the message in the following page.
