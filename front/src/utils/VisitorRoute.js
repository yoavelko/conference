export const HOST = import.meta.env.DEV ? "http://localhost:3000" : import.meta.env.VITE_SERVER;
export const createVisitor = `${HOST}/visitor/create`;
export const getAllVisitors = `${HOST}/visitor`;
export const statusBulkUpdate = `${HOST}/visitor/bulk-status-update`;
export const statusUpdate = `${HOST}/visitor/status`;
export const multipleFieldFilter = `${HOST}/visitor/complex-filter`;