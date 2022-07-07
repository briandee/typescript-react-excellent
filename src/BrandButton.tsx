import React from "react";
import { Button, ButtonProps } from "@material-ui/core";

type Props = Omit<ButtonProps, "variant">;

const BrandButton: React.FC<Props> = ({ children, variant, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default BrandButton;
