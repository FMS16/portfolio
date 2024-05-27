import React from 'react';

const Dodecahedron = ({ left, top, valueSize }) => {

    let defaultWidth = 100;
    let defaultHeight = 223;
    let defaultZ = 69;

    const style = {
        position: 'absolute',
        width: `${defaultWidth * valueSize}px`,
        height: `${defaultHeight * valueSize}px`,
        zIndex: 10,
        transformStyle: 'preserve-3d',
        animation: 'rotate 125s infinite linear',
        left: `${left}%`,
        top: `${top}%`,
    };

    // Define los estilos para cada pentágono
    const pentagonStyles = [
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            transform: `rotateY(0.2turn) translateZ(${defaultZ * valueSize}px) rotateX(26.5deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            transform: `rotateY(0.4turn) translateZ(${defaultZ * valueSize}px) rotateX(26.5deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            transform: `rotateY(0.6turn) translateZ(${defaultZ * valueSize}px) rotateX(26.5deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            transform: `rotateY(0.8turn) translateZ(${defaultZ * valueSize}px) rotateX(26.5deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            transform: `rotateY(1turn) translateZ(${defaultZ * valueSize}px) rotateX(26.5deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            bottom: 0, 
            transform: `rotateY(0.2turn) translateZ(-${defaultZ * valueSize}px) rotateX(206.5deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            bottom: 0, 
            transform: `rotateY(0.4turn) translateZ(-${defaultZ * valueSize}px) rotateX(206.5deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            bottom: 0, 
            transform: `rotateY(0.6turn) translateZ(-${defaultZ * valueSize}px) rotateX(206.5deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            bottom: 0, 
            transform: `rotateY(0.8turn) translateZ(-${defaultZ * valueSize}px) rotateX(206.5deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            bottom: 0, 
            transform: `rotateY(1turn) translateZ(-${defaultZ * valueSize}px) rotateX(206.5deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            transform: `translateZ(${defaultZ * valueSize}px) rotateX(-90deg)` 
        },
        { 
            ...getPentagonCommonStyles(defaultWidth, valueSize), 
            bottom: 0, 
            transform: `translateZ(-${defaultZ * valueSize}px) rotateX(90deg)` 
        },
    ];

    function getPentagonCommonStyles(width, size) {
        return {
            position: 'absolute',
            width: `${width * size}px`,
            opacity: 0.8,
        };
    }

    function getPentagonDivStyles(width, size, z) {
        return {
            position: 'absolute',
            width: `${width * size}px`,
            height: `${z * size}px`,
            transformOrigin: 'bottom',
            borderTop: '2px solid #3f3f3f',
        };
    }

    return (
        <div className="dodecahedron" style={style}>
            {[...Array(12)].map((_, index) => (
                <div key={index} className="pentagon" style={pentagonStyles[index]}>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} style={getPentagonDivStyles(defaultWidth, valueSize, defaultZ)}></div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Dodecahedron;
