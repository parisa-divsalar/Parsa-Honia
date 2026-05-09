import { ErrorsType } from '@/types';

const ErrorMessageHandler = (serverErrorCode: null) => {
  // TODO get errors list from redux
  const errors: ErrorsType[] = [];

  if (!serverErrorCode) return 'خطا در برقراری ارتباط';
  const errorItem = errors.find((item: ErrorsType) => item.code === serverErrorCode);
  return errorItem?.message || 'خطا در برقراری ارتباط';
};

export default ErrorMessageHandler;
