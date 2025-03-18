const grid = document.querySelector('#container');
grid.style.cssText = "display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;";

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.style.cssText = "display: flex; flex: 1;";
    row.classList.add('row');  // ✅ Use a string

    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');  // ✅ Use a string
        cell.style.cssText = "flex: 1; border: 1px solid black; background: orange;";
        row.appendChild(cell);
    }
    grid.appendChild(row);
}