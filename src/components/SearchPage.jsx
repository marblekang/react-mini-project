import { useEffect, useState } from "react";
import { getData } from "../api/getData";
import { Container, Input } from "../style/SearchPageStyle";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { Loading } from "../Ui/Loading";
function SearchPage() {
  const [value, setValue] = useState("");
  const [shownValue, setShownValue] = useState("");
  const [news, setNews] = useState();
  const [page, setPage] = useState(1);
  let newPageData = [];

  const handleInput = (e) => {
    setShownValue(e.target.value);
    setTimeout(() => {
      setValue(e.target.value);
    }, 1500);
  };

  const handleButton = () => {
    setPage((prev) => ++prev);
  };

  useEffect(() => {
    if (value) {
      let newsData = getData(value, page);
      newsData.then((res) => {
        newPageData = [...res.data.response.docs];
        setNews((prev) => [...prev, ...newPageData]);
      });
    } else {
      setNews([]);
      setPage(1);
    }
  }, [value, page]);

  return (
    <>
      <Loading></Loading>
      <Link to="/clip">
        <button>Clip</button>
        <span>page:{page}</span>
      </Link>
      <Container>
        <Input onChange={handleInput} value={shownValue}></Input>
        {Boolean(value) ? <Card news={news}></Card> : null}
      </Container>
      <button onClick={handleButton}>more news</button>
    </>
  );
}

export default SearchPage;
