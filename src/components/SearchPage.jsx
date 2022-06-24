import { Container, Input } from "../style/SearchPageStyle";
import { Link } from "react-router-dom";
import { useState } from "react";

function SearchPage() {
  const [value, setValue] = useState();
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Link to="/clip">
        <button>Clip</button>
      </Link>
      <Container>
        <Input onChange={handleInput} value={value}></Input>
      </Container>
    </>
  );
}

export default SearchPage;
