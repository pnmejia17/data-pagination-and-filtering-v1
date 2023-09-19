/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

/** function uses the index variables to display correct students for the page
 * information to be displayed for each student is dynamically populated using
 * for loop and inserted into the appropriate element in the HTML
 */


function showPage (list, page){
  // create two variables that will represent the index for the first and last student on the page
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9 ;

  // select the element with a class of `student-list` and assign it to a variable
  const studentList = document.querySelector('ul.student-list');

  // set the innerHTML property of the variable you just created to an empty string
studentList.innerHTML = '';

// loop over the length of the `list` parameter
for (let i=0; i < list.length; i++){
   // inside the loop create a conditional to display the proper students
   if (i >= startIndex && i < endIndex){
      //inside the conditional:
        // create the elements needed to display the student information
        const studentItem = `
        <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>`;
        // insert the above elements
        studentList.insertAdjacentHTML('beforeend', studentItem);

   }

      }

}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

/***
 * function creates the number of pages by dividing the number of students
 * by the desired display per page
 * buttons are generated using for loop and inserted into appropriate location
 * via HTML
 * an event listener is added to select which button is active and therefore 
 * what page and students should be displayed
 * 
 */

function addPagination(list) {
   console.log(list)
     // create a variable to calculate the number of pages needed
   const numOfpages = Math.ceil(list.length/9);

     // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector('ul.link-list');

     // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = '';

   // loop over the number of pages needed
   for (let i=1; i<=numOfpages; i++) {
      // create the elements needed to display the pagination button
      const button = `
      <li>
         <button type="button">${i}</button>
      </li>`
       // create the elements needed to display the pagination button
      linkList.insertAdjacentHTML('beforeend', button);
   }
    // give the first pagination button a class of "active"
document.querySelector('li button').className = "active";

  // create an event listener on the `link-list` element
  linkList.addEventListener('click', (e) => {
    // if the click target is a button:
    if (e.target.tagName === "BUTTON"){
      // remove the "active" class from the previous button
      document.querySelector('.active').className='';
      // add the active class to the clicked button
      e.target.className="active";
      // call the showPage function passing the `list` parameter and page to display as arguments
      showPage(list, e.target.textContent)
    }
   })
}

// Call functions
showPage(data,1)

addPagination(data)
