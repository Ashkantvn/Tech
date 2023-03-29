import { Inter } from "next/font/google";
import Link from "next/link";
import { GiProcessor } from "react-icons/gi";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const heroSectionClassNames: () => string = () => {
    const heroSectionMainClasses: string ="flex flex-col items-center w-3/4 mx-auto text-center";
    const heroSectionLgClasses: string = "lg:w-2/3 lg:flex-row-reverse lg:justify-around lg:mt-32 lg:w-full lg:text-left";
    return `${heroSectionMainClasses} ${heroSectionLgClasses}`;
  };
  return (
    <main className="mt-6">
      <section className={heroSectionClassNames()}>
        <div>
          <GiProcessor size="12em"/>
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

      <article>
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
        </section>
      </article>
    </main>
  );
}

export default Home;
