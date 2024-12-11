// Fetch commands from JSON and display them in the list
fetch('commands.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load commands.json');
    }
    return response.json();
  })
  .then(commands => {
    const commandList = document.getElementById('command-list');
    commands.forEach(command => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h3>${command.name}</h3>
        <p>${command.description}</p>
        <pre>${command.usage}</pre>
      `;
      commandList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching commands:', error);
  });
