import React from 'react';

function TitleCard({ title = '', searchComponent = null }) {
  return (
    <div className="flex items-center justify-between p-2 bg-background text-gray-dark font-serif mt-2">
      <div className="flex-1"></div>
      {/* Center title without absolute positioning */}
      <h1 className="px-4 text-lg md:text-xl lg:text-2xl font-bold text-center flex-none">{title}</h1>
      {/* Adjusted searchComponent without additional z-index */}
      <div className="flex-1 flex justify-end">
        {searchComponent ? <div>{searchComponent}</div> : <div></div>}
      </div>
    </div>
  );
}

export default TitleCard;
