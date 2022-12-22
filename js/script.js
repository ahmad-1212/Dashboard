// Toggle menue
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const links = document.querySelectorAll(".side-nav__link");
const navItemsContainer = document.querySelector(".side-nav__list");

const toggleBtn = document.querySelector(".menu-icon");

navItemsContainer.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("side-nav__link")) return;

  links.forEach((el) => {
    el.classList.remove("active");
  });
  e.target.classList.add("active");
});

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  main.classList.toggle("active");
});

// Charts

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Facebook", "Youtube", "Amazon"],
    datasets: [
      {
        label: "Traffic Source",
        data: [1000, 1500, 2000],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const earning = document.getElementById("earning");

new Chart(earning, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "Novermber",
      "December",
    ],
    datasets: [
      {
        label: "Earning",
        data: [
          1000, 1500, 5000, 4600, 3800, 1200, 6000, 3400, 5500, 5100, 1800,
          2000,
        ],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(153,102,255,1)",
          "rgba(155,159,64,1)",
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(153,102,255,1)",
          "rgba(155,159,64,1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
