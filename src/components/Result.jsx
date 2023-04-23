import React from "react";
import { useContext } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";
import EditorContext from "../EditorContext";

const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 13px;
    font-family: "Lato", sans-serif;
`;

const Title = styled.div`
    font-size 22px;
    font-weight: 600;
    margin-bottom: 1em;
    padding: 8px 0;
    border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ResultArea = styled.div`
    width: 100%;
    heigth: 100%;
    border: none;
    font-size: 17px;
`;

function Result(props) {
    const { markdownText } = useContext(EditorContext);
    return (
        <Container>
            <Title>Converted Text</Title>
            <ResultArea>
                <ReactMarkdown children={markdownText}></ReactMarkdown>
            </ResultArea>
        </Container>
    );
}

export default Result;
