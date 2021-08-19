# React Code Auto Typing

**React Code Auto Typing** is a React component for automatic code writing animation with highlighting included. Under the hood it uses [react-typist](https://github.com/jstejada/react-typist) and [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter).

Check out a working demo [here](https://codesandbox.io/s/react-code-auto-typing-demo-t7kps).

## Install

```
npm install --save react-code-auto-typing
```

## Usage

```jsx
import CodeAutoTyping from "react-code-auto-typing";

const snippet = `function greet(name) {
  return 'Hello ' + name;
}

console.log(greet('John'));`;

export default function Example() {
  return (
    <CodeAutoTyping language="javascript">
      {snippet}
    </CodeAutoTyping>
  );
}
```

**Note**: you can use `\n` and `\t` to give format to the code if you prefer.

## Style

To give a specific style to the highlighting, import one of the provided by the `react-syntax-highlighter` library.

```jsx
import CodeAutoTyping from "react-code-auto-typing";
import { ocean } from "react-syntax-highlighter/dist/esm/styles/hljs";

const snippet = "console.log('Hello World');";

export default function Example() {
  return (
    <CodeAutoTyping
      language="javascript"
      syntaxHighlighterProps={{ style: ocean }}
    >
      {snippet}
    </CodeAutoTyping>
  );
}
```

## Props

This component is basically a wrapper for `react-typist` and `react-syntax-highlighter`, so all props are forwarded to the corresponding library component.

| Prop name              | Type                     | Description                                        |
| ---------------------- | ------------------------ | -------------------------------------------------- |
| children               | `string`                 | The code to highlight and animate                  |
| language               | `string`                 | The language of the code                           |
| syntaxHighlighterProps | `SyntaxHighlighterProps` | Props forwarded to the SyntaxHighlighter component |
| spread props           | `TypistProps`            | Props forwarded to the Typist component            |

For more detail on the props of each library, visit the corresponding documentation:

* [Typist props](https://github.com/jstejada/react-typist#typist-props)
* [Syntax Highlighter props](https://github.com/react-syntax-highlighter/react-syntax-highlighter#props)

## License

[MIT](https://mit-license.org/)
