// @flow
import * as React from 'react'
import Image from 'next/image'
import rightArrow from '@/app/components/icons/svg/Chevron-right.svg'
import leftArrow from '@/app/components/icons/svg/Chevron-left.svg'
import { Button } from '@/app/components/button'

type Props = {
  designData: DesignItem[]
  selectedItems: string[]
}

export function Footer({ designData, selectedItems }: Props) {
  const nextButtonClick = () => {
    const filteredNamesArray = designData.filter(item => selectedItems.includes(item.id)).map(item => item.name)
    alert(`You have successfully saved ${filteredNamesArray}`)
  }
  return (
    <div className="flex flex-col pt-6 pb-6 border-t border-neutral-200 justify-between pl-10 pr-10 w-full">
      <div className="">
        <div className="pr-20 pl-10 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4 items-center justify-start ">
            <Image className={'cursor-pointer'} priority src={rightArrow} height={32} width={32} alt={'left'} />
            <div className="text-neutral-800 text-left font-subtitle-1-desktop-heavy-font-family text-subtitle-1-desktop-heavy-font-size leading-subtitle-1-desktop-heavy-line-height font-subtitle-1-desktop-heavy-font-weight relative">
              2/9
            </div>
            <Image className={'cursor-pointer'} priority src={leftArrow} height={32} width={32} alt={'left'} />
          </div>
          <div className="flex flex-row gap-4 items-center justify-end relative">
            <div className="rounded-lg pt-4 pr-6 pb-4 pl-6 flex flex-row gap-2 items-center justify-center  ">
              <Button className={'flex'} onClick={() => {}}>
                <Image className={'cursor-pointer mr-0.5'} src={rightArrow} height={24} width={24} alt={'left'} />
                <div className="text-neutral-800 text-left font-button-desktop-medium-font-family text-button-desktop-medium-font-size leading-button-desktop-medium-line-height font-button-desktop-medium-font-weight ">
                  Previous
                </div>
              </Button>
            </div>
            <Button
              onClick={nextButtonClick}
              className="bg-neutral-800 rounded-lg pt-4 pr-6 pb-4 pl-6 w-[200px] justify-center flex flex-row  items-center">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
