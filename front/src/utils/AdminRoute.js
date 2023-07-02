export const HOST = import.meta.env.DEV ? "http://localhost:3000" : import.meta.env.SERVER_LINK;
export const adminLogin = `${HOST}/admin/login`;
export const adminVerify = `${HOST}/admin/verify`;