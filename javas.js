const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
            rotation: 0,
            mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,0],
                [1,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [1,0,0],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [1,1,1],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
]

var table = document.getElementById("myTable");
function generateTable(rows, cols) {
    var table = document.getElementById("myTable");
    for (var i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            cell.className = "fotabla";
        }
    }
}

// s hegyek helyei
var mountainCoord = [
    { row: 1, col: 1 },
    { row: 3, col: 8 },
    { row: 5, col: 3 },
    { row: 8, col: 9 },
    { row: 9, col: 5 },
];
function changeBackgroundImage(coordinates) {
    var table = document.getElementById("myTable");
    for (var i = 0; i < coordinates.length; i++) {
        var coord = coordinates[i];
        var cell = table.rows[coord.row].cells[coord.col];
        cell.style.backgroundImage = "url('imges/assets/tiles/mountain_tile.png')";
    }
}
var tableRows = 11;
var tableCols = 11;
generateTable(tableRows, tableCols);
changeBackgroundImage(mountainCoord);

let Apoint=0
let Bpoint=0
let Cpoint=0
let Dpoint=0
// abcd
const abcd= document.getElementById("#abcd");

function generateTableabcd(rows, cols) {
    var table = document.getElementById("abcd");
    for (var i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            cell.className = "bottom-right";
            cell.id= String.fromCharCode(65 + i*rows+j);
            cell.textContent = " pont "+ String.fromCharCode(65 + i*rows+j); 
        }
    }    
}

generateTableabcd(2, 2);

const imageUrls = [
   {    kep: "imges/assets/missions_hun/Group 69.png",
        fugg: checkForSideTree
    },
   {    kep: "imges/assets/missions_hun/Group 70.png",
        fugg: countWaterCells
   },
   {    kep: "imges/assets/missions_hun/Group 74.png",
        fugg: checkFor3Trees
   },
   {    kep: "imges/assets/missions_hun/Group 78.png",
        fugg: fullRow
   },
   {    kep: "imges/assets/missions_hun/Group 77.png",
        fugg: emptyBorder
   },
   {    kep: "imges/assets/missions_hun/Group 73.png",
        fugg: oddRow
   },
   {    kep: "imges/assets/missions_hun/Group 79.png",
        fugg: richRow
   },
   {    kep: "imges/assets/missions_hun/Group 76.png",
        fugg: magicValley
   },
   {    kep: "imges/assets/missions_hun/Group 75.png",
        fugg: treenwater
   },
   
];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(imageUrls);

function changeBackgroundabcd(cellId, imageUrl) {
    document.getElementById(cellId).style.backgroundImage = `url('${imageUrl}')`;
}

changeBackgroundabcd("A", imageUrls[0].kep);
changeBackgroundabcd("B", imageUrls[1].kep);
changeBackgroundabcd("C", imageUrls[2].kep);
changeBackgroundabcd("D", imageUrls[3].kep);

// shapes

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.scale(83,83)

context.fillStyle='beige';
context.fillRect(0, 0, canvas.width, canvas.height)


function shape(num) {
    clearCanvas();
    const matrix = elements[num].shape;
    let imgto;
    if (elements[num].type === 'water') {
        imgto = "imges/assets/tiles/water_tile.png";
    }
    if (elements[num].type === 'town') {
        imgto = "imges/assets/tiles/village_tile.png";
    }
    if (elements[num].type === 'forest') {
        imgto = "imges/assets/tiles/forest_tile.png";
    }
    if (elements[num].type === 'farm') {
        imgto = "imges/assets/tiles/plains_tile.png";
    }
// biztos betöltsön a kép
    let imgLoad = 0;
    let imgLoaded = 0;

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                const img = new Image();
                img.src = imgto;
                img.onload = function () {
                    imgLoaded++;
                    if (imgLoaded === imgLoad) {
                        matrix.forEach((row, y) => {
                            row.forEach((value, x) => {
                                if (value !== 0) {
                                    context.drawImage(img, x, y, 1, 1);
                                }
                            });
                        });
                    }
                };
                imgLoad++;
            }
        });
    });
}

const turnbutton = document.getElementById('turnbutton')
const mirrorbutton = document.getElementById('mirrorbutton')

turnbutton.addEventListener('click', rotate);
mirrorbutton.addEventListener('click', mirror)
function clearCanvas() {
    context.fillStyle = 'beige';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

shuffle(elements)

window.onload = function() { next()};

function generateRandomOrder(n) {
    const order = [];
    for (let i = 0; i < n -1; i++) {
        order.push(i);
    }
    const duplicateNumber = Math.floor(Math.random() * (n-1));
    order.push(duplicateNumber);

    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
}

const randomOrderWithDuplicate = generateRandomOrder(17);

let db1=0
function next() { 
    clearCanvas();
    if(db1==18){
        clearCanvas()
        updateButtons()
    }
    if (db1<18){
        currentIndex=randomOrderWithDuplicate[db1]
        console.log(currentIndex)
        shape(currentIndex)
        updateShapeTimeLabel();
        db1 +=1
    }
}

function updateButtons() {
    mirrorbutton.disabled = true;
    turnbutton.disabled = true; 
}

// mirror
function mirrorShape(original) {
    const mirroredm = [];
    for (let y = original.length - 1; y >= 0; y--) {
        const mirroredRow = [];

        for (let x = 0; x < original[y].length; x++) {
            mirroredRow.push(original[y][x]);
        }
        mirroredm.push(mirroredRow);
    }
    return mirroredm;
}
function mirror() {
    
    const original = elements[currentIndex].shape;
    const mirroredm = mirrorShape(original);
    elements[currentIndex].shape = mirroredm;

    if (elements[currentIndex].mirrored === false){
        elements[currentIndex].mirrored =true;
    }
    else(
        elements[currentIndex].mirrored =false
    )
    clearCanvas();
    shape(currentIndex);

}
// forgat
function rotateShape(original) {
    const rotatedm = [];

    for (let x = original[0].length - 1; x >= 0; x--) {
        const rotatedRow = [];
        for (let y = 0; y < original.length; y++) {
            rotatedRow.push(original[y][x]);
        }
        rotatedm.push(rotatedRow);
    }
    return rotatedm;
}
function rotate() {
    if (elements[currentIndex]) {
        const original = elements[currentIndex].shape;

        const rotatedm = rotateShape(original);
        elements[currentIndex].shape = rotatedm;
        clearCanvas();
        shape(currentIndex);
    }
  
    if (elements[currentIndex].rotation === 0) {
        elements[currentIndex].rotation = 1;
    } else if (elements[currentIndex].rotation === 1) {
        elements[currentIndex].rotation = 2;
    } else if (elements[currentIndex].rotation === 2) {
        elements[currentIndex].rotation = 3;
    } else if (elements[currentIndex].rotation === 3) {
        elements[currentIndex].rotation = 0;
    }
}


// lehelyezés
function getImageUrl(shapeType) {
    switch (shapeType) {
        case 'water':
            return "imges/assets/tiles/water_tile.png";
        case 'town':
            return "imges/assets/tiles/village_tile.png";
        case 'forest':
            return "imges/assets/tiles/forest_tile.png";
        case 'farm':
            return "imges/assets/tiles/plains_tile.png";
        default:
            return "imges/assets/tiles/plains_tile.png";
    }
}

table.addEventListener('click', place);
function place(event) {
    const clickedCell = event.target;

    if (clickedCell.tagName === 'TD' && db1<=17) {
       
        const rowIndex = clickedCell.parentNode.rowIndex;
        const colIndex = clickedCell.cellIndex;
        let matrix = elements[currentIndex].shape;
        let trues = true; 

        let lenrow=3
        if(rowIndex ==9 ) {
            lenrow=2
           if( matrix[2][0]==1 || matrix[2][1]==1 || matrix[2][2]==1 ){
            trues=false
           }
        }
        if(rowIndex ==10){
            lenrow=1
            if( matrix[2][0]==1 || matrix[2][1]==1 || matrix[2][2]==1||
                matrix[1][0]==1 || matrix[1][1]==1 || matrix[1][2]==1){
                trues=false
            2}
        }
        let lencol=3
        if(colIndex ==10){
            lencol=1
            if( matrix[0][2]==1 || matrix[1][2]==1 || matrix[2][2]==1 |
                matrix[0][1]==1 || matrix[1][1]==1 || matrix[2][1]==1 ){
                trues=false
            }
        }
        if(colIndex ==9) {
            lencol=2
            if( matrix[0][2]==1 || matrix[1][2]==1 || matrix[2][2]==1 ){
                trues=false
            }
        }
        for (let i = 0; i < lenrow; i++) {
            for (let j = 0; j<lencol; j++) {
                const cell = table.rows[rowIndex + i].cells[colIndex + j];
                if (cell.style.backgroundImage != '' && matrix[i][j] == 1) {
                    trues = false;
                }
            }
        }
        // lehelyezés
        if(trues){
            for (let i =0 ; i<lenrow; i++){
                for (let j =0 ; j<lencol; j++){
                    const cell =table.rows[rowIndex+i].cells[colIndex+j]
                    if ( cell.style.backgroundImage !== 'url("imges/assets/tiles/mountain_tile.png")') {
                        if(matrix[i][j]==1){
                            const img = new Image();
                            img.src = getImageUrl(elements[currentIndex].type);
                            cell.style.backgroundImage = `url('${img.src}')`;      
                        }       
                    }
                }   
            }
            backTimeSeason()
            next()
        } 
    }
}

// idő 28 
function updateShapeTimeLabel() {
    const shapeTimeLabel = document.getElementById('shapetime');
    const times = elements[currentIndex].time;
    if (shapeTimeLabel) {
        shapeTimeLabel.textContent = 'időegység: '+ times.toString();
    }
}

// Évszakokból hártalevő idő: 7/7
let remainingTotalTime = 7;

function backTimeSeason() {
    const backTimeElement = document.getElementById('backtime');
    if (backTimeElement && elements[currentIndex ]) {
        remainingTotalTime -= elements[currentIndex].time;

        if (remainingTotalTime < 0) {
            remainingTotalTime = 6;
            season()
        }
        if (remainingTotalTime === 0) {
            remainingTotalTime = 7;
            season()
        }
        backTimeElement.textContent = 'Évszakokból hártalevő idő: ' + remainingTotalTime + '/7';
        if(db1==17){
            backTimeElement.textContent = 'Évszakokból hártalevő idő: '+ '-/7';  

        }
    }
}

function updateCellContent(row, col, points) {
    var table = document.getElementById("abcd");
    var cell = table.rows[row].cells[col];
    cell.textContent = points + " pont  " + cell.id;
}

// jelenlegi évszak
 let tavaszpontok=0
 let nyarpontok=0
 let oszpontok=0

function highLight() {
    const table = document.getElementById('abcd');
    const seasonnow = document.getElementById('seasons');

    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].style.border = 'none';
        }
    }
    if (seasonnow.textContent === 'Jelenlegi évszak: TAVASZ (AB)') {
        table.rows[0].cells[0].style.border = '4px solid red';
        table.rows[0].cells[0].style.borderRadius = '15px';
        table.rows[0].cells[1].style.border = '4px solid red';
        table.rows[0].cells[1].style.borderRadius = '15px';
    }
    if (seasonnow.textContent==='Jelenlegi évszak: NYÁR (BC)') {
        table.rows[0].cells[1].style.border = '4px solid red';
        table.rows[0].cells[1].style.borderRadius = '15px';
        table.rows[1].cells[0].style.border = '4px solid red';
        table.rows[1].cells[0].style.borderRadius = '15px';
    }
    if (seasonnow.textContent==='Jelenlegi évszak: ŐSZ (CD)') {
        table.rows[1].cells[0].style.border = '4px solid red';
        table.rows[1].cells[0].style.borderRadius = '15px';
        table.rows[1].cells[1].style.border = '4px solid red';
        table.rows[1].cells[1].style.borderRadius = '15px';
    }
    if (seasonnow.textContent==='Jelenlegi évszak: TÉl (DA)') {
        table.rows[1].cells[1].style.border = '4px solid red';
        table.rows[1].cells[1].style.borderRadius = '15px';
        table.rows[0].cells[0].style.border = '4px solid red';
        table.rows[0].cells[0].style.borderRadius = '15px';
    }
}
highLight()

function season(){
    const seasonnow = document.getElementById('seasons');
    
    if( seasonnow.textContent==='Jelenlegi évszak: TAVASZ (AB)'){
        Apoint+= imageUrls[0].fugg();
        Bpoint+= imageUrls[1].fugg();
       
        const tavasz =document.getElementById('t')
        tavasz.textContent= score+" Pont"
        tavaszpontok=score
        updateCellContent(0, 0, Apoint);
        updateCellContent(0, 1, Bpoint);
       
        seasonnow.textContent='Jelenlegi évszak: NYÁR (BC)'
        highLight()
    }
    else if( seasonnow.textContent==='Jelenlegi évszak: NYÁR (BC)'){
        Bpoint+= imageUrls[1].fugg()
        Cpoint+= imageUrls[2].fugg()

        const nyar =document.getElementById('ny')
        nyar.textContent=(score-tavaszpontok)+" Pont"
        nyarpontok= score-tavaszpontok  
        updateCellContent(0, 1, Bpoint);
        updateCellContent(1, 0, Cpoint);
      
        seasonnow.textContent='Jelenlegi évszak: ŐSZ (CD)'
        highLight()
        
    }
    else if( seasonnow.textContent==='Jelenlegi évszak: ŐSZ (CD)'){
        Cpoint+= imageUrls[2].fugg()
        Dpoint+= imageUrls[3].fugg()

        const osz =document.getElementById('o')
        osz.textContent=(score-nyarpontok-tavaszpontok)+" Pont"
        oszpontok = score-nyarpontok-tavaszpontok
        updateCellContent(1, 0, Cpoint);
        updateCellContent(1, 1, Dpoint);
     
        seasonnow.textContent='Jelenlegi évszak: TÉl (DA)'
        highLight()
    }
    else if( seasonnow.textContent==='Jelenlegi évszak: TÉl (DA)'){
        Dpoint+=imageUrls[3].fugg()
        Apoint += imageUrls[0].fugg()
        const tel =document.getElementById('te')
        tel.textContent=(score-oszpontok-tavaszpontok-nyarpontok)+" Pont"
        updateCellContent(1, 1, Dpoint);
        updateCellContent(0, 0, Apoint);
        highLight()
        seasonnow.textContent='Jelenlegi évszak: -'
        allBorderMountain()
        updateButtons;
    }
}

// erdőszéle
let score =0
const scorewrite = document.getElementById('sumscore')
function checkForSideTree(){
   
    let point=0
    const table = document.getElementById('myTable')

    for (let i=0; i<11;i++){
        if ( table.rows[i].cells[0].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ){
            point +=1
        }
        if ( table.rows[i].cells[10].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ){
            point +=1
        }
    }
// 4 sarok

    if ( table.rows[0].cells[0].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ){
        point -=1
    }
    if ( table.rows[10].cells[10].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ){
        point -=1
    }
    if ( table.rows[0].cells[10].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ){
        point -=1
    }
    if ( table.rows[10].cells[0].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ){
        point -=1
    }
    for (let j =0; j<11; j++){
        if ( table.rows[0].cells[j].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ){
            point+=1
        }
        if ( table.rows[10].cells[j].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ){
            point +=1
        }
    }
    score += point
   
    updateScore(0) 
    return point
}
// álmos 3 zoldmező
function checkFor3Trees(){
    let count=0
    let db=0
    for (let i = 0; i <11; i++){
        for(let j =0 ; j<11;j++){
            if (table.rows[i].cells[j].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png')){
                count++
            }
        }
        if(count===3){
            db +=4
        }
        count=0
    }
    score+=db
    updateScore()
    return db
}
function updateScore(){
    scorewrite.textContent = 'Összesen: ' + score + ' pont'
}
//  viz fa mellett krumpliontozes
function countWaterCells() {
    const table = document.getElementById("myTable");
    let db =0
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            const cell = table.rows[i].cells[j];
            if (cell.style.backgroundImage.includes('imges/assets/tiles/water_tile.png')) {
                if (waterNextToTree2(table, i, j)) {
                    db +=2;
                }
            }
        }
    }
    score+=db
    updateScore();
    return db
}
function waterNextToTree2(table, i, j) {
    if (i > 0 && table.rows[i - 1].cells[j].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png')) {
        return true;
    }
    if (j > 0 && table.rows[i].cells[j - 1].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png')) {
        return true;
    }
    if (j < 10 && table.rows[i].cells[j + 1].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png')) {
        return true;
    }
    if (i < 10 && table.rows[i + 1].cells[j].style.backgroundImage.includes('imges/assets/tiles/forest_tile.png')) {
        return true;
    }
    return false;
}

// a hegyek körül
function allBorderMountain() {
    const table = document.getElementById("myTable");
    let db =0
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            const cell = table.rows[i].cells[j];
            if (cell.style.backgroundImage.includes('imges/assets/tiles/mountain_tile.png')) {
                if (roundMountain(table, i, j)) {
                    db++;
                }
            }
        }
    }
    score+=db
    updateScore();
    return db
}
function roundMountain(table, i, j) {
    if (i > 0 && table.rows[i - 1].cells[j].style.backgroundImage != '') {
        if (j > 0 && table.rows[i].cells[j - 1].style.backgroundImage != '') {
             if (j < 10 && table.rows[i].cells[j + 1].style.backgroundImage != '') {
                    if (i < 10 && table.rows[i + 1].cells[j].style.backgroundImage !='') {
                    return true;
                }
            }
        }
    }
    return false;
}
// hatarvidek
function fullRow() {
    const table = document.getElementById('myTable');
    let db=0
    let ki=0
    for (let i = 0; i < 11; i++) {
        let isFullRow = true;
        db=0
        for (let j = 0; j < 11; j++) {
            const cell = table.rows[i].cells[j];

            if (cell.style.backgroundImage.includes('imges/assets/tiles/water_tile.png') || 
             cell.style.backgroundImage.includes('imges/assets/tiles/village_tile.png') ||
             cell.style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ||
             cell.style.backgroundImage.includes('imges/assets/tiles/mountain_tile.png') || 
             cell.style.backgroundImage.includes('imges/assets/tiles/plains_tile.png') ) {
                db++
            }
        }
        if (db===11) {
            ki += 6; 
        }
    }
    for (let i = 0; i < 11; i++) {
        let isFullRow = true;
        db=0
        for (let j = 0; j < 11; j++) {
            const cell = table.rows[j].cells[i];

            if (cell.style.backgroundImage.includes('imges/assets/tiles/water_tile.png') || 
            cell.style.backgroundImage.includes('imges/assets/tiles/village_tile.png') ||
             cell.style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ||
             cell.style.backgroundImage.includes('imges/assets/tiles/mountain_tile.png') || 
             cell.style.backgroundImage.includes('imges/assets/tiles/plains_tile.png') ) { 
                db++
            }
        }

        if (db===11) {
            ki += 6; 
        }
    }
    score+=ki;
    updateScore();
    return ki
}

// plusz

// üres telek

function emptyBorder() {
    const table = document.getElementById("myTable");
    let db =0
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            const cell = table.rows[i].cells[j];
            if (cell.style.backgroundImage =='') {
                if (emptyBorder2(table, i, j)) {
                    db +=2;
                }
            }
        }
    }
    score+=db
    updateScore();
    return db
}
function emptyBorder2(table, i, j) {
    if (i > 0 && table.rows[i - 1].cells[j].style.backgroundImage.includes('imges/assets/tiles/village_tile.png')){
        return true;
    }
    if (j > 0 && table.rows[i].cells[j - 1].style.backgroundImage.includes('imges/assets/tiles/village_tile.png')) {
        return true;
    }
    if (j < 10 && table.rows[i].cells[j + 1].style.backgroundImage.includes('imges/assets/tiles/village_tile.png')) {
        return true;
    }
    if (i < 10 && table.rows[i + 1].cells[j].style.backgroundImage.includes('imges/assets/tiles/village_tile.png')) {
        return true;
    }
    return false;
}
// 10p ptlan oszlop

function oddRow() {
    const table = document.getElementById('myTable');
    let db=0
    let ki=0
   
    for (let i = 0; i < 11; i+=2) {
        let isFullRow = true;
        db=0
        for (let j = 0; j < 11; j ++) {
            const cell = table.rows[j].cells[i];
            if (cell.style.backgroundImage.includes('imges/assets/tiles/water_tile.png') || 
                cell.style.backgroundImage.includes('imges/assets/tiles/village_tile.png') ||
                cell.style.backgroundImage.includes('imges/assets/tiles/forest_tile.png') ||
                cell.style.backgroundImage.includes('imges/assets/tiles/mountain_tile.png') || 
                cell.style.backgroundImage.includes('imges/assets/tiles/plains_tile.png') ) {
                db++
            }
        }
        if (db===11) {
            ki += 10; 
        }
    }
    score+=ki;

    updateScore();
    return ki
}
// gazdag vidék
function richRow() {
    const table = document.getElementById('myTable');
    let db=0
    let ki=0
    for (let i = 0; i < 11; i++) {
        let isFullRow = true;
         const hash = new Set();
      
        for (let j = 0; j < 11; j++) {
            const cell = table.rows[i].cells[j];
            if(cell.style.backgroundImage !=''){
                hash.add(cell.style.backgroundImage)
            }
        }
        if (hash.size>4) {
            ki += 4; 
        }
    }
    score+=ki;
    updateScore();
    return ki
}
// mágusok völgye

function magicValley() {
    const table = document.getElementById("myTable");
    let db =0
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            const cell = table.rows[i].cells[j];
            if (cell.style.backgroundImage.includes('imges/assets/tiles/water_tile.png')) {
                if (magicValley2(table, i, j)) {
                    db +=3;
                }
            }
        }
    }
    score+=db
    updateScore();
    return db
}
function magicValley2(table, i, j) {
    if (i > 0 && table.rows[i - 1].cells[j].style.backgroundImage.includes('imges/assets/tiles/mountain_tile.png')) {
        return true;
    }
    if (j > 0 && table.rows[i].cells[j - 1].style.backgroundImage.includes('imges/assets/tiles/mountain_tile.png')) {
        return true;
    }
    if (j < 10 && table.rows[i].cells[j + 1].style.backgroundImage.includes('imges/assets/tiles/mountain_tile.png')) {
        return true;
    }
    if (i < 10 && table.rows[i + 1].cells[j].style.backgroundImage.includes('imges/assets/tiles/mountain_tile.png')) {
        return true;
    }
    return false;
}

// öntöztöcsatorna

function treenwater(){
    const table = document.getElementById("myTable");
    let db=0
    for (let i = 0; i <11; i++) {
        let water=0
        let tree=0
        for (let j = 0; j < 11; j++) {
            const cell = table.rows[j].cells[i];
            if (cell.style.backgroundImage.includes('imges/assets/tiles/water_tile.png')) {
                water+=1
            }
            if (cell.style.backgroundImage.includes('imges/assets/tiles/forest_tile.png')) {
                tree+=1
            }
        }
        if(tree==water && tree>0){
            db+=4
        }
    }
    score+=db
    updateScore();
    return db
}