// import { BlobProvider, Document, PDFDownloadLink, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
// import React, { useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import MyComponent2 from '../../components/Template/Genfile/ReadPDF';
// import RichTextFill from '../../components/Template/RichText/RichTextFill';
// import TableForm from '../../components/Template/Table';
// import jsPDF from 'jspdf';
// import { setConfig } from '../../redux/slice/configSlice'

// // import PdfGenerator from '../../components/Layout/Genfile/TestGenFile';






// // import { renderToString } from '@react-pdf/renderer';


// // import Quill from '../../components/Template/TestComp/ReactQuill'






// function Test() {


//     return (

//         <div>
//             {/* <div >  {configType.name}</div> */}
//             {/* <button onClick={onClick}>abcd</button> */}
//             {/* <RichTextFill /> */}
//             {/* <Userlisting /> */}
//             {/* <div>------------------------------------</div> */}
//             {/* <PdfGenerator /> */}
//             {/* <button onClick={generatePDF}>acbded</button> */}
//             {/* <MyComponent2 /> */}
//             <div ref={ref}><TableForm /></div>
//             <BlobProvider document={<TableForm v1={true} />} fileName="somename.pdf">
//                 {({ blob }) => {
//                     return (
//                         <button onClick={() => onChage(blob)}>ádasdasd </button>
//                     );
//                 }}
//             </BlobProvider>;
//             <PDFDownloadLink document={<TableForm v1={false} />} fileName="somename.pdf">
//                 {({ blob, url, loading, error }) => {
//                     return (
//                         <button onClick={() => onChage(blob)}>ádasdasd </button>
//                     )
//                 }}
//             </PDFDownloadLink>
//             <button onClick={() => { console.log(ref.current); }}>onClick</button>
//         </div>
//     )
// }

// export default Test