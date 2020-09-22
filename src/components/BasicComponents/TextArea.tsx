import React from 'react';
import { TextAreaSchema, ThoraComponent } from '../../types/ComponentSchema';
import { ValidateRequired, ValidateMinMaxLength } from '../../utilities/Validations';
import ThoraBaseTextInput from '../ThoraBaseTextInput';

interface ThoraTextAreaProps extends TextAreaSchema {
    className: string;
    value: string;
    validate?(value: string, textFieldValidate: () => string | null): string | null;
    onValueChange(value: string): void;
}

const TextArea: ThoraComponent<ThoraTextAreaProps> = (props) => {
    const textAreaValidate = (value: string): string | null => {
        return  ValidateRequired(props.validations!, value) || 
                ValidateMinMaxLength(props.validations!, value);
    }

    return (
        <ThoraBaseTextInput {...props} validate={textAreaValidate}/>
    );
}

TextArea.validateSchema = (_component: any) => {
    return true;
};

TextArea.checkRerender = (prevProps, nextProps) => {
    return prevProps.value === nextProps.value && prevProps.display === nextProps.display;
}

export default React.memo<ThoraTextAreaProps>(props => <TextArea {...props}/>, TextArea.checkRerender);