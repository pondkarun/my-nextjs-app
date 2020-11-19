import React from 'react'

export default function movies({ movies, randomData }) {
    return (
        <div>
            <h1>Movies</h1>
            <span>{randomData}</span>
            <ul>
                {movies.map((e, index) => {
                    return (
                        <li key={e.id}>
                            <img src={e.youtube_image} height="20" style={{ marginRight: 16 }} />
                            {`${index + 1}) ${e.title} : ${e.subtitle}`}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export async function getStaticProps() {
    const url = "http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods";
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            movies: data.youtubes,
            randomData: Math.random().toString(),
        },
    };
}
