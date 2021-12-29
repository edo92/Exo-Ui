import React from "react";
import { mount } from "@cypress/react";

import "../helpers/base.css";
import Layout from "Layout";
import Field from "Components/Field";

interface ElemProps {
  className?: string;
}
const Elem: React.FC<ElemProps> = (props) => {
  return (
    <Layout>
      <div
        {...props}
        style={{
          height: "15px",
          minWidth: "15px",
          background: "red",
        }}
      >
        <div
          style={{
            border: "1px solid #fff",
            height: "15px",
            minWidth: "15px",
          }}
        ></div>
      </div>
    </Layout>
  );
};

const elems = [0, 1, 2, 3, 4, 5];

describe("Field Elements", () => {
  const verifyElemWidth = (expectWidth: number) => {
    cy.get(".element").each(($elem) => {
      expect($elem.position().top).equal(0);
      //
      const elementWidth = $elem.width();
      expect(elementWidth).closeTo(expectWidth, 0.5);
      //
      const top = $elem.position().top;
      expect(top).equal(0);
    });
  };

  describe("Single Element", () => {
    it("Row", () => {
      mount(
        <Field>
          <Elem className="element" />
        </Field>
      );
      verifyElemWidth(window.innerWidth);
    });
  });

  describe("Many Elements", () => {
    it("Row", () => {
      mount(
        <Field>
          {elems.map((elem) => (
            <Elem className="element" key={elem} />
          ))}
        </Field>
      );
      verifyElemWidth(window.innerWidth / elems.length);
    });
  });
});
