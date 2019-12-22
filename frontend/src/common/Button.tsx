import React from "react";
import clsx from "clsx";
import { Button as ButtonUI } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: "16px",
    padding: "12px 0",
    fontWeight: 600,
    color: "#fff",
    boxShadow: "0px 8px 17px rgba(0, 0, 0, .3)",
    borderRadius: "22px",
    lineHeight: "16px"
  },
  main: {
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 0%, #8E54E9  51%, #4776E6  100%)`
  },
  secondary: {
    background: "#ff0000"
  }
}));

type CardColors = "main" | "secondary";

interface BottonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  color: CardColors;
}

const Button: React.FC<BottonProps> = ({
  color = "main",
  children,
  ...otherProps
}: BottonProps) => {
  const classes = useStyles();

  return (
    <ButtonUI className={clsx(classes[color], classes.root)} {...otherProps}>
      {children}
    </ButtonUI>
  );
};

export default Button;
