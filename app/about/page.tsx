import { IoHardwareChipOutline } from "react-icons/io5";
import { FaNewspaper, FaTelegramPlane } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import {
  AiOutlineMessage,
  AiOutlineMail,
  AiOutlineSend,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

function About() {
  const headingStyle: string = "font-bold";
  const sectionsOfArticleStyle: string =
    "[&>section>p]:text-sm [&>section>p]: [&>section>p,div]:opacity-60 [&>section>div]:opacity-60 [&>section]:my-16";

  return (
    <main className="my-16 w-5/6 mx-auto">
      <article className={sectionsOfArticleStyle}>
        <section>
          <h2 className={headingStyle}>About TECH</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, non
            ad provident esse ea incidunt et vel rerum saepe atque distinctio
            laboriosam placeat deleniti corrupti cupiditate porro magni dolor
            repellat!
          </p>
        </section>

        <section className="border-y rounded-2xl text-center py-4 [&>div]:flex [&>div]:justify-around">
          <div >
            <IoHardwareChipOutline className="text-2xl rotate-12" />
            <FaNewspaper className="text-4xl rotate-45" />
          </div>
          <h1 className={headingStyle}>
            an online magazine for digital devices.
          </h1>
          <div >
            <MdCompareArrows className="text-6xl -rotate-12" />
            <GiProcessor className="text-xl -rotate-6" />
          </div>
        </section>

        <section>
          <h2 className={headingStyle}>TECH story</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            illo quia culpa voluptates sit, non ullam nisi veniam expedita eaque
            dolores laborum earum iusto veritatis odit, debitis error ab.
            Voluptas!
          </p>
        </section>

        <section>
          <h2 className={headingStyle}>What is it about?</h2>
          <h4 className="ml-3 my-6 text-sm">Digital devices : </h4>

          <div className="ml-16 [&>h3]:flex [&>h3]:items-center [&>h3]:gap-3 [&>h3]:my-3 [&>p]:ml-9">
            <h3 className={headingStyle}>
              <IoHardwareChipOutline />
              Information
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              repudiandae dignissimos, illo quia distinctio veritatis asperiores
              quibusdam.
            </p>

            <h3 className={headingStyle}>
              <FaNewspaper />
              News
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </section>
      </article>

      <footer>
        <section>
          <h4 className={headingStyle}>Contacts:</h4>
          <button>
            <AiOutlineMessage />
          </button>
          <button>
            <AiOutlineMail />
          </button>
          <button>
            <AiOutlineWhatsApp />
          </button>
        </section>

        <section>
          <h4 className={headingStyle}>Join us:</h4>
          <button>
            <FaTelegramPlane />
          </button>
          <button>
            <AiOutlineInstagram />
          </button>
          <button>
            <AiOutlineLinkedin />
          </button>
          <button>
            <AiOutlineYoutube />
          </button>
        </section>

        <section>
          <label>
            <h4 className={headingStyle}>Send your comment:</h4>
            <input type="text" placeholder="comment" />
          </label>
          <label>
            E-mail:
            <input type="text" placeholder="optional" />
          </label>
          <button>
            <AiOutlineSend />
          </button>
        </section>
      </footer>
    </main>
  );
}

export default About;
