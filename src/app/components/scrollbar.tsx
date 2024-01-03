import React from 'react'
import { Components } from 'react-virtuoso'

const CustomScrollbar: Components['Scroller'] = React.forwardRef(({ style, children }, ref) => {
  return (
    <div className={'scrollbar'} style={style} ref={ref}>
      {children}
    </div>
  )
})

CustomScrollbar.displayName = 'CustomScrollbar'

export default CustomScrollbar
