interface ArabicMapping {
  TICKET_CREATED: string;
  PACKAGE_RECEIVED: string;
  IN_TRANSIT: string;
  NOT_YET_SHIPPED: string;
  OUT_FOR_DELIVERY: string;
  DELIVERED: string;
  DELIVERED_TO_SENDER: string;
  WAITING_FOR_CUSTOMER_ACTION : string;
}
const arabicMapping: ArabicMapping = {
  "TICKET_CREATED": "تم إنشاء الشحنة",
  "PACKAGE_RECEIVED": "تم استلام الشحنة",
  "IN_TRANSIT": "قيد الشحن",
  "NOT_YET_SHIPPED": "لم يتم الشحن بعد",
  "OUT_FOR_DELIVERY" : "في الطريق لك",
  "DELIVERED": "تم التوصيل",
  "DELIVERED_TO_SENDER" : "تم الارجاع للمرسل",
  "WAITING_FOR_CUSTOMER_ACTION": "في انتظار رد العميل",
};
function isValidKey(value: string): value is keyof typeof arabicMapping {
  return value in arabicMapping;
}
export { arabicMapping, isValidKey };
