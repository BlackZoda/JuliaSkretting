import Square from "./Square";

const Board = () => {
    const squares = [];

    for (let row = 1; row <= 8; row++) {
        for (let file = 1; file <= 8; file++) {

            const squareNumber = (row - 1) * 8 + file;

            squares.push(
                <Square key={squareNumber}
                        file={file}
                        row={row}
                        squareNumber={squareNumber} />
            );
        } 
    }

    return (
        <div className="w-[60vw] h-[60vw] grid grid-rows-8 grid-cols-8
                rounded-lg overflow-hidden">
           {squares.map(sq => sq)} 
        </div>
    )
}

export default Board;
