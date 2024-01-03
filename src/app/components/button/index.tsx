import * as React from 'react'

type Props = {
  children?: React.ReactNode
  onClick: () => void
  className?: string
}

export function Button({ children, ...props }: Props) {
  return <button {...props}>{children}</button>
}
