interface squareProps {
    file: number;
    row: number;
    squareNumber: number;
}

const Square : React.FC<squareProps> = ({file, row, squareNumber}) => {

    const fileLetters : Array<string> = 
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    const rowNumbers : Array<string> =
        ['1', '2', '3', '4', '5', '6', '7', '8'];

    const name : string = fileLetters[file-1] +
        rowNumbers.reverse()[row-1];

    let color : string;

    if (file % 2 === 0 && row % 2 !== 0 ||
        file % 2 !== 0 && row % 2 === 0) {
        color = "bg-goldenDark text-goldenLight";
    } else {
        color = "bg-goldenLight text-goldenDark";
    }

	return (
		<div key={squareNumber}
                className={`${color} h-full w-full flex
                flex-col text-center place-content-center`}>
            <p className="sm:font-bold text-xs sm:text-base
                    lg:text-xl xl:text-2xl">
                {name}
            </p>
            <p className="text-xs sm:text-sm md:text-sm xl:text-lg">
                {squareNumber}
            </p>
        </div>
	)
}

export default Square;
