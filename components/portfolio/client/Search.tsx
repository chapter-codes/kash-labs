// "use client"

// import { handleSearch } from "@/app/portfolio/actions";
// import { TSearchFormState } from "@/app/portfolio/types";
// import { TProject } from "@/components/home/types";
// import Image from "next/image";
// import { useState, useRef, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { clearTimeout } from "timers";
// import { X } from "lucide-react";
// import * as motion from 'motion/react-client'
// //
// type SearchProps = {
//   setKeyEntered?: React.Dispatch<React.SetStateAction<boolean>>;
//   action?: any;
//   state?: TSearchFormState;
//   setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
// };



// function Search({ setSubmitting}: SearchProps) {
//   const router = useRouter();
//   const SearchRef = useRef<HTMLInputElement | null>(null)
//   const [showCancel, setShowCancel] = useState(false)
  
//   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const query = SearchRef.current?.value?? '' 
//     console.log('submitted')
//     if (query == null || query === "") return;
//     setSubmitting(true)
//     router.push('/portfolio?search=' + query);
//   }

// let timeout: ReturnType<typeof setTimeout> = useMemo(()=>{
//   return setTimeout(()=>{}, 0)
// }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const input = e.target.value;
//     if (input.length) {
//       setShowCancel(true);
//     } else {
//       setShowCancel(false);
//     }
//   };
//   const handleClear = () => {
//     console.log('cle')
//     if(SearchRef.current){
//       SearchRef.current.value = ''
//       setShowCancel(false)
//     }
//   };

//   return (
//     <form
//       action={"/portfolio?search=" + SearchRef.current?.value}
//       className="flex justify-between items-center  h-11 bg-card px-3 rounded-full"
//       onSubmit={handleSubmit}
//     >
//       <label htmlFor="search" className="flex justify-between  ">
//         <input
//           type="text"
//           id="search"
//           name="search"
//           className="h-full outline-0"
//           placeholder="Search"
//           defaultValue={SearchRef?.current?.value }
//           onChange={handleChange}
//           ref={SearchRef}
//         />
//       </label>
//         <motion.button 
//           initial={{opacity:0}}
//           animate={{opacity: showCancel? 1 :0}}
//           transition={{duration:1}}
//           className="mr-2"
//           type='button'
//           onClick={() =>handleClear()}
//         >
//           <X className="size-[21px]"  />
//         </motion.button>
//       <button type="submit" className="">
//         <Image
//           src="/icons/search.png"
//           width={21}
//           height={21}
//           alt="imagge of a magnifying glass representing search."
//         />
//       </button>
//     </form>
//   );
// }

// export default Search;
