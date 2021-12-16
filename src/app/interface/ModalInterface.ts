import { FormInterface, ResUserInterce } from './UserInterface';

export interface ModalInterface {
  isShow?: boolean;
  headerTitle?: string;
  message?: string;
  dataRow?: ResUserInterce | undefined;
  listMenu?: Array<FormInterface>;
}
