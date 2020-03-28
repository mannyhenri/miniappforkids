const friends = JSON.parse(localStorage.getItem("names"));
// const friends = ['Gerry', 'Manny', 'Kim'];

function getFriends(item) {
    document.getElementById("card").innerHTML +=
        '<div class="card blue-grey darken-1">' +
        '<div class="card-content white-text">' +
        '<span class="card-title">' + item + '</span>' +
        '<p>Voici un de mes amis</p>' +
        '</div>' +
        '</div>'
        ;
}

// console.log(friends); //for testing purposes
// getFriends(friends[0]); // give example of position in array

friends.forEach(getFriends);

// function startDB() {
//     const names = ['Gerry', 'Manny', 'Kim'];
//     localStorage.setItem("names", JSON.stringify(names));
// };

function addNewFriend() {
    const newName = document.getElementById("fname") + document.getElementById("lname");
    const names = [];
    
    if (localStorage.getItem("names") === !null) {
        names = JSON.parse(localStorage.getItem("names"));
        names.push(newName);
    } else {
        names.push(newName);
    }

    localStorage.setItem("names", JSON.stringify(names));
};

// startDB();
