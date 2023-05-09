import "./styles/App.css";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import remarkGfm from "remark-gfm";

function App() {
    /*MARKDOWN DE EJEMPLO
    | S/N | Pet | Image |
    |--|--|--|
    | 1 | Cat |![A cat looking at you](https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=68615bab04be2077a471009ffc236509) |
    | 2 | Dog |![A dog looking at you](https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg)|
    
    - [ ] Task list 1
    - [ ] Pending task list 2
    - [x] Completed task list 3
    - [x] Completed task list 4 
    
    - A direct URL: https://www.copycat.dev/*/

    const [rawMarkdown, setRawMarkdown] = useState(`# Hello`);

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
                    remarkPlugins={[remarkGfm]}
                    children={rawMarkdown}    
                />
            </div>
        </div>
    );
}

export default App;
