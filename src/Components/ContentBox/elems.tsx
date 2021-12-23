import React from "react";
import Radio from "Components/Radio";

import {
  Content,
  ContentBody,
  ContentFooter,
  FooterWrapper,
  Option,
} from "./styles/styles";

import {
  BodyText,
  FooterText,
  BaseDivider,
  ContentName,
  ActionButton,
  OptionLabel,
} from "./styles/styles";

export interface IOption {
  name: string;
  result: string;
  className?: string;
}

export const OptionItem: React.FC<IOption> = (props) => {
  return (
    <Option className={props.className}>
      <ContentBody>
        <Radio size="medium">
          <OptionLabel>{props.name}</OptionLabel>
        </Radio>
      </ContentBody>
      <ContentFooter>
        <FooterWrapper>{props.result}</FooterWrapper>
      </ContentFooter>
    </Option>
  );
};

export interface IContent {
  name: string;
  body: string;
  result?: string;
  className?: string;
  action?: {
    actionName: string;
    function: () => void;
  };
}

export const ContentItem: React.FC<IContent> = (props) => {
  return (
    <Content className={props.className}>
      <ContentName>{props.name}</ContentName>
      <ContentBody>
        <BodyText>{props.body}</BodyText>
      </ContentBody>
      <ContentFooter>
        <FooterWrapper>
          {props.result && (
            <FooterText>
              <>{props.result}</>
            </FooterText>
          )}

          {props.action && (
            <ActionButton onClick={props.action.function}>
              {props.action.actionName}
            </ActionButton>
          )}
        </FooterWrapper>
      </ContentFooter>
    </Content>
  );
};

export const Divider: React.FC<{ index: number; length: number }> = (props) => {
  return <>{props.length - 1 > props.index && <BaseDivider />}</>;
};
