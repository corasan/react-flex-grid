import React from 'react'

export default function (isRequired, componentType) {
  return (props, propName, componentName) => {
    const prop = props[propName]
    if (prop === null) {
      if (isRequired) {
        throw new Error(`${propName} is required`)
      }
    } else {
      React.Children.forEach(prop, (child) => {
        if (child.type !== componentType) {
          throw new Error(`${componentName} only accepts ${prop} components as child`)
        }
      })
      console.log(componentName)
    }
  }
}
