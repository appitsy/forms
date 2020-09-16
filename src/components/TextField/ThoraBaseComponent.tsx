import React, { useEffect, useState } from 'react';
import { BaseTextComponentSchema } from '../../types/ComponentSchema';
import Label from '../Labels/Label';
import ErrorLabel from '../Labels/ErrorLabel';
import { Flex } from '../Flex/Flex';
import { errorPositionToFlexDirection, labelPositionToFlexDirection } from '../../utilities/FlexPositions';

interface ThoraBaseComponentProps<T> extends BaseTextComponentSchema<T> {
    inputType?: 'textfield' | 'textarea' | 'email' | 'number';
    className: string;
    value: T;
    validate(value: T): string | null;
    onValueChange(value: T): void;
}

interface ThoraBaseComponentState {
    touched?: boolean;
}

const ThoraBaseComponent = <T extends string | number>(props: ThoraBaseComponentProps<T>) => {
    const [state, setState] = useState<ThoraBaseComponentState>({});
    let validationError = '';

    const onChange = (value: T) => {
        setState((prevState: any) => ({
            ...prevState,
            touched: true,
        }));

        return props.onValueChange(value);
    }

    useEffect(() => {
        const defaultVal = (typeof props.value === 'number' ? 0 : '') as T;
        props.onValueChange(props.value || props.data?.defaultValue || defaultVal);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (props.validations && state.touched) {
        validationError = (props.validate(props.value)) || '';
    }

    let childEl;
    switch (props.inputType) {
        case 'textfield':
        case 'email':
            childEl = <input type={props.inputType} name={props.name} value={ props.value || '' } onChange={(evt) => onChange(evt.target.value as T)} />;
            break;
        case 'textarea':
            childEl = <textarea name={props.name} value={ props.value || ''} onChange={(evt) => onChange(evt.target.value as T)} />;
            break;
        case 'number':
            childEl = <input type={props.inputType} name={props.name} value={ props.value || 0 } onChange={(evt) => onChange(evt.target.value as T)} />
    }

    return (
        <Flex className={props.className} flexDirection={labelPositionToFlexDirection(props.display?.labelPosition)}>
            <Label text={props.name} />
            <Flex flexDirection={errorPositionToFlexDirection(props.display?.errorPosition)} margin={false}>
                { childEl }
                <ErrorLabel error={validationError} />
            </Flex>
        </Flex>
    );
}

ThoraBaseComponent.validateSchema = (_component: any) => {
    return true;
};

ThoraBaseComponent.defaultProps = {
    inputType: 'textfield',
}

export default ThoraBaseComponent;