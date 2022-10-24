import React from 'react';
import { useState } from 'react';

function Mouth(props) {

    const [carve, setCarve] = useState('polygon(0 0, 1px 1px)')
    const [line, setLine] = useState([])
    const [finish, setFinish] = useState([])

    const carving = (event) => {
        var rect = event.target.getBoundingClientRect();
        let x = Math.floor(event.clientX - rect.x)
        let y = Math.floor(event.clientY - rect.y)
        let tempLine = line;
        let tempFinish = finish;
        if (!tempLine.length) {
            tempLine.push(`${x}px ${y}px`)
            tempFinish.push(`${x}px ${y}px`)
            tempLine.push(`${x - 1}px ${y - 1}px`)
            setLine(tempLine)
            setFinish(tempFinish)
        } else if (tempLine.length) {
            let startingPosition = tempLine[0].split(" ")
            let positionX = startingPosition[0].replace('px', '')
            let positionY = startingPosition[1].replace('px', '')
            console.log(positionX)
            if (Math.abs(positionX - x) < 10 && Math.abs(positionY - y) < 10) {
                tempFinish.push(tempLine[0]);
                setFinish(tempFinish);
            } else {
                let position = tempLine.length/2;
                tempLine.splice(position, 0, `${x}px ${y}px` );
                tempLine.splice(position + 1, 0, `${x - 1}px ${y - 1}px` );
                tempFinish.push(`${x}px ${y}px`);
                setLine(tempLine);
                setFinish(tempFinish);
            }
        }
        if (tempFinish[0] == tempFinish[tempFinish.length - 1]) {
            let positions = tempFinish.join(", ");
            let almostDone = `polygon(${positions})`;
            setCarve(almostDone);
        } else {
            let positions = tempLine.join(", ");
            let almostDone = `polygon(${positions})`;
            setCarve(almostDone);
        }
    }

    return (
        <div className="carveSpace mouth" onClick={carving}>
            <div className="carving" style={{ clipPath: `${carve}`}}></div>
        </div>
    );
}

export default Mouth;