import requst from "./index";
export const addMenu = (params: any) =>
  requst.post({ url: "/system/menu", data: params });
// export const getMenu = (params: any) => requst.get({ url: "/", params });

export const getMenu = () => requst.get({ url: "/system/menu" });

export const deleteMenu = (params: object) =>
  requst.delete({ url: "/system/menu", data: params });
