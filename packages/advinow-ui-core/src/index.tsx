import * as React from 'react'
import styles from './styles.module.css'
import './tailwind.css'

interface Props {
  text: string
}

export * from './Button'
export * from './Alert'

export const ExampleComponent = ({ text }: Props) => {
  return (
    <div className={styles.test}>
      Component Test: {text}{' '}
      <div className='text-4xl text-red-500'>This is amazing</div>{' '}
    </div>
  )
}
