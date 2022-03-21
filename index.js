const rowLimit = 9;
const colLimit =9;
let table = document.createElement('table');
let tbody = document.createElement('tbody');

//ChessBoard creation & color Setting
function creatingTable(){
    table.appendChild(tbody);

    for(let i=0;i<rowLimit;i++){
        let table_row = document.createElement('tr');
        for(let j=0; j<colLimit;j++){
            let table_data = document.createElement('td');
            if(i%2===0){
                if(j%2===0){
                    table_data.style.backgroundColor='black';
                }
            }
            else{
                if(j%2!==0){
                    table_data.style.backgroundColor='black';
                }
            }
    
            table_row.appendChild(table_data);
        }
        tbody.appendChild(table_row);
    }
    
    document.querySelector('body').appendChild(table);
    
}

//function to reset the table
function reset(){
    for(let i=0;i<rowLimit;i++){
        for(let j=0; j<colLimit;j++){
            if(i%2===0){
                if(j%2===0){
                    table.rows[i].cells[j].style.backgroundColor='black';
                }
                else{
                    table.rows[i].cells[j].style.backgroundColor='white';

                }
            }
            else{
                if(j%2!==0){
                    table.rows[i].cells[j].style.backgroundColor='black';
                }
                else{
                    table.rows[i].cells[j].style.backgroundColor='white';

                }
            }

        }
    }
}


//function to color Bishop's move
function colorMoves(rowIndex,colIndex){

    let x = rowIndex, y=colIndex;
    while(x<rowLimit && y<colLimit){
        table.rows[x].cells[y].style.backgroundColor='blue';
        x++;y++;

    }
    x = rowIndex, y=colIndex;
    while(x>=0 && y>=0){
        table.rows[x].cells[y].style.backgroundColor='blue';
        x--;y--;

    }
    x = rowIndex, y=colIndex;
    while(x>=0 && y<colLimit){
        table.rows[x].cells[y].style.backgroundColor='blue';
        x--;y++;

    }
    x = rowIndex, y=colIndex;
    while(x<rowLimit && y>=0){
        table.rows[x].cells[y].style.backgroundColor='blue';
        x++;y--;

    }
    table.rows[rowIndex].cells[colIndex].style.backgroundColor='#ADD8E6';

}

function start(){
    creatingTable();

    const tableCreated = document.querySelector('table');


    //when hover starts
    tableCreated.addEventListener('mouseover',(event)=>{

        let rowIndex = event.target.parentElement.rowIndex;
        let colIndex = event.target.cellIndex;
        console.log("Ankita");
        colorMoves(rowIndex,colIndex);
    
    });

    // //when hover stops
    tableCreated.addEventListener('mouseout',()=>{
        reset();
    });

}


start();



