import React, { useRef, useEffect, useState } from "react";
import { Row } from "Components/Grid";
import { ButtonElem, LoadingAnim } from "./styles";

export interface ButtonProps extends ElemSizeTypes, ElemColorTypes {
  radius?: number;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: JSX.Element | string;
  onClick?: (e: ButtonEvent) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const [focus, setFocus] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const focusAnim = () => {
    setFocus(true);
    setTimeout(() => {
      if (mountedRef.current && !focus) setFocus(false);
    }, 700);
  };

  const handleClick = (e: ButtonEvent) => {
    if (props.onClick) props.onClick(e);
  };

  const onClick = (e: ButtonEvent) => {
    focusAnim();
    handleClick(e);
  };

  return (
    <ButtonElem
      focus={focus}
      onClick={onClick}
      radius={props.radius}
      sizeType={props.size}
      colorType={props.color}
      disabled={props.disabled}
      className={props.className}
    >
      <Row>
        <>{props.children && props.children}</>
        <>
          {props.loading && (
            <LoadingAnim className="button-loading" sizeType={props.size} />
          )}
        </>
      </Row>
    </ButtonElem>
  );
};

export default Button;
