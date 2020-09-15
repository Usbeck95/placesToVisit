let placesToVisit = ['Houston', 'Cheyenne', 'Salem', 'Charleston', 'Gettysburg'];

placesToVisit.push('Jackson');

/*for (let i = 0; i < placesToVisit.length; i++) {
    document.write(placesToVisit[i]);
};*/

function outputArray(theArray) {
    document.write(placesToVisit);
    document.getElementById("btn");
}

//outputArray(placesToVisit);

document.addEventListener("click", function() {
    outputArray(placesToVisit);
});

let deleteCities = placesToVisit.splice(0, 2);

placesToVisit.sort();
