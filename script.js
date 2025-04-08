// Fetch flip opportunities from the backend API
fetch('https://your-backend-api-url.com/flips')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('flipTable');
    const tableHTML = `
      <table>
        <thead>
          <tr>
            <th>Buy City</th>
            <th>Sell City</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(flip => `
            <tr>
              <td>${flip.buy_city}</td>
              <td>${flip.sell_city}</td>
              <td>${flip.buy_price}</td>
              <td>${flip.sell_price}</td>
              <td>${flip.profit}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    table.innerHTML = tableHTML;
  })
  .catch(error => console.error('Error fetching flip data:', error));
