import React from 'react';
import Typist, { TypistProps } from 'react-typist';
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import './CodeAutoTyping.css';

type BaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface CodeAutoTypingProps extends BaseProps {
  syntaxHighlighterProps: SyntaxHighlighterProps;
}

const defaultTypistProps: Partial<TypistProps> = {
  cursor: { show: false },
};

function CodeAutoTyping(props: CodeAutoTypingProps): JSX.Element {
  const { children, syntaxHighlighterProps, ...rest } = props;

  return (
    <Typist {...defaultTypistProps} {...rest}>
      <SyntaxHighlighter showLineNumbers wrapLines {...syntaxHighlighterProps}>
        {children}
      </SyntaxHighlighter>
    </Typist>
  );
}

export default CodeAutoTyping;
