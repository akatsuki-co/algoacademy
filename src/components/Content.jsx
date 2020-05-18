import React, {useState, useEffect} from 'react'
import Col from "react-bootstrap/Col"
import {useParams} from 'react-router'


import HighlightedMarkdown from "./HighlightedMarkdown"


const Content = ({language}) => {
    const [markdown, setMarkdown] = useState(`Nothing here yet!`);
    let params = useParams()

    useEffect(() => {
    async function getMarkdown() {
        try {
            const markdownFileName = params.topic 
            const topic_language = language
            const file = await import(`../docs/${topic_language}/${markdownFileName}.md`);
            const response = await fetch(file.default);
            let text = await response.text();
            if (text === "") {
                text = "# Nothing here yet! Come back again soon!"
            }
            setMarkdown(text);
        } catch (error) {
            console.error(error);
        }
    };
        getMarkdown();
    }, [params, language]);

    return (
        <Col md="7" xl="8" className='ml-md-auto py-3 pl-5 border-left' id="content">
        <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
        </Col>
    )
}

export default Content
