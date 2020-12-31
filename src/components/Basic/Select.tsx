import React from 'react';

import classNames from 'classnames';
import _ from 'lodash';

import { AppComponent } from '../../types/AppComponent';
import {
  SelectProps,
  SelectTypeName,
} from '../../types/InputComponentSchema';
import BaseInputComponent from '../BaseInputComponent';

interface SelectComponentProps extends SelectProps {
  className: string;
  value: string;
  path?: string;
  onValueChange(value: string): void;
}

const Select: AppComponent<SelectComponentProps> = (props) => {
  const selectValidate = (_value: string): string | null => {
    if (props.validations === undefined) {
      return null;
    }

    // TODO: add some validations
    return '';
  };

  let value;
  if (props.data?.allowMultiSelection === true) {
    value = props.value || props.data?.defaultValue;
    // we always use only an array as a value for multiple selection
    if (!_.isArray(value)) {
      value = [];
    }
  } else {
    value = props.value || props.data?.defaultValue;
    if (!_.isString(value)) {
      value = '';
    }
  }

  return (
    <BaseInputComponent
      name={props.name}
      display={props.display}
      data={props.data}
      value={value}
      onValueChange={props.onValueChange}
      validate={selectValidate}
      inputType={SelectTypeName}
      className={classNames(props.className, `appitsy-${SelectTypeName}`)}
    />
  );
};

Select.validateSchema = (_component: any) => true;

Select.checkRerender = (prevProps, nextProps) => prevProps.value === nextProps.value && prevProps.display === nextProps.display;

export default React.memo<SelectComponentProps>(props => <Select {...props} />, Select.checkRerender);