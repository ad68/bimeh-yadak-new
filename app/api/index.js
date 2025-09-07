const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const api = {
  auth: {
    sendOtp: baseUrl + "/tazmin/notification/send-otp",
  },
  brand: {
    searchBrand: baseUrl + "ex/brand/search-brand",
  },
  currency: baseUrl + "general-config/search",
  car: {
    searchCarModelByBrand: baseUrl + "ex/car-model/search-car-model-by-brand",
    getCarYearByModelInfo: baseUrl + "ex/car-type/get-car-year-by-model-info",
    searchCarTypeByCarModelAndYear: baseUrl + "ex/car-type/search-car-type-by-car-model-and-year",
    calculatePrice: baseUrl + "ex/car/calculate-price/v2",
    calculatePriceInsurance: baseUrl + "ex/car/calculate-insurance-price",
    searchUniqueCar: baseUrl + "ex/car/search-unique-car",
    getCarPriceChartByTypeId: baseUrl + "car-price-chart/get-car-price-chart-by-type-id",
    searchCarByPrice: baseUrl + "car/searchCarByPrice",
    searchMotorCycleByPrice: baseUrl + "car/motorcycle-price",
    getPriceChart: baseUrl + "car-price-chart/get-car-price-chart-by-type-id",
    getCarDetail: baseUrl + "car-Info/car-details",
    searchCarByPrice: baseUrl + "car/search-with-price",
    searchMotorByPrice: baseUrl + "motorcycle-price/search-with-price",
    carPriceList: baseUrl + "car/search-with-price-without-mongo?pageSize=200&pageNo=0",
    depreciation: baseUrl + "ex/auto-depreciation/list-auto-depreciation?autoDepreciationTypeEnum=INSURANCE",
  },
  motor: {
    calculatePrice: baseUrl + "motorcycle-price/calculate-price",
    motorPriceList: baseUrl + "motorcycle-price/search-with-price-without-mongo?pageSize=200&pageNo=0",
    motorDetail: baseUrl + "motorcycle/get-details",
  },
  colors: {
    getColors: baseUrl + "ex/auto-depreciation/list-auto-depreciation?autoDepreciationTypeEnum=COLOR",
  },
  location: {
    getProvinces: baseUrl + "basic-information/search-provinces",
    getCities: baseUrl + "basic-information/search-cities",
  },
  insurance: {
    preRegistration: baseUrl + "registration-insurance/add",
    preRegistrationCentral: baseUrl + "registration-insurance/add/from/central-insurance",
    adminPreRegistration: baseUrl + "pre-registration-insurance/admin/add",
    getRegistrationInsurance: baseUrl + "registration-insurance/search-with-pageable-user",
    getRegistrationInsuranceAdmin: baseUrl + "registration-insurance/search-with-pageable-admin",
    getTotalPayAmount: baseUrl + "registration-insurance/total-pay-amount",
    exportExcel: baseUrl + "registration-insurance/export-excel",
  },
  collaboration: {
    addCollaboration: baseUrl + "collaboration-in-marketing/add",
    addCollaborationAdmin: baseUrl + "collaboration-in-marketing/add-token",
    editCollaborationAdmin: baseUrl + "collaboration-in-marketing/edit/",
    getCollaborationList: baseUrl + "collaboration-in-marketing/search-with-pageable",
    deleteCollaboration: baseUrl + "collaboration-in-marketing/delete/",
    getPreRegistrationInsuranceList: baseUrl + "registration-insurance/search-with-pageable",
    getPreRegistrationInsuranceMarketingList: baseUrl + "registration-insurance/search-with-pageable-marketing",
    deletePreRegistrationInsuranceList: baseUrl + "registration-insurance/delete/",
    editPreRegistrationInsuranceList: baseUrl + "registration-insurance/edit/",
  },
  payment: {
    requestPayment: baseUrl + "payment/request",
  },
  licensePlate: {
    searchWithPagination: baseUrl + "license-plate/search-with-pagination",
    deletePlate: baseUrl + "license-plate/delete/",
    addPlate: baseUrl + "license-plate/add",
    editPlate: baseUrl + "license-plate/edit/",
  },
  carBodyStatus: {
    getColoredPart: baseUrl + "ex/auto-depreciation/list-auto-depreciation?autoDepreciationTypeEnum=COLORED_PART",
    getReplacedPart: baseUrl + "ex/auto-depreciation/list-auto-depreciation?autoDepreciationTypeEnum=REPLACED_PART",
  },
  user: {
    getUserInfo: "https://api.tazminmashin.com/tazmin/users/get-user-info",
    editUserInfo: "https://api.tazminmashin.com/tazmin/users/edit-user-info/",
  },
  inquiry: {
    getResultHistory: baseUrl + "inquiry/result-history?mobileNumber=09391287786&nationalCode=6700034442&isPaid=false",
  },
  ticket: {
    searchTickets: "https://api.tazminmashin.com/tazmin/ticket/search-tickets",
    calculateTickets: "https://api.tazminmashin.com/tazmin/ticket/calculate-tickets",
    addTicket: "https://api.tazminmashin.com/tazmin/ticket/add-ticket",
    searchDepartments: "https://api.tazminmashin.com/tazmin/ticket-department/search-departments",
    searchMessages: "https://api.tazminmashin.com/tazmin/ticket-message/search-messages",
  },
  contactUs: {
    getContactUsList: baseUrl + "contact-us/search-with-pagination",
    deleteContactUs: baseUrl + "contact-us/delete/",
    addContactUs: baseUrl + "contact-us/add",
    editContactUs: baseUrl + "contact-us/edit/",
  },
  roadSideAssistance: {
    addRoadSideAssistance: baseUrl + "road-side-assistance/add",
    getRoadSideAssistanceList: baseUrl + "road-side-assistance/search-with-pageable",
    approveSignUpRequest: baseUrl + 'road-side-assistance/approve-request/'
    /////*  getRoadSideAssistance: baseUrl + "road-side-assistance/add", */
  },

  transactions: {
    getTransactionsList: baseUrl + "inquiry/bills-transactions",
    getInquerTransactionsList: baseUrl + "inquiry/inquiries-transactions",
    getTransactionsList: baseUrl + "inquiry/bills-transactions",
  },
  preRegistrationInsurance: {
    searchList: baseUrl + "registration-insurance/search-with-list",
    getPreRegistrationInfoById: baseUrl + "registration-insurance/search/",
  },
  technician: {
    technicianAdd: baseUrl + "technician/add",

  },
  rescuerInvoice: {
    getRescuerInvoice: baseUrl + "rescuer-invoice/get-technician-and-insurance-reg",
    getHasInsuranceInvoice: baseUrl + 'rescuer-invoice/search-with-pageable',
    getTechnicianAndInsuranceReg: baseUrl + "rescuer-invoice/add",
    getFreeTechnicianAndInsuranceReg: baseUrl + "rescuer-invoice/add-free-rescuer-invoice",
    addFreeRescuerInvoice: baseUrl + "free-registration-car-transport/add"
  },
  dashboard: {
    getAllInfoCount: baseUrl + "registration-insurance/search-report"
  },
  wp: "https://tazminmashin.ir/wp-json/wp/v2/posts?_embed&per_page=10",
};
