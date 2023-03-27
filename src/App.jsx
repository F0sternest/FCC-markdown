import "./styles/App.css";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
    const [rawMarkdown, setRawMarkdown] = useState("# Hello");

    const handleMarkdown = (event) => {
        setRawMarkdown(event.target.value);
    };

    return (
        <div className="container">
            <textarea
                autoFocus
                value={rawMarkdown}
                onChange={handleMarkdown}
                id="editor"
                placeholder="Type your markdown"
            />
            <div id="preview">
                <ReactMarkdown
                    className="markdown-previwer"
                    children={rawMarkdown}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/,"")}
                                    style={docco}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default App;
