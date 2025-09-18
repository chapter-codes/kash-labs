import React from 'react'

export default function CustomDiv({children, style}: {children: React.ReactNode, style?: string}) {
  return (
    <div className={`w-9/10 md:w-4/5 max-w-[1440px] mx-auto px-4 my-10  ${style}`}>
        {children}
    </div>
  )
}
