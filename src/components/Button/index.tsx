import { ReactNode } from 'react'
import './Button.css'
import styles from './Button.module.css'

const Button = ({
  children,
  isModules,
}: {
  children: ReactNode
  isModules: boolean
}) => <button className={isModules ? styles.root : 'button'}>{children}</button>

export default Button
