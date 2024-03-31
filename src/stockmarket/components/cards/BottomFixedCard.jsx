import React from 'react'

function BottomFixedCard({ component1, component2 }) {
    return (
        <div className="fixed bottom-0 left-0 bg-gray-100 w-full flex justify-between items-center p-1 shadow-lg">
            <div className="text-center flex-1">
                <div className="text-xl font-bold text-gray-700">{component1}</div>
                {/* Assuming you want to display something for component1 */}
            </div>
            <div className="text-center">
                <div className="text-xl text-gray-700">{component2}</div>
            </div>
        </div>
    )
}

export default BottomFixedCard
