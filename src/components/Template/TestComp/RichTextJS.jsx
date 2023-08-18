// import React, { useState } from 'react';

// const RichTextJS = () => {
//     const handleMouseUp = () => {

//         const selectedText = window.getSelection().toString().trim();
//         if (selectedText !== "") {
//             const range = window.getSelection().getRangeAt(0);
//             const span = document.createElement("span");
//             span.className = "selected-text";
//             const contentBefore = range.commonAncestorContainer.parentNode.innerHTML;
//             range.commonAncestorContainer.parentNode.innerHTML = `<h2>${contentBefore}<h2>`;
//             // range.surroundContents(span);
//             console.log('range', range.commonAncestorContainer.parentNode.innerHTML);
//         }

//     }
//     return (
//         <div>
//             <div id='myText' onMouseUp={handleMouseUp} contentEditable={true}>
//                 <p className='p'>asdasd</p>
//             </div>
//             <button >Thay đổi kích thước chữ</button>
//         </div>
//     );
// };

// export default RichTextJS;