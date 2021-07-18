import { Header } from "../../src/components/Header";
import { Footer } from "../../src/components/Footer";
import { BigCard } from "../../src/components/BigCard";
import { api } from "../../src/services/api";

import styles from "./character.module.scss";

export default function data({ character }) {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header />
        <BigCard character={character} />
        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  var md5 = require("md5");

  const { data } = await api.get("v1/public/characters", {
    params: {
      limit: 100,
      orderBy: "-modified",
      apikey: process.env.MARVEL_KEY,
      ts: Date.now(),
      hash: md5(
        Date.now() + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_KEY
      ),
    },
  });

  const paths = data.data.results.slice(0, 10).map((character) => {
    return {
      params: {
        slug: String(character.id),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  var md5 = require("md5");

  const { data } = await api.get(`/v1/public/characters/${slug}`, {
    params: {
      apikey: process.env.MARVEL_KEY,
      ts: Date.now(),
      hash: md5(
        Date.now() + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_KEY
      ),
    },
  });

  return {
    props: {
      character: data.data.results[0],
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
