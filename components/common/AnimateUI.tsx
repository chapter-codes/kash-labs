'use client';

import * as motion from 'motion/react-client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Variants } from 'motion'    ;
// import type { Variants } from 'framer-motion';
interface AnimateProps {
  children: React.ReactNode;
  className?: string;
  style?: string;
  id?: string;
  keyProp?: string | number | boolean;
  type?: "slide" | "fade"
 }

const variants : Record<string, Variants> = {
  slide : {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -18,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
  },

  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
  },
};

export function AnimateDiv({
  children,
  className = '',
  style = '',
  keyProp,
  type = 'slide',
  ...props
}: AnimateProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={keyProp?.toString() || pathname}
      variants={variants[type]}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn('w-full', className, style)}
      layout
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function AnimateSection({
  children,
  className = '',
  style = '',
  keyProp,
  type = 'slide',
  ...props
}: AnimateProps) {
  const pathname = usePathname();

  return (
    <motion.section
      key={keyProp?.toString() || pathname}
      variants={variants[type]}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn('w-full', className, style)}
      layout
      {...props}
    >
      {children}
    </motion.section>
  );
}
