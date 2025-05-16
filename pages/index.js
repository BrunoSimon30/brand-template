import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-end px-12 py-10">
        <div className="menu">
          <ul className="flex gap-8">
            <Link href={""}>Home</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Services</Link>
          </ul>
        </div>
        <div className="logo-wrap">
          <Link href={""} className="uppercase text-5xl">
            the logo Name
          </Link>
        </div>
        <div className="mail-wrap">
          <Link href={""} className=" text-3xl">
            hello@thelogoName.com
          </Link>
        </div>
      </header>
      <section className="h-screen   flex items-center  w-full">
        <div className="container mx-auto max-w-screen ">
           <h1 className="text-[120px] capitalize font-medium">
          Elevate Your <br />
          Digital Presence
          <br />
          with The Logo
        </h1>
        </div>
       
      </section>
      <section className="h-screen  "></section>
    </>
  );
}
