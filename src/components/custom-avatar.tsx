import React from "react";
import { Avatar as AntdAvatar, AvatarProps } from "antd";
import { getNameInitials } from "@/utilities";

type Props = AvatarProps & {
  name: string;
  avatar?: string;
};

const CustomAvatar = ({ name, style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt={name}
      size="small"
      style={{
        backgroundColor: "#87d068",
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name || "")}
    </AntdAvatar>
  );
};

export default CustomAvatar;