const participants = [
    { number : 1, name : "AAA" },
    { number : 2, name : "BBB" },
    { number : 3, name : "CCC" },
    { number : 4, name : "DDD" },
    { number : 5, name : "FFF" },
    { number : 6, name : "GGG" },
];


        function addParticipant() {
            const name = document.getElementById('name').value.trim();
            const number = document.getElementById('number').value.trim();

            if (!name || !number) {
                alert("Пожалуйста, введите корректные имя и номер.");
                return;
            }

            participants.push({ name, number });
            updateParticipantList();
            document.getElementById('name').value = '';
            document.getElementById('number').value = '';
        }

        function updateParticipantList() {
            const list = document.getElementById('participantList');
            list.innerHTML = '';

            participants.forEach((participant, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${participant.name} (Номер: ${participant.number})`;
                list.appendChild(listItem);
            });
        }

        function chooseWinner() {
            if (participants.length === 0) {
                document.getElementById('result').innerText = "Нет участников для розыгрыша.";
                return;
            }

            const randomIndex = Math.floor(Math.random() * participants.length);
            const winner = participants[randomIndex];

            const overlay = document.getElementById('winnerOverlay');
            const winnerText = document.getElementById('winnerText');

            winnerText.textContent = `Победитель: ${winner.name} с номером ${winner.number}!`;
            overlay.classList.add('show');

            setTimeout(() => {
                overlay.classList.remove('show');
            }, 5000);
        }