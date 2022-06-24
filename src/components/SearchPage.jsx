import { useEffect, useState } from "react";
import { getData } from "../api/getData";
import { Container, Input } from "../style/SearchPageStyle";
import { Card } from "./Card";
import { Link } from "react-router-dom";

function SearchPage() {
  const [value, setValue] = useState("");
  const [shownValue, setShownValue] = useState("");
  const [news, setNews] = useState();
  const [page, setPage] = useState(1);
  const handleInput = (e) => {
    setShownValue(e.target.value);
    setTimeout(() => {
      setValue(e.target.value);
    }, 1500);
  };
  useEffect(() => {
    if (value) {
      let newsData = getData(value, page);
      newsData.then((res) => {
        console.log(res.data.response.docs);
        setNews(res.data.response.docs);

        //setPage((prev) => prev++);
      });
    } else {
      setNews([]);
    }
  }, [value, page]);
  return (
    <>
      <Link to="/clip">
        <button>Clip</button>
      </Link>
      <Container>
        <Input onChange={handleInput} value={shownValue}></Input>
        {Boolean(value) ? <Card news={news}></Card> : null}
      </Container>
    </>
  );
}

export default SearchPage;
