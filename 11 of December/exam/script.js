class Cell {
    constructor(row, col) {
        this._row = row
        this._col = col
        this._content = ""
    };
    get content() {
        return this._content
    };
    set content(value) {
        this._content = value
    };
    get col() {
        return this._col
    };
    set col(value) {
        this._col = value
    };
    get row() {
        return this._row
    };
    set row(value) {
        this._row = value
    };
}

function isGameOver() {
    if ((pitch[0][0].content != "") && (pitch[0][0].content == pitch[1][1].content && pitch[1][1].content == pitch[2][2].content)) return true
    if ((pitch[2][0].content != "") && (pitch[2][0].content == pitch[1][1].content && pitch[1][1].content == pitch[0][2].content)) return true
    if ((pitch[0][0].content != "") && (pitch[0][0].content == pitch[0][1].content && pitch[0][1].content == pitch[0][2].content)) return true
    if ((pitch[1][0].content != "") && (pitch[1][0].content == pitch[1][1].content && pitch[1][1].content == pitch[1][2].content)) return true
    if ((pitch[2][0].content != "") && (pitch[2][0].content == pitch[2][1].content && pitch[2][1].content == pitch[2][2].content)) return true
    if ((pitch[0][0].content != "") && (pitch[0][0].content == pitch[1][0].content && pitch[1][0].content == pitch[2][0].content)) return true
    if ((pitch[0][1].content != "") && (pitch[0][1].content == pitch[1][1].content && pitch[1][1].content == pitch[1][2].content)) return true
    if ((pitch[0][2].content != "") && (pitch[0][2].content == pitch[1][2].content && pitch[1][2].content == pitch[2][2].content)) return true
    return false
};

let pitch = [];
let click = 0;

for (let i = 0; i<3; i++) {
    pitch[i] = []
    for (let j = 0; j<3; j++) {
        pitch[i][j] = new Cell(i, j)
    };
};

function turn(row, col, cell_id)  {
    click++
    pitch[row][col].content = (click % 2) ? 'x' : "o"
    document.getElementById(cell_id).innerHTML = pitch[row][col].content;

    if (isGameOver()) {
        let winner = (click % 2) ? 'крестики' : 'нолики'
        alert(`И у нас есть победитель! Поздравляем команду ${winner}!`)
    };
};

console.log("Здесь ничего нет и не будет!")