interface DetailsArabicMapping {
  TICKET_CREATED: string;
  PACKAGE_RECEIVED: string;
  IN_TRANSIT: string;
  NOT_YET_SHIPPED: string;
  OUT_FOR_DELIVERY: string;
  DELIVERED: string;
  DELIVERED_TO_SENDER: string;
  WAITING_FOR_CUSTOMER_ACTION: string;
  RECEIVED_DELIVERY_LOCATION : string;
}
const detailsArabicMapping: DetailsArabicMapping = {
  TICKET_CREATED: "تم إنشاء الشحنة",
  PACKAGE_RECEIVED: "تم استلام الشحنة من التاجر",
  IN_TRANSIT: "قيد الشحن",
  NOT_YET_SHIPPED: "لم يتم الشحن بعد",
  OUT_FOR_DELIVERY: "في الطريق لك",
  DELIVERED: "تم الارسال",
  DELIVERED_TO_SENDER: "تم الارجاع للمرسل",
  WAITING_FOR_CUSTOMER_ACTION: "في انتظار رد العميل",
  RECEIVED_DELIVERY_LOCATION: "تم استلام مكان الشحن",
};
const hubArabicMapping = {
  "Alexandria Hub": "مركز الاسكندرية",
  "Cairo Sorting Facility": "مرفق القاهرة للفرز"  ,
  "Katamya Hub": "مركز القطماية",
  "Bosta HQ": "مقر بوسطة الرئيسي",
  "Tanta Hub": "مركز طنطا",
  "Mohandseen Hub": "مركز المهندسين",
}

function isValidKey(value: string, object: {}): value is keyof typeof object {
  return value in object;
}
export { detailsArabicMapping, isValidKey, hubArabicMapping };
