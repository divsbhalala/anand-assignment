// @flow
import * as React from 'react'
import { Button } from '@/app/components/button'
import { Logo } from '@/app/components/logo'

type Props = {
  selectedItems: string[]
  designData: DesignItem[]
}

export function Header({ selectedItems, designData }: Props) {
  return (
    <>
      <Logo />{' '}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start">
          <div>
            <span className="font-heading-h-4-desktop-medium-font-weight font-heading-h-4-desktop-medium-font-family text-neutral-850-main heading-h-4-desktop-medium-font-family  text-heading-h-4-desktop-medium-font-size">
              Pick your favourite products
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-600 font-heading-h-4-desktop-medium-font-weight text-heading-h-3-mobile-medium-font-size">
              Select upto {selectedItems.length} out of {designData.length} products
            </span>
          </div>
        </div>
        <div className="">
          <Button
            className={
              'text-neutral-800 text-left font-button-desktop-medium-font-family text-button-desktop-medium-font-size leading-button-desktop-medium-line-height font-button-desktop-medium-font-weight relative'
            }
            onClick={() => {}}>
            Skip
          </Button>
        </div>
      </div>
    </>
  )
}
