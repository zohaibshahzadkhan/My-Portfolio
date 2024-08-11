import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main
      className="relative flex flex-col justify-center items-center  overflow-hidden 
    mx-auto sm:px-10 px-5 bg-black-100"
    >
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
