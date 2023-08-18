import './App.css';

import { Document, Packer, Paragraph, TextRun } from 'docx';
import { useEffect, useRef, useState } from 'react';

import HtmlToDocxConverter from './Test';
import logo from './logo.svg';
import { saveAs } from 'file-saver';

function GenFile(element, useRef, pageContent, setPageContent) {
    const [elementHeight, setElementHeight] = useState();

    const appendHtml = () => {
        var div = document.getElementById('container');
        div.innerHTML += '<p>This is some HTML code</p>';
    }


    useEffect(() => {

    }, [])
    // console.log(pageContent);
    console.log(pageContent);


    return (
        <></>
    );
}

export default GenFile;
