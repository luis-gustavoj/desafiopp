import Image from "next/image";

import styles from "./styles.module.scss";

export const BigCard = ({ character }) => {
  return (
    <div className={styles.container}>
      <header>
        <Image
          width={700}
          height={160}
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          objectFit="cover"
        />
        <div>
          <h1>{character.name}</h1>
          <h2>
            {character.description
              ? character.description
              : "Unfortunately do not exists a description for this character"}
          </h2>
          <div className={styles.totalInfo}>
            <p>Total Comics: {character.comics.available}</p>
            <p>Total Stories: {character.comics.available}</p>
            <p>Total Series: {character.series.available}</p>
            <p>Total Events: {character.events.available}</p>
          </div>
        </div>
      </header>
      <section className={styles.content}>
        <div>
          <h3>Comics</h3>
          <ul>
            {character.comics.items.slice(0, 10).map((comic) => {
              return <li key={comic.resourceURI}>{comic.name}</li>;
            })}
          </ul>
        </div>
        <div>
          <h3>Stories</h3>
          <ul>
            {character.stories.items.slice(0, 10).map((storie) => {
              return <li key={storie.resourceURI}>{storie.name}</li>;
            })}
          </ul>
        </div>
        <div>
          <h3>Series</h3>
          <ul>
            {character.series.items.slice(0, 10).map((serie) => {
              return <li key={serie.resourceURI}>{serie.name}</li>;
            })}
          </ul>
        </div>
        <div>
          <h3>Events</h3>
          <ul>
            {character.events.items.slice(0, 10).map((event) => {
              return <li key={event.resourceURI}>{event.name}</li>;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
