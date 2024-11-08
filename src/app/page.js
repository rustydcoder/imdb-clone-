import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `
  https://api.themoviedb.org/3${
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
  }?language=en-US&api_key=${API_KEY}`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw Error("Failed to fetch");
  }
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Home;
