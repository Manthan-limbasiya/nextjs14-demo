import { notification } from "antd";
export const messageNotification = (type, description) => {
  notification[type]({
    message: type.charAt(0).toUpperCase() + type.substring(1),
    description,
    duration: 5,
    placement: "bottomLeft",
  });
};
