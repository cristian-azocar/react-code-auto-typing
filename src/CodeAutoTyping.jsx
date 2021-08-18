import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import SyntaxHighlighter from 'react-syntax-highlighter';
import './CodeAutoTyping.css';

const defaultTypistProps = {
  cursor: { show: false },
};

function CodeAutoTyping(props) {
  const { children, syntaxHighlighterProps, ...rest } = props;

  return (
    <Typist {...defaultTypistProps} {...rest}>
      <SyntaxHighlighter showLineNumbers wrapLines {...syntaxHighlighterProps}>
        {children}
      </SyntaxHighlighter>
    </Typist>
  );
}

CodeAutoTyping.propTypes = {
  children: PropTypes.node,
  syntaxHighlighterProps: PropTypes.instanceOf(SyntaxHighlighter),
};

CodeAutoTyping.defaultProps = {
  children: undefined,
  syntaxHighlighterProps: undefined,
};

export default CodeAutoTyping;
