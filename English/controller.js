const friends = JSON.parse(localStorage.getItem("names"));
// const friends = ['Gerry', 'Manny', 'Kim']; // show also let vs const

function getFriends(item) {
    document.getElementById("card").innerHTML +=
        '<div class="card blue-grey darken-1">' +
        '<div class="card-content white-text">' +
        '<span class="card-title">' + item + '</span>' +
        '<p>A friend of mine</p>' +
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
    let first = document.getElementById("fname");
    let last = document.getElementById("lname");
    let newName = `${first.value} ${last.value}`;
    let names = [];

    if (localStorage.getItem("names") === null) {
        names.push(newName);
    } else {
        console.log("Items in localstorage");
        names = JSON.parse(localStorage.getItem("names"));
        names.push(newName);
    }

    localStorage.setItem("names", JSON.stringify(names));
    location.reload();
};

// startDB();
