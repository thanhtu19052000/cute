import { useDispatch, useSelector } from 'react-redux'

import MyComponent2 from '../../components/Template/Genfile/ReadPDF';
import React from 'react'
import RichTextFill from '../../components/Template/RichText/RichTextFill';
import jsPDF from 'jspdf';
import { setConfig } from '../../redux/slice/configSlice'

// import PdfGenerator from '../../components/Layout/Genfile/TestGenFile';






// import { renderToString } from '@react-pdf/renderer';


// import Quill from '../../components/Template/TestComp/ReactQuill'






function Test() {
    const configType = useSelector((state) => state.configType);
    // console.log(configType);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(setConfig({ name: 'tudo' }))
    }
    const onClick1 = async () => {
        // const value = await renderToString(<ReactPDF />);
        // console.log(value);
    }
    const generatePDF = () => {
        const pdf = new jsPDF();
        pdf.text('Hello, this is a PDF!', 10, 10);
        pdf.save('generated.pdf');
        sendPDFToAPI(pdf);
    };
    const sendPDFToAPI = (pdfFile) => {
        const formData = new FormData();
        formData.append('pdf', pdfFile, 'generated.pdf');
        console.log(formData);
        // axios.post('your-api-endpoint', formData)
        //   .then(response => {
        //     console.log('PDF sent successfully!', response);
        //   })
        //   .catch(error => {
        //     console.error('Error sending PDF:', error);
        //   });
    };


    return (
        <div>
            <div >{configType.name}</div>
            <button onClick={onClick}>abcd</button>
            {/* <RichTextFill /> */}
            {/* <Userlisting /> */}
            <div>------------------------------------</div>
            {/* <PdfGenerator /> */}
            <button onClick={generatePDF}>acbded</button>
            <MyComponent2 />
        </div>
    )
}

export default Test