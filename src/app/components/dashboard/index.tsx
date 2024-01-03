'use client'
import React, { HTMLAttributes } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Service from '../../../service'
import { VirtuosoGrid } from 'react-virtuoso'
import styled, { StyledComponent } from '@emotion/styled'
import Image from 'next/image'
import leftArrow from '../icons/svg/Chevron-left.svg'
import rightArrow from '../icons/svg/Chevron-right.svg'
import { Button } from '@/app/components/button'
import CustomScrollbar from '@/app/components/scrollbar'
import { Logo } from '@/app/components/logo'
import { ItemContent } from '@/app/components/dashboard/itemContent'
import { Footer } from '@/app/components/dashboard/footer'
import { Header } from '@/app/components/dashboard/header'
const ItemContainer = styled.div`
  width: 25%;
  display: flex;
  flex: none;
  align-content: stretch;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`

const ItemWrapper = styled.div`
  flex: 1;
  text-align: center;
  font-size: 80%;
  //   padding: 1rem 1rem;
  //border: 1px solid var(gray);
  white-space: nowrap;
`

const ListContainer: StyledComponent<'div', any, HTMLAttributes<HTMLDivElement>> = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Dashboard: React.FC = () => {
  const [designData, setDesignData] = useState<DesignItem[]>([])
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleItemClick = (itemId: any) => {
    // Check if the item is already selected
    const isSelected = itemId && selectedItems.includes(itemId)

    if (isSelected) {
      // If selected, remove it from the array
      setSelectedItems(selectedItems.filter(id => id !== itemId))
    } else {
      // If not selected, add it to the array
      setSelectedItems([...selectedItems, itemId])
    }
  }

  const DesingStyleList = async () => {
    try {
      const response = await Service.getProductList()
      if (response?.data) {
        setDesignData(response?.data)
      }
    } catch (error) {
      console.log('error-', error)
    }
  }

  useEffect(() => {
    DesingStyleList().then()
  }, [])

  const nextButtonClick = () => {
    const filteredNamesArray = designData.filter(item => selectedItems.includes(item.id)).map(item => item.name)
    alert(`You have successfully saved ${filteredNamesArray}`)
  }

  return (
    <div className={'bg-[#ffffff] flex-1 w-full h-dvh'}>
      <div className="flex">
        <div className="w-[42%]">
          <img className={'w-full h-dvh'} src="/images/mason-hassoun.png" />
        </div>
        <div className="flex w-[58%]">
          <div className="pt-10 w-full ">
            <div className="">
              <div className="pr-[104px] pl-[104px] flex flex-col ">
                <Header selectedItems={selectedItems} designData={designData} />
                <div id="virtuso-container" className="flex pt-6">
                  <VirtuosoGrid
                    data={designData}
                    style={{ height: 489, width: '100%' }}
                    totalCount={designData.length}
                    components={{
                      Item: ItemContainer,
                      List: ListContainer,
                      Scroller: CustomScrollbar
                    }}
                    itemContent={(index, item: { id: string; image: string; name: string }) => (
                      <ItemWrapper className={'grid-cols-1'} key={`wrapper-${item.id}`} id={item.id}>
                        <ItemContent item={item} selectedItems={selectedItems} handleItemClick={handleItemClick} />
                      </ItemWrapper>
                    )}
                  />
                </div>
              </div>
            </div>
            <Footer designData={designData} selectedItems={selectedItems} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
