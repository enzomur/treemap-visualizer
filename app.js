google.charts.load('current', { packages: ['treemap'] });

const entries = [];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('stock-form');
  const entryList = document.getElementById('entry-list');
  const generateBtn = document.getElementById('generate-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tickerInput = document.getElementById('ticker');
    const amountInput = document.getElementById('amount');

    const ticker = tickerInput.value.trim().toUpperCase();
    const amount = parseFloat(amountInput.value);

    if (ticker && !isNaN(amount) && amount > 0) {
      entries.push({ ticker, amount });
      tickerInput.value = '';
      amountInput.value = '';
      displayEntries();
    }
  });

  generateBtn.addEventListener('click', () => {
    if (entries.length > 0) {
      drawTreemap(entries);
    } else {
      alert('Please add at least one entry.');
    }
  });
});

function displayEntries() {
  const container = document.getElementById('entry-list');
  container.innerHTML = '<strong>Entries:</strong>';

  entries.forEach((entry, index) => {
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `
      ${entry.ticker}: $${entry.amount.toFixed(2)} 
      <button data-index="${index}" class="remove-btn">Remove</button>
    `;
    container.appendChild(div);
  });

  // Attach remove handlers
  const buttons = document.querySelectorAll('.remove-btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      entries.splice(index, 1);
      displayEntries(); // Re-render
    });
  });
}

function drawTreemap(dataEntries) {
  const dataArray = [
    ['Ticker', 'Parent', 'Amount', 'Color'],
    ['Portfolio', null, 0, 0]
  ];

  dataEntries.forEach(entry => {
    dataArray.push([entry.ticker, 'Portfolio', entry.amount, entry.amount]);
  });

  const data = google.visualization.arrayToDataTable(dataArray);

  const tree = new google.visualization.TreeMap(document.getElementById('treemap'));
  tree.draw(data, {
    minColor: '#f0f9e8',
    midColor: '#bae4bc',
    maxColor: '#7bccc4',
    headerHeight: 15,
    fontColor: 'black',
    showScale: true
  });
}


