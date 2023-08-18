import { PDFDocument, rgb } from 'pdf-lib';
import React, { useRef, useState } from 'react';

import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import template from './TEMPLATE.pdf';

const defaultPageSize = 944;
const MyComponent2 = () => {
    const refData = useRef();

    const elementRef = useRef(null);
    const [pageContent, setPageContent] = useState([{
        page: 1,
        count: 0,
        content: ''
    }]);

    const getElementHeight = () => {
        if (elementRef.current) {
            const list = document.querySelectorAll("void");
            // console.log(elementRef2.current.height);
            let countSize = 0;
            for (let index = 0; index < list.length; index++) {
                countSize = countSize + list[index].clientHeight;
                if (countSize < defaultPageSize) {
                    setPageContent((pageContent) => {
                        const indexFill = pageContent.length - 1;
                        const adaptData = [...pageContent];
                        adaptData.splice(indexFill, 1, { page: adaptData[indexFill].page, content: adaptData[indexFill].content + list[index].outerHTML.toString() });
                        return adaptData;
                    })
                } else if (countSize > defaultPageSize) {
                    countSize = 0;
                    setPageContent((pageContent) => {

                        const adaptData = [...pageContent, { page: pageContent[pageContent.length - 1].page + 1, content: '', count: 0 }];
                        const indexFill = adaptData.length - 1;
                        adaptData.splice(indexFill, 1, { page: adaptData[indexFill].page, content: adaptData[indexFill].content + list[index].outerHTML.toString() });
                        return adaptData;
                    })
                }
            }
        }

    };


    function base64ToArrayBuffer(base64) {
        // Convert URL-safe base64 to standard base64
        base64 = base64.replace(/-/g, '+').replace(/_/g, '/');

        // Add padding if necessary
        while (base64.length % 4 !== 0) {
            base64 += '=';
        }

        const binaryString = atob(base64);
        const length = binaryString.length;
        const bytes = new Uint8Array(length);

        for (let i = 0; i < length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        return bytes.buffer;
    }


    const writeContentToPDF = async (element) => {
        // getElementHeight();
        // pageContent


        const templatePdfPath = template; // Replace with the actual path

        const canvas = (await html2canvas(element));
        const data = canvas.toDataURL("image/png").replace('data:image/png;base64,', '');


        const templatePdfBytes = await fetch(templatePdfPath).then(response =>
            response.arrayBuffer()
        );


        const jpgImageBytes = base64ToArrayBuffer(data)
        // const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())

        // console.log(jpgImageBytes);
        // const image = pdfImage.embedPng(data);
        // const pdfDoc = await PDFDocument.create();
        const pdfDoc = await PDFDocument.load(templatePdfBytes);
        const page = pdfDoc.getPages()[0]; // Get the first page
        // const pdfImageGen = pdfImage.embedPng(data)
        const jpgImage = await pdfDoc.embedPng(jpgImageBytes)
        // const jpgDims = pdfImageGen.scale(0.5)

        const text = 'This is the content you want to add. 1232131';
        // page.drawText(text, {
        //     x: 100,
        //     y: 500,
        //     size: 12,
        //     color: rgb(0, 0, 0),

        // });
        page.drawImage(jpgImage, {
            x: 45,
            y: 80,
            width: 520,
            height: 690,

        })
        const modifiedPdfBytes = await pdfDoc.save();
        // console.log(modifiedPdfBytes);
        // console.log(modifiedPdfBytes);
        const modifiedPdfBlob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
        // console.log(modifiedPdfBlob);
        saveAs(modifiedPdfBlob, 'tudt.pdf')

        // You can save the modified PDF or display it as needed
        // For example, you can create a Blob and generate a download link
        // const downloadUrl = URL.createObjectURL(modifiedPdfBlob);
        // window.open(downloadUrl);
    };

    return (
        <div>
            <div ref={refData}
                style={{ height: 1428, width: 1000, backgroundColor: 'red' }}
                contentEditable
            >hjasdlkjaslkdlnxcz,
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>

                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>


                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>

                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>


                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>

                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>


                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>

                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>


                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>

                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>


                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>

                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>


                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>

                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>


                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>
                <void>asdjhlqwueoiqwuenxc,mmnxcv,mxcv</void>

            </div>
            <button onClick={() => writeContentToPDF(refData.current)}>Write Content to PDF</button>
        </div>
    );
};

export default MyComponent2;