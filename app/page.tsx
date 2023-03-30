import { Inter } from "next/font/google";
import Link from "next/link";
import { GiProcessor } from "react-icons/gi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMessage, AiOutlineMail } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const heroSectionClassNames: () => string = () => {
    const heroSectionMainClasses: string =
      "h-screen  flex flex-col items-center w-3/4 mx-auto text-center md:h-96";
    const heroSectionLgClasses: string =
      "lg:items-start lg:w-2/3 lg:flex-row-reverse lg:justify-around lg:mt-32 lg:w-full lg:text-left";
    return `${heroSectionMainClasses} ${heroSectionLgClasses}`;
  };

  const linkToOthersClassNames: string =
    "my-12 flex flex-col lg:flex-row w-3/4 mx-auto gap-32 [&>section>h3]:font-bold [&>section>p]:opacity-60  [&>section>p]:mb-6";

  return (
    <main className="mt-6">
      <section className={heroSectionClassNames()}>
        <div>
          <GiProcessor size="12em" />
        </div>
        <div className="lg:w-96">
          <h1 className="font-extrabold lg:hidden">TECH</h1>
          <h2 className="my-3 font-semibold opacity-60 lg:opacity-80">
            an online magazine for digital devices.
          </h2>
          <p className="text-xs opacity-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            reprehenderit suscipit, doloremque quos ut, explicabo voluptate
            commodi, alias impedit tempore labore ipsam quis atque voluptas quas
            voluptatem ipsa eum? Reprehenderit!
          </p>
        </div>
      </section>

      <article className={linkToOthersClassNames}>
        <section>
          <h3>Search, and analyse devices</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad illo
            rem sequi fugit neque nam quibusdam sed quos nulla dolores!
          </p>
          <Link href="/devices">Start</Link>
        </section>
        <section>
          <h3>Compare devices</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit neque
            qui repudiandae! Possimus.
          </p>
          <Link href="/compare">Compare</Link>
        </section>
        <section>
          <h3>Check news</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit quo?</p>
          <Link href="/news">Check</Link>
        </section>
      </article>

      <footer className="my-16 flex justify-center gap-9">
        <button>
          <AiOutlineMessage size="2.3em"/>
        </button>
        <button>
          <AiOutlineMail size="3em"/>
        </button>
        <button>
          <BsInstagram size="2em"/>
        </button>
      </footer>
    </main>
  );
}

export default Home;
