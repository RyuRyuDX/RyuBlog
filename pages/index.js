import Link from "next/link";
import { client } from "../libs/client";
import Particles from "react-particles-js";


export default function Home({ blog }) {
  return (
    <>
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Particles
      className="particles-snow"
      params={{
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#333"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#B3B3B3"
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: false,
            speed: 40,
            size_min: 0.1,
            syno: false
          },
          line_linked: {
            enable: false,
            distance: 150, 
            color: "#333",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        }
      }}
    />
   </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

