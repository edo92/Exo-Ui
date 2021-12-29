import React from "react";
import { mount } from "@cypress/react";

import { styles as theme } from "theme";
import Layout from "Layout";

import { darkLightColors } from "../helpers";
import { primaryHighlight } from "Shared/dynamic";
import Dropdown from "Components/Dropdown";

const Element: React.FC<ElemDarkLightColorTypes & { size?: string }> = (
  props
) => (
  <Layout>
    <Dropdown header="hello" className="drop-element" color={props.color}>
      <div style={{ height: props.size || "100px" }}></div>
    </Dropdown>
  </Layout>
);

describe("Open / Close", () => {
  it("Closed", () => {
    mount(<Element />);
    cy.get(".drop-body").should("have.css", "height", "0px");
  });

  ["150px", "200px", "250px"].forEach((size) => {
    it("Open", () => {
      mount(<Element size={size} />);
      cy.get(".drop-header").click();
      cy.get(".drop-body").should("have.css", "height", size);
    });
  });
});

describe("Dynamic Color", () => {
  darkLightColors.forEach((colorType) => {
    it(colorType, () => {
      mount(<Element color={colorType} />);

      const color = primaryHighlight({ theme, colorType });
      cy.get(".drop-header").should("have.css", "background-color", color);
    });
  });
});
