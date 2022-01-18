document.addEventListener("DOMContentLoaded", showPageContent(), false);

function showPageContent() {
  const url = "https://ghibliapi.herokuapp.com/people";
  const container = document.querySelector("main");

  function showPeople(people) {
    people.forEach((person) => {
      // creating a div to contain person's info
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      //   create elements w/ person's name, age etc
      const name = document.createElement("h2");
      name.textContent = person.name;

      const age = document.createElement("p");
      age.textContent = "Age: ";
      const ageVal = document.createElement("span");
      ageVal.textContent = person.age;

      // append card to container
      container.appendChild(card);

      // append person name, age, etc to card
      card.appendChild(name);
      card.appendChild(age);
      age.appendChild(ageVal);
    });
  }

  function handleFetchError() {
    const error = document.createElement("p");
    error.textContent = "Error fetching data! Try again.";
    container.appendChild(error);
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => showPeople(data))
    .catch(handleFetchError);
}
