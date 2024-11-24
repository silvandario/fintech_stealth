import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="flex min-h-screen w-full justify-between font-inter">
      <Hero />
    </div>
    


    <main className="flex min-h-screen w-full justify-between font-inter" id="child">
      {children}
      <div className="auth-asset">
        <div>
          <Image 
            src="/icons/joe.svg"
            alt="Auth image"
            width={500}
            height={500}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
    
     { /* 
     <div className="flex min-h-screen w-full justify-between font-inter">
     <ValueProposition /> 
     </div>
     */}
     
    
    </>
  );
}