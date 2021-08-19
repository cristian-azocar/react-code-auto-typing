import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CodeAutoTyping from './CodeAutoTyping';

const snippet = `console.log('Hello World');`;

test('renders the component correctly', () => {
  const { container } = render(<CodeAutoTyping />);
  const codeElement = container.querySelector('code');

  expect(codeElement).not.toBeInTheDocument();
});

test('renders a code snippet', async () => {
  const { container } = render(<CodeAutoTyping>{snippet}</CodeAutoTyping>);

  await waitFor(
    () => {
      const codeElement = container.querySelector('code');
      expect(codeElement).toHaveTextContent(snippet);
    },
    { timeout: 5000 }
  );
});

test('forwards the "language" prop', async () => {
  const language = 'javascript';
  const { container } = render(
    <CodeAutoTyping language={language}>{snippet}</CodeAutoTyping>
  );

  await waitFor(() => {
    const elements = container.getElementsByClassName(`language-${language}`);
    expect(elements[0]).toBeInTheDocument();
  });
});
