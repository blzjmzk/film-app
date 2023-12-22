interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: Props) => {
  return (
    <>
      <input
        autoFocus
        className="input input-bordered input-sm join-item w-full sm:input-md"
        placeholder="Search for films..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-neutral btn-sm join-item sm:btn-md">
        Search
      </button>
    </>
  );
};

export default Search;
