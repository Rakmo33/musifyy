document.querySelector(".profile").addEventListener("click", function () {
  document.querySelector(".profile i").classList.toggle("upside-down");
  document.querySelector(".dropdown").classList.toggle("visible");
});

var songs = [
  {
    url: "assets/images/perfect.jpg",
    name: "Perfect",
    artist: "Ed Sheeran",
    duration: "02 : 55",
    date: "03-03-2017",
  },
  {
    url: "assets/images/attention.png",
    name: "Attention",
    artist: "Charlie Puth",
    duration: "03 : 51",
    date: "24-04-2017",
  },
  {
    url: "assets/images/blank.jpg",
    name: "Blank Space",
    artist: "Taylor Swift",
    duration: "04 : 33",
    date: "10-11-2014",
  },
  {
    url: "assets/images/wolves.jpeg",
    name: "Wolves",
    artist: "Selena gomez",
    duration: "03 : 32",
    date: "18-11-2018",
  },
  {
    url: "assets/images/treat.jpeg",
    name: "Treat You Better",
    artist: "Shawn Mendes",
    duration: "04 : 16",
    date: "12-07-2016",
  },
];

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

if (window.location.href.includes("homepage.html")) {
  var p1 = document.querySelector("#p1");
  var n1 = document.querySelector("#n1");
  var list1 = document.querySelector("#list1");

  n1.addEventListener("click", () => {
    sideScroll(list1, "right", 10, 230, 15);
  });

  p1.addEventListener("click", () => {
    sideScroll(list1, "left", 10, 230, 15);
  });

  var p2 = document.querySelector("#p2");
  var n2 = document.querySelector("#n2");
  var list2 = document.querySelector("#list2");

  n2.addEventListener("click", () => {
    sideScroll(list2, "right", 10, 230, 15);
  });

  p2.addEventListener("click", () => {
    sideScroll(list2, "left", 10, 230, 15);
  });

  var p3 = document.querySelector("#p3");
  var n3 = document.querySelector("#n3");
  var list3 = document.querySelector("#list3");

  n3.addEventListener("click", () => {
    sideScroll(list3, "right", 10, 230, 15);
  });

  p3.addEventListener("click", () => {
    sideScroll(list3, "left", 10, 230, 15);
  });
} else if (window.location.href.includes("search.html")) {
  var searchbar = document.querySelector("#searchbar");
  searchbar.classList.add("show");

  var input = document.querySelector("#search");
  var keyword = document.querySelector("#keyword");
  var table = document.querySelector(".table-wrap");
  var found = false;
  table.innerHTML = " <p>No match found!</p>";

  input.addEventListener("keyup", () => {
    keyword.innerHTML = input.value;

    table.innerHTML = "";
    found = false;

    songs.forEach(function (song) {
      if (
        keyword.innerHTML != "" &&
        song.name.toLowerCase().includes(input.value.toLowerCase())
      ) {
        table.innerHTML += ` <li>
        <a href="songs.html" class="table-row">
            <img src=${song.url} alt="" />
            <h3>${song.name}</h3>
            <h5>${song.artist}</h5>
            <h5>${song.duration}</h5>
            <h5>${song.date}</h5>
  
        </a>
    </li>`;
        found = true;
      }
    });

    if (!found || keyword.innerHTML == "") {
      table.innerHTML = " <p>No match found!</p>";
    }
  });
}

// logout
var logoutBtn = document.querySelector(".dropdown a");
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("User");
});

if (localStorage.getItem("User")) {
  document.querySelector(".loginBtn").classList.add("hide");
  document.querySelector(".signupBtn").classList.add("hide");
  document.querySelector(".profile-wrap").classList.remove("hide");
} else {
  document.querySelector(".loginBtn").classList.remove("hide");
  document.querySelector(".signupBtn").classList.remove("hide");
  document.querySelector(".profile-wrap").classList.add("hide");
}
