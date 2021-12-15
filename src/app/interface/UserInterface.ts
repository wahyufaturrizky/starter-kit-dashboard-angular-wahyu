export interface ReqLoginInterface {
  username?: string;
  password?: string;
}

export interface ReqRegisterInterface extends ReqLoginInterface {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  isActive?: boolean;
}

export interface FormInterface {
  fieldLabel: string;
  fieldName: string;
  fieldPlaceholder: string;
  fieldType: string;
  required: boolean;
  defaultValue: string;
}

export interface ResUserInterce {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
  jobs: Array<[]>;
  bookmarks: Array<[]>;
}
