import React from 'react';
import { Hourglass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Hourglass height={100} width={100}  ariaLabel='Loading' />
    </div>
  )
}

export default Loader
