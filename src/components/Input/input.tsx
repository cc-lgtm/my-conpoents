import React from 'react';
import classNames from 'classnames';

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean
  size?: InputSize
  type?: 'text' | 'password'
  prepend?: string | React.ReactElement
  append?: string | React.ReactElement
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {
  const { disabled, size, type } = props;

  return (
    <input type={type} disabled={disabled} />
  )
}

export default Input;