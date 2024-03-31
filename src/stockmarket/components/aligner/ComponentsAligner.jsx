import React from 'react'
import TitleCard from '../cards/TitleCard'
import EllipseCard from '../cards/EllipseCard'
import ProductCard from '../cards/ProductCard'
import BottomFixedCard from '../cards/BottomFixedCard'
import SearchInput from '../core/SearchInput'

function ComponentsAligner({ title, products = [], bottomCardComponent, navLink }) {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <TitleCard
        title={title}
        searchComponent={<SearchInput />}
      />
      <ProductCard
        products={products}
        navLink={navLink}
      />
      <BottomFixedCard component2={bottomCardComponent} />
    </div>
  );
}

export default ComponentsAligner