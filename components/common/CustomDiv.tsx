import { cn } from '@/lib/utils'
import React from 'react'

export default function CustomDiv({children, style, className=""}: {children: React.ReactNode, style?: string, className?: string,}) {
  return (
    <div className={cn(`w-[95%] md:w-[90%] xl:w-4/5 max-w-[1440px] mx-auto px-4 md:px-0 my-10  ${style}  ${className}`, className)}>
        {children}
    </div>
  )
}
