import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SyntaxWrap = ({children}) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{
              textAlign: "left",
              padding: "25px",
              borderRadius: "10px",
              width: "600px",
            }}
            wrapLines={true}
            showLineNumbers
            >
            {children}
          </SyntaxHighlighter>
        </div>
    )
}

export default SyntaxWrap