const options = ['😃', '😄', '😁', '😆', '😅'];
const voteCounts = Array(options.length).fill(0);

function displayResults() {
    const container = document.querySelector('.smiley-container');
    container.innerHTML = '';

    options.forEach((option, index) => {
        const smileyDiv = document.createElement('div');
        smileyDiv.classList.add('smiley');
        smileyDiv.textContent = option;
        smileyDiv.addEventListener('click', () => {
            voteCounts[index]++;
            displayResults();
        });

        const countDiv = document.createElement('div');
        countDiv.textContent = voteCounts[index];

        container.appendChild(smileyDiv);
        smileyDiv.appendChild(countDiv);
    });
}

displayResults();