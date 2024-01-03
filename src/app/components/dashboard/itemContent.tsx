// @flow
import * as React from 'react'
import Image from 'next/image'

interface Item {
  id: string
  name: string
  image: string
}

interface ItemContentProps {
  item: Item
  selectedItems: string[] // Assuming item ids are strings, adjust accordingly
  handleItemClick: (itemId: string) => void
}
export function ItemContent({ item, selectedItems, handleItemClick }: ItemContentProps) {
  return (
    <div className={` flex flex-col gap-4 mb-6 items-center justify-center`}>
      <div
        onClick={() => handleItemClick(item.id)}
        className={`${
          selectedItems.includes(item.id) ? 'border-[#E5B62C]' : 'border-white'
        } border-2 cursor-pointer w-[142px] h-[142px] relative  rounded-[9.26px] bg-[#F0EFED]`}>
        <input
          id={`checked-checkbox-${item.id}`}
          checked={selectedItems.includes(item.id)}
          type="checkbox"
          onChange={() => {}}
          className=" text-neutral-800 bg-neutral-800  border-gray-300 rounded checked:text-neutral-800  absolute z-50 right-[6px] top-[5px] checked:block hidden"></input>
        <Image
          alt={item.name}
          // width={142}
          // height={142}
          layout="fill"
          className={'h-[100%] rounded-[9.26px]'}
          src={item.image}
        />
      </div>
      <div className="text-neutral-800 text-center font-body-1-desktop-medium-font-family text-body-1-desktop-medium-font-size leading-body-1-desktop-medium-line-height font-body-1-desktop-medium-font-weight relative self-stretch">
        {item.name}
      </div>
    </div>
  )
}
