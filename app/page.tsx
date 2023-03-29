import { Inter } from "next/font/google";
import { GiProcessor } from "react-icons/gi";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main className="mt-6">
      <section className="flex flex-col items-center w-3/4 mx-auto text-center">
        <div>
          <GiProcessor size="12em"/>
        </div>
        <h1 className=" font-extrabold">TECH</h1>
        <h2 className="my-3 font-semibold opacity-60">an online magazine for dgital devices.</h2>
        <p className="text-xs opacity-30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          reprehenderit suscipit, doloremque quos ut, explicabo voluptate
          commodi, alias impedit tempore labore ipsam quis atque voluptas quas
          voluptatem ipsa eum? Reprehenderit!
        </p>
      </section>
    </main>
  );
}

export default Home;
