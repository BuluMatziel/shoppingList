//enter text to the input box.. -> press add -> input box clears and text gets moved to unordered list.. we create elements on unordered list when you click the add button
//remove(remove all)... removes them

var ul = document.getElementById('taskList'),
    add = document.getElementById('add'),
    ulCompleted = document.getElementById('done')
emptyCompleted = document.getElementById('removeCompleted')

add.onclick = () => {
    addTask(ul); // clicking the add button triggers a function called addTask
};

function addTask(targetUl) { // this function adds the tasks to the target list
    var inputText = document.getElementById('text').value,
        li = document.createElement('li'),
        textNode = document.createTextNode('  ' + inputText + ' '),
        completeCheck = document.createElement('input');

    completeCheck.className = "padding-right CB";
    completeCheck.type = "checkbox";
    completeCheck.setAttribute('onclick', 'boxChecked(this);', );

    li.className = ("margin newEntry text-big");

    garbage = document.createElement('i');
    garbage.className = "right icon ion-trash-a text-red";
    garbage.setAttribute('onclick', 'removeItem(this);');

    document.getElementById('text').value = '';//gets text element and change it to empty string and it clears the ''textbox''

    if (inputText.split(' ').join('').length === 0) {
        alert('Please write something first.');
        return false;
    }

    li.appendChild(completeCheck);
    li.appendChild(textNode);
    li.appendChild(garbage);


    targetUl.appendChild(li);

    calculator();
    localStorage["list"] = ul.innerHTML // updating localstorage
}

function removeItem(item) { //Function to remove a single item by clicking the red icon
    parent = item.parentElement;
    item.parentNode.parentNode.removeChild(item.parentNode);
    calculator();
    localStorage["list"] = ul.innerHTML // updating localstorage
}

function boxChecked(item) { //What happens when checking boxes
    parent = item.parentElement;

    if (item.checked == true) {
        parent.style.textDecoration = "line-through";
        parent.classList.add('checked');
    } else {
        parent.style.textDecoration = "initial";
        parent.classList.remove('checked');
    }
    calculator();
    localStorage["list"] = ul.innerHTML // updating localstorage
}

function removeCompleted() { // remove all items that are set as completed
    var elem = document.getElementsByClassName("checked");
    while (elem.length > 0) {
        elem[0].parentNode.removeChild(elem[0]);
    }
    calculator();
    localStorage["list"] = ul.innerHTML // updating localstorage
}

function completeAll(source) { // complete all tasks
    completedRemoval = document.getElementsByClassName("CB");
    listRemoval = document.getElementsByClassName("newEntry");
    for (i = 0; i < completedRemoval.length; i++) {
        if (completedRemoval.item(i).checked == false) {
            completedRemoval.item(i).checked = true;
            listRemoval.item(i).classList.add('checked');
            listRemoval.item(i).style.textDecoration = "line-through";
        }
    }

    calculator();
    localStorage["list"] = ul.innerHTML // updating localstorage
}

function uncompleteAll() { //uncomplete all tasks
    completedRemoval = document.getElementsByClassName("CB");
    listRemoval = document.getElementsByClassName("newEntry");
    for (i = 0; i < completedRemoval.length; i++) {
        if (completedRemoval.item(i).checked == true) {
            completedRemoval.item(i).checked = false;
            listRemoval.item(i).classList.remove('checked');
            listRemoval.item(i).style.textDecoration = "initial";
        }
    }
    calculator();
    localStorage["list"] = ul.innerHTML // updating localstorage
}


function removeAll() { // Remove everything
    ul.innerHTML = '';
    calculator();
    localStorage["list"] = ul.innerHTML // updating localstorage
}

function calculator() { //Calculate and display how many items exist and are completed
    boxesChecked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    totalItems = document.getElementsByClassName("CB").length;
    title = document.getElementById("calculator");
    title.innerHTML = ("Shopping completed: " + boxesChecked + "/" + totalItems);

}

function themeAlert() { //window to choose theme from
    alert({
        id: 'myAlert',
        title: 'Settings',
        message: 'Please select a theme:',
        template: 'template-alert-custom',
        width: '90%',
        buttons: [
            {
                label: 'Cancel',
                onclick: function () {
                    closeAlert();
                }
            }
        ]
    });
}

function themeBlue() { //different themes
    document.getElementById('bodyTheme').classList.remove('yellow-200', 'blue-grey-800');
    document.getElementById('bodyTheme').classList.add('indigo-200');
    document.getElementById('headerTheme').classList.remove('orange-400', 'black');
    document.getElementById('headerTheme').classList.add('indigo-900');
    document.getElementById('myMenu').classList.remove('red-200', 'grey-700');
    document.getElementById('myMenu').classList.add('blue-grey-500');
    document.getElementById('tabTitleTheme').classList.remove('orange-400', 'black');
    document.getElementById('tabTitleTheme').classList.add('indigo-900');
    document.getElementById('popover1').classList.remove('red-200', 'grey-700');
    document.getElementById('popover1').classList.add('blue-grey-500');
    document.getElementById('footerTheme').classList.remove('orange-400', 'black');
    document.getElementById('footerTheme').classList.add('indigo-900');
    document.getElementById('calculator').classList.remove('text-grey-800', 'text-grey-300');
    document.getElementById('calculator').classList.add('text-grey-100');
    closeAlert('myAlert');
    localStorage.setItem("color", "blue"); //updating theme to localStorage
    
}

function themeFall() {
    document.getElementById('bodyTheme').classList.add('yellow-200');
    document.getElementById('bodyTheme').classList.remove('indigo-200', 'blue-grey-800');
    document.getElementById('headerTheme').classList.add('orange-400');
    document.getElementById('headerTheme').classList.remove('indigo-900', 'black');
    document.getElementById('myMenu').classList.add('red-200');
    document.getElementById('myMenu').classList.remove('blue-grey-500', 'grey-700');
    document.getElementById('tabTitleTheme').classList.add('orange-400');
    document.getElementById('tabTitleTheme').classList.remove('indigo-900', 'black');
    document.getElementById('popover1').classList.add('red-200');
    document.getElementById('popover1').classList.remove('blue-grey-500', 'grey-700');
    document.getElementById('footerTheme').classList.add('orange-400');
    document.getElementById('footerTheme').classList.remove('indigo-900', 'black');
    document.getElementById('calculator').classList.remove('text-grey-100', 'text-grey-300');
    document.getElementById('calculator').classList.add('text-grey-800');
    closeAlert('myAlert');
    localStorage.setItem("color", "fall"); //updating theme to localStorage
    
}

function themeDark() {
    document.getElementById('bodyTheme').classList.add('blue-grey-800');
    document.getElementById('bodyTheme').classList.remove('indigo-200', 'yellow-200');
    document.getElementById('headerTheme').classList.add('black');
    document.getElementById('headerTheme').classList.remove('indigo-900', 'orange-400');
    document.getElementById('myMenu').classList.add('grey-700');
    document.getElementById('myMenu').classList.remove('blue-grey-500', 'red-200');
    document.getElementById('tabTitleTheme').classList.add('black');
    document.getElementById('tabTitleTheme').classList.remove('indigo-900', 'orange-400');
    document.getElementById('popover1').classList.add('grey-700');
    document.getElementById('popover1').classList.remove('blue-grey-500', 'red-200');
    document.getElementById('footerTheme').classList.add('black');
    document.getElementById('footerTheme').classList.remove('indigo-900', 'orange-400');
    document.getElementById('calculator').classList.remove('text-grey-100', 'text-grey-800');
    document.getElementById('calculator').classList.add('text-grey-300');
    closeAlert('myAlert');
    localStorage.setItem("color", "dark"); //updating theme to localStorage
}




if (localStorage["list"]) { // checking, if there is something in localstorage
    ul.innerHTML = localStorage["list"]; 
    calculator();
    cbBugFix();
}

//Checking the theme saved to localStorage

if (localStorage.getItem("color") == "dark") {
    themeDark();
}

if (localStorage.getItem("color") == "blue") {
    themeBlue();
}

if (localStorage.getItem("color") == "fall") {
    themeFall();
}

// This is a function to fix the bug that was caused when getting items from the database. 
// Checkboxes' default value are "unchecked", so when getting completed items from the list, checkboxes were displayed uncorrectly. The calculator didn't work correctly either.
// This function checks if the items have the class "checked", and if they do, their checkboxes are checked with this function.

function cbBugFix() {
    bug = document.querySelectorAll('.checked');
    for (i = 0; i < bug.length; i++) {
        if (bug[i].classList.contains("checked")) {
            bug[i].childNodes[0].checked = true;
            calculator();
        }
    }      
}
