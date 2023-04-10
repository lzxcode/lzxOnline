import requst from "./index";
export const getMenu = (params: any) =>
  requst.post({ url: "/system/menu", data: params });
// export const getMenu = (params: any) => requst.get({ url: "/", params });
