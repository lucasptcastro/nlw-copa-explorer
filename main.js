function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
          <strong>${hour}</strong>
      <img src="assets/icon-${player2}.svg" alt="Bandeira de ${player2}" />
    </li>
    `;
}

function createCard(date, day, games) {
  return `
    <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    <!-- Tag de lista não ordenada-->
    ${games}
    </ul>
    </div>
    `;
}

document.querySelector("#app").innerHTML =
  createCard(
    "21/11",
    "segunda",
    createGame("brazil", "08:00", "cameroon") +
      createGame("hungary", "13:00", "argentina") +
      createGame("colombia", "20:00", "japan")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("british-columbia", "08:00", "cameroon") +
      createGame("india", "13:00", "armenia") +
      createGame("comoros", "20:00", "jordan")
  );
