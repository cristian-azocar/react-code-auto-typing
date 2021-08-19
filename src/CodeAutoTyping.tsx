import React from 'react';
import Typist, { TypistProps } from 'react-typist';
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import './CodeAutoTyping.css';

export interface CodeAutoTypingProps extends TypistProps {
  children?: React.ReactNode;
  language?: SyntaxHighlighterProps['language'];
  syntaxHighlighterProps?: SyntaxHighlighterProps;
}

function CodeAutoTyping(props: CodeAutoTypingProps): JSX.Element {
  const { children, language, syntaxHighlighterProps, ...rest } = props;

  return (
    <Typist cursor={{ show: false }} {...rest}>
      <SyntaxHighlighter
        showLineNumbers
        wrapLines
        language={language}
        {...syntaxHighlighterProps}
      >
        {children}
      </SyntaxHighlighter>
    </Typist>
  );
}

export default CodeAutoTyping;
