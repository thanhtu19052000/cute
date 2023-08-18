// import { BLOCK_TYPE, DraftailEditor, INLINE_STYLE } from "draftail"
// import React, { useState } from "react"

// import ReactDOM from "react-dom"

// const initial = JSON.parse(sessionStorage.getItem("draftail:content"))


// const RichTest = () => {
//     const [data, setData] = useState(null);
//     const onSave = (content) => {
//         // console.log("saving", content)
//         setData(content)
//     }
//     return <>
//         <DraftailEditor
//             rawContentState={data}
//             onSave={onSave}
//             blockTypes={[
//                 { type: BLOCK_TYPE.HEADER_THREE },
//                 { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
//             ]}
//             inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}

//         />
//     </>
// }
// // ReactDOM.render(editor, document.querySelector("[data-mount]"));
// export default RichTest;
