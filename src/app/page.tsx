
import Image from "next/image";
import button from "@/components/button";
export default function HomePage() {
  return (
    <section className="relative w-full h-s">
      <Image src="/ded7c8dac32ab777cda7359bf78455f23b0d7a3b (1).png" alt="Webinar Hero" fill style={{ objectFit: "cover" }} className="relative w-full h-s" />
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-white text-xl font-bold">Vidyamath.com</h1>
        </div>
      </div>
      <button/>
    </section>
  );
  
  ;}