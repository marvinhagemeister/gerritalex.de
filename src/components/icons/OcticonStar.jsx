import React, { memo } from 'react';

export const OcticonStar = memo(({ extraClasses = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={['octicon', extraClasses].join(' ').trim()}
    aria-label="stars"
    width="14"
    height="16"
  >
    <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" />
  </svg>
));
