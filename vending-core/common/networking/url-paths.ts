export const URL_PATHS = {
  // Machine
  MACHINE_MODEL: "api/machine/machine_model",
  MACHINE: "api/machine/machine",
  MACHINE_SEND_HEARTHBEAT: "api/machine/sendHearthbeat",
  ASSIGNMENT_MACHINE: "api/machine_assignment",
  COUNT_MACHINE: "api/report/dashboard/status",

  // statistical
  STATISTICAL_PRODUCT: "api/report/dashboard/totalOrder",
  STATISTIAL_PAYMENT: "api/report/dashboard/totalAmount",

  // PRODUCT
  PRODUCT: "api/machine/product",

  // BANNER 
  BANNER: "api/machine/banner",
  GET_BANNER_BY_MACHINE_ID: '/api/machine/banner/findByMachineId',

  // ORDER
  ORDER: "management/api/order",
  TEMPORARY_ORDER: "management/api/order/getTemporary",

  // TASK
  TASK: "management/api/task",
  TASK_DETAIL: "management/api/task/view_detail",

  // MACHINE PRODUCT MAP
  PRODUCT_MAP: "api/machine/machine_product_map",

  // REPORT
  REPORT: "api/report/report",
  OVERALL: "api/report/report/overall",

  // UPLOAD FILE
  UPLOAD_FILE: "files/image",
  GET_FILE_LOG: "files/log",

  // SENSOR 
  SENSOR: 'api/machine/sensor',

  // NOTIFICATION
  NOTIFICATION: 'api/notification/notification',
  READ_NOTIFICATION: 'api/notification/notification/read',
  COUNT_NOTIFICATION: 'api/notification/notification/overall',
  TEMPERATURE_OVERHEAT: 'api/sensor/issue/sovle/temperature_overheat'
};
