import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'ghost'
}

function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  const classes = className ? `btn btn--${variant} ${className}` : `btn btn--${variant}`

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button