import { ObjectComponentTypeName, DataComponentType, TableTypeName } from './DataComponentSchema';
import {
  ButtonTypeName,
  CheckboxTypeName,
  EmailTypeName,
  InputComponentType,
  NumberTypeName,
  PasswordTypeName,
  TextAreaTypeName,
  TextFieldTypeName,
} from './InputComponentSchema';
import { LayoutComponentType, PanelTypeName, TabsTypeName } from './LayoutComponentSchema';

export const Types = {
  TextField: TextFieldTypeName,
  TextArea: TextAreaTypeName,
  Email: EmailTypeName,
  Number: NumberTypeName,
  Password: PasswordTypeName,
  Checkbox: CheckboxTypeName,
  Button: ButtonTypeName,

  Panel: PanelTypeName,
  Tabs: TabsTypeName,

  Table: TableTypeName,
  ObjectComponent: ObjectComponentTypeName,
};

export type ComponentType =
  | InputComponentType
  | LayoutComponentType
  | DataComponentType;
