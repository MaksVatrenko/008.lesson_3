const options = ['😃', '😄', '😁', '😆', '😅', '😅'];

const container = document.querySelector('.smiley-container');
let voteCounts = Array(options.length).fill(0);
container.innerHTML = '';

options.forEach((option, index) => {
    const smileyDiv = document.createElement('div');
    const countDiv = document.createElement('div');
    smileyDiv.id = 'smiley' + index;
    smileyDiv.classList.add('smiley');
    countDiv.classList.add('count');
    smileyDiv.textContent = option;
    countDiv.textContent = '0';
    smileyDiv.appendChild(countDiv);
    container.appendChild(smileyDiv);
});

container.addEventListener('click', (event) => {
    const smiles = document.querySelectorAll('.smiley');

    for (let i = 0; i < smiles.length; i++) {
        if (event.target.id === smiles[i].id) {
            voteCounts[i]++;
            smiles[i].querySelector('.count').textContent = voteCounts[i];
        }
    }
});