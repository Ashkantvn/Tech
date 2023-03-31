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
  return (
    <main className="my-12">
      <article>
        <section>
          <h2>About TECH</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, non
            ad provident esse ea incidunt et vel rerum saepe atque distinctio
            laboriosam placeat deleniti corrupti cupiditate porro magni dolor
            repellat!
          </p>
        </section>

        <section>
          <IoHardwareChipOutline />
          <FaNewspaper />
          <MdCompareArrows />
          <GiProcessor />
          <h1>an online magazine for digital devices.</h1>
        </section>

        <section>
          <h2>TECH story</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            illo quia culpa voluptates sit, non ullam nisi veniam expedita eaque
            dolores laborum earum iusto veritatis odit, debitis error ab.
            Voluptas!
          </p>
        </section>

        <section>
          <div>
            <h2>What is it about?</h2>
            <span>Digital devices : </span>
          </div>

          <div>
            <h3>
              <IoHardwareChipOutline />
              Information
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              repudiandae dignissimos, illo quia distinctio veritatis asperiores
              quibusdam.
            </p>
          </div>

          <div>
            <h3>
              <FaNewspaper />
              News
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </section>
      </article>

      <footer>
        <section>
          <h4>Contacts:</h4>
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
          <h4>Join us:</h4>
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
            <AiOutlineYoutube/>
          </button>
        </section>

        <section>
          <label>
            <h4>Send your comment:</h4>
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
