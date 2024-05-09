function Archipelago(box) {
    if (!box || box.length === 0)
    return 0;

    const rows = box.length;
    const cols = box[0].length;
    let islands = 0;

    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || box[row][col] === 'W') return;
        box[row][col] = 'W'; 
        distance(row + 1, col); 
        distance(row - 1, col); 
        distance(row, col + 1); 
        distance(row, col - 1); 
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (box[i][j] === 'L') {
                distance(i, j);
                islands++;
            }
        }
    }

    return islands;
}

// Example usage:
// const map1 = [
//     ["L","L","L","L","W"],
//     ["L","L","W","L","W"],
//     ["L","L","W","W","W"],
//     ["W","W","W","W","W"]
// ];

// console.log(exploreArchipelago(map1)); // Output: 1

// const map2 = [
//     ["L","L","W","W","W"],
//     ["L","L","W","W","W"],
//     ["W","W","L","W","W"],
//     ["W","W","W","L","L"]
// ];

// console.log(exploreArchipelago(map2)); // Output: 3
