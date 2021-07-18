import { useState } from "react";
import { api } from "../src/services/api";
import { MyCard } from "../src/components/Card";

import styles from "./characters.module.scss";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";

export default function Home({ allCharacters }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className={styles.mainDisplay}>
        <Header />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          allCharacters.map((character) => {
            return (
              <>
                <MyCard
                  key={character.id}
                  character={character}
                  onClick={() => setIsLoading(true)}
                />
              </>
            );
          })
        )}
        <Footer />
      </div>
    </>
  );
}
export const getStaticProps = async () => {
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

  return {
    props: {
      allCharacters: data.data.results,
    },
    revalidate: 60 * 60 * 8,
  };
};
