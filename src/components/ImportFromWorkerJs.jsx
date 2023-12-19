'use client'

const ImportFromWorkerJs = () => {
 	return (
		<div className='flex flex-col' onClick={()=> console.log("first")}>
			<p className='text-green-500' onClick={()=> console.log("first")} >Green Text</p>
			<p className='text-red-500'>Red Text</p>
			<p className='text-amber-200'>Amber Text</p>
			<p>You</p>
		</div>
	)
}

export default ImportFromWorkerJs

// "use client";
// import React, { ReactNode, useEffect, useRef, useState } from "react";
// import { createPortal } from "react-dom";

// const ModalAnnouncement = ({ children }) => {
//   const ref = (useRef < Document) | (null > document);
//   const [isModalOpen, setModalOpen] = useState(!!children);

//   const modalContentRef = useRef < HTMLDivElement > null;

//   useEffect(() => {
//     if (isModalOpen && !!ref.current) {
//       ref.current.body.style.overflow = "hidden";
//     }

//     return () => {
//       if (!!ref.current) {
//         ref.current.body.style.overflow = "unset";
//       }
//     };
//   }, [isModalOpen]);

//   return (
//     <>
//       {ref.current?.body &&
//         !!children &&
//         createPortal(
//           <div
//             className={`${
//               isModalOpen ? "scale-100 bg-opacity-50 " : " opacity-0 scale-0"
//             } fixed left-0 top-0  bg-black ease-in duration-200 origin-center  w-screen h-screen flex items-center justify-center   bg-opacity-50 transition-opacity z-50 `}
//           >
//             <div
//               ref={modalContentRef}
//               className={`${
//                 isModalOpen ? "scale-100 opacity-100 " : "scale-0 opacity-0"
//               } w-screen md:w-[44vw] h-fit border-black border-[10px]     left-0 top-0 py-10 md:py-16 px-2 md:px-10 rounded-xl bg-white mx-auto relative flex items-center justify-center z-[9992929292929292929]`}
//             >
//               <div
//                 className="absolute p-2 border-[1px] border-gray-100 bottom-5 right-5 bg-white shadow-lg rounded-[100%] cursor-pointer"
//                 onClick={() => setModalOpen(false)}
//               ></div>
//               <div
//                 className="text-xl leading-10 text-center mx-auto "
//                 dangerouslySetInnerHTML={{ __html: children }}
//               />
//             </div>
//           </div>,
//           ref.current.body
//         )}
//     </>
//   );
// };

// export default ModalAnnouncement;
