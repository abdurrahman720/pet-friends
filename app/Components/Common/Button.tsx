import React from 'react'

type Props = {
    children: React.ReactNode;
    variant : 'primary' | 'secondary';
}

const Button = ({children, variant}: Props) => {
    return (
      <button className={`${variant === 'primary' ? 'bg-primary text-white' : 'bg-white text-primary'} px-5 py-3 text-lg rounded`}>
        {children}
      </button>
    );
}

export default Button