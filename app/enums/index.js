export const NotifyType = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
});
export const NotifyMessage = Object.freeze({
  SUCCESS_ACTION: "عملیات مورد نظر با موفقیت انجام شد",
  GLOBAL_ERROR: "خطایی رخ داده است",
});
export const VehicleType = Object.freeze({
  CAR: "SAVARI",
  MOTOR: "MOTOR",
});

/* export const Regex = Object.freeze({
  MOBILE: new RegExp(/^[0][9][0-9][0-9]{8}$/),
  NATIONAL_CODE: new RegExp(/^([0-9]){10}$/),
  NUMBER: new RegExp(/^\d+$/),
  EMAIL: new RegExp(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z1-9]+/),
  CAR_SHASI: new RegExp(/^[A-HJ-NPR-Z0-9]{17}$/),
  INSURANCE_THIRD: new RegExp(/^\d{10}$/),
  PERSIAN_NAME: new RegExp(/^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ\s]+$/),
});
 */

export const Regex = Object.freeze({
  MOBILE: new RegExp(/^[0۰][9۹][0-9۰-۹][0-9۰-۹]{8}$/),
  NATIONAL_CODE: new RegExp(/^([0-9۰-۹]){10}$/),
  NUMBER: new RegExp(/^[0-9۰-۹]+$/),
  EMAIL: new RegExp(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z1-9]+/),
  CAR_SHASI: new RegExp(/^[A-HJ-NPR-Z0-9]{17}$/),
  INSURANCE_THIRD: new RegExp(/^[0-9۰-۹]{10}$/),
  PERSIAN_NAME: new RegExp(/^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئيﻳﻴﻱكﻙﻚﻛ\s]+$/),
  SHEBA: new RegExp(/^\d{24}$/),
  CARD_NUMBER: new RegExp(/^\d{16}$/),
  ZIP_CODE: new RegExp(/^([0-9]){10}$/),
});
