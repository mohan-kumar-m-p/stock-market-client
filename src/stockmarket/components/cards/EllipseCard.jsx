import React from 'react'

function EllipseCard() {
    return (
        <div className="flex overflow-x-auto p-4 space-x-4 bg-transparent ">
            {Array.from({ length: 30 }).map((_, index) => (
                <div key={index} className="flex justify-center items-center w-32 h-10 md:w-40 md:h-24 bg-white rounded-full flex-shrink-0 border-2 border-border-gray">
                    <p className="text-center">Item {index + 1}</p>
                </div>
            ))}
        </div>
    )
}

export default EllipseCard