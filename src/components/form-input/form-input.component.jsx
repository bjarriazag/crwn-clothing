import React from 'react';
import './form-input.styles.scss';

const FormInput = (propsData) => {
  const { handleChange, label, ...propsInput } = propsData;
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...propsInput} />
      {label ? (
        <label className={`${propsInput.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
