const search_bar = document.querySelector(".subscribe-input");
const search_button = document.querySelector(".subscribe-button");
const form = document.querySelector(".subscribe-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  requester();
});
//https://api.openweathermap.org/data/2.5/weather?units=metric&appid='

const requester = async () => {
  const city = search_bar.value.toLowerCase();
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=8412f2a6f71551806f2c02e327775519`,
    {
      method: "GET",
      // body: JSON.stringify(data)
    }
  )
    .then(console.log(response.ok))
    .catch((error) => {
      console.log(error);
    });
};
