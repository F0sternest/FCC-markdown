import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import EditorContext from "../EditorContext";

const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 14px;
    border-right: 1.5px solid rgba(15, 15, 15, 0.4);
    font-family: "Lato", sans-serif;
`;

const Title = styled.div`
    font-size 22px;
    font-weight: 600;
    margin-bottom: 1em;
    padding: 8px 0;
    border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    font-size: 17px;
`;

function MarkedInput(props) {
    const { setMarkdownText } = useContext(EditorContext);

    const onInputChange = (event) => {
        const newValue = event.currentTarget.value;
        setMarkdownText(newValue);
    };

    return (
        <Container>
            <Title>Markdown Text</Title>
            <TextArea onChange={onInputChange} id="editor">
                {`# Titulo
---
## Segundo titulo
---
### Tabla
| Align left  | Align center    | Align right |
| :---        |      :----:     |         ---:|
| Text        | Text            | Text        |
| Text        | Text            | Text        |
| Text        | Text            | Text        |
| Text        | Text            | Text        |
---
> Blockquote que pasaria si esta quote fuera mas larga de lo que en realidad utiliza el height.
---
### Block code
\`\`\`Js
import React from 'react'

const defaulContext = {
    markdownText: "",
    setMarkdownText: () =>{}
}

export default React.createContext(defaulContext)

\`\`\`
---
### Inline Code

\`import React from 'react'\`

---
- [x] ~~Write the press release~~
- [ ] Update the website
- [ ] Contact the media
---
**Texto en negrita**

---
### Link
[link](https://joplinapp.org) 

---
### Image
![](https://static.vecteezy.com/system/resources/previews/000/553/995/original/cartoon-hand-making-positive-thumbs-up-gesture-vector.jpg)`}
            </TextArea>
        </Container>
    );
}

export default MarkedInput;
