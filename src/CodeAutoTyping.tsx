import React from 'react';
import Typist, { TypistProps } from 'react-typist';
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import './CodeAutoTyping.css';

export interface CodeAutoTypingProps extends TypistProps {
  children?: React.ReactNode;
  syntaxHighlighterProps?: SyntaxHighlighterProps;
}

function CodeAutoTyping(props: CodeAutoTypingProps): JSX.Element {
  const { children, syntaxHighlighterProps, ...rest } = props;

  return (
    <Typist cursor={{ show: false }} {...rest}>
      <SyntaxHighlighter showLineNumbers wrapLines {...syntaxHighlighterProps}>
        {children}
      </SyntaxHighlighter>
    </Typist>
  );
}

export default CodeAutoTyping;
