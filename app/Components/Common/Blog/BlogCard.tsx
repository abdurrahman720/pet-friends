import Image, { StaticImageData } from 'next/image';


type Props = {
    title: string,
    description: string,
    img: string | StaticImageData
}

const BlogCard = ({title,description,img}: Props) => {
   return (
     <div className="flex flex-col  gap-4 group mb-5">
       <div
         className="bg-neutral w-[300px] h-[325px] tablet:w-[400px] flex items-center justify-center relative rounded-md
       translate-x-0 hover:translate-x-1 transition-transform hover:cursor-pointer"
       >
         <Image src={img} alt="dog" fill className="rounded-md " />
       </div>
       <div className="flex flex-col items-start gap-4">
         <div className="flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105 transition-transform">
           <i className="fa-regular fa-bookmark text-primary "></i>
           <h4 className="text-sm font-sans font-thin text-primary">Pet</h4>
         </div>
         <h4 className="text-2xl hover:text-primary">{title}</h4>
         <p className="font-sans font-light text-tsecondary">{description}</p>
         <div className="flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105 transition-transform">
           <h4 className="text-2xl text-primary">Read More</h4>
           <i className="fa-solid fa-paw text-primary rotate-90 mt-1"></i>
         </div>
       </div>
     </div>
   );
}

export default BlogCard;