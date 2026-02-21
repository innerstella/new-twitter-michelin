import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db } from "../fbase";
import { Recipe } from "../types";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [results, setResults] = useState<Recipe[]>([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const snapshot = await getDocs(collection(db, "source"));
      const list: Recipe[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Recipe, "id">),
      }));
      setRecipes(list);
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }
    const q = query.replace(/\s/g, "").toLowerCase();
    const filtered = recipes.filter((r) =>
      r.name.replace(/\s/g, "").toLowerCase().includes(q)
    );
    setResults(filtered);
    setOpen(true);
  }, [query, recipes]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <Wrapper ref={ref}>
      <Input
        placeholder="🔍  소스 이름 검색하기"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {open && results.length > 0 && (
        <Dropdown>
          {results.map((r) => (
            <DropdownItem
              key={r.id}
              onClick={() => {
                setOpen(false);
                setQuery("");
                navigate(`/hotpot/detail/${r.id}`);
              }}
            >
              {r.name}
              <KeywordTag> #{r.keyword}</KeywordTag>
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  font-family: "SUIT", sans-serif;
  font-size: 14px;
  outline: none;
  background: #fff;

  &:focus {
    border-color: #bc1d1b;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 6px 0;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
`;

const DropdownItem = styled.li`
  padding: 10px 16px;
  font-family: "SUIT", sans-serif;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #fff5f5;
  }
`;

const KeywordTag = styled.span`
  color: #ae2f1e;
  font-size: 12px;
`;
