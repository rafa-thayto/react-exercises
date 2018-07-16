import React from 'react'

export const childrenWithProps = (props) => {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      ...props, ...child.props
    })
  })
}
