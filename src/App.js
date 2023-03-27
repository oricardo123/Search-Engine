import SearchBar from "./components/SearchBar";

const App = () => {
  const handleSubmit = (term) => {
    console.log("Do a search with", term);
  };
  return <SearchBar onSubmit={handleSubmit} />;
};

export default App;
