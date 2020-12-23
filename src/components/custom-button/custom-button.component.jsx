import React from 'react';
import './custom-button.styles.scss';

const CustomButton = (propsData) => {
  const { children, ...buttonProps } = propsData;
  const { btnType } = buttonProps;
  return (
    <button type={btnType ? 'submit' : 'button'} className="custom-button" {...buttonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
