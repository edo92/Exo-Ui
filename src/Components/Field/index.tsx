import React from "react";
import { FieldRow, FieldCol } from "./styles";

interface TagBase {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export interface FieldProps extends TagBase {
  gap?: number;
}

const Field: React.FC<FieldProps> = (props) => {
  return (
    <FieldRow>
      <>
        {!Array.isArray(props.children) && (
          <FieldCol col={1}>
            <>{props.children}</>
          </FieldCol>
        )}
      </>

      <>
        {Array.isArray(props.children) &&
          props.children.map((child, index) => {
            if (!Array.isArray(props.children)) return;

            return (
              <FieldCol
                key={index}
                gap={props.gap}
                className={props.className}
                col={props.children.length}
              >
                <>{child}</>
              </FieldCol>
            );
          })}
      </>
    </FieldRow>
  );
};

export default Field;
