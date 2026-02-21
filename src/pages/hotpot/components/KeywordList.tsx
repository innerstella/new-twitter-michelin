import { Badge, Flex } from '@radix-ui/themes';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../fbase';
import { Keyword, Recipe } from '../types';

const KEYWORDS: { label: string; value: Keyword }[] = [
  { label: '🌶 매콤', value: '매콤' },
  { label: '🧂 짭짤', value: '짭짤' },
  { label: '🍋 새콤', value: '새콤' },
  { label: '🍯 달콤', value: '달콤' },
  { label: '🥜 고소', value: '고소' },
];

const KeywordList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selected, setSelected] = useState<Keyword>('매콤');

  useEffect(() => {
    const fetchRecipes = async () => {
      const snapshot = await getDocs(collection(db, 'source'));
      const list: Recipe[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Recipe, 'id'>),
      }));
      setRecipes(list);
    };
    fetchRecipes();
  }, []);

  const filtered = recipes.filter((r) => r.keyword === selected);

  return (
    <Wrapper>
      <KeyNav>
        {KEYWORDS.map((k) => (
          <Badge
            key={k.value}
            onClick={() => setSelected(k.value)}
            color="red"
            size="3"
            variant={selected === k.value ? 'solid' : 'outline'}
          >
            {k.label}
          </Badge>
        ))}
      </KeyNav>
      <List>
        {filtered.map((src) => (
          <SrcRow key={src.id}>
            <Link
              to={`/hotpot/detail/${src.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Flex direction="row" gap="2" align="center">
                <span>{src.name}</span>
                <Badge> #{src.keyword}</Badge>
              </Flex>
            </Link>
            <ViewCount>👀 {src.view.toLocaleString()}</ViewCount>
          </SrcRow>
        ))}
      </List>
    </Wrapper>
  );
};

export default KeywordList;

const Wrapper = styled.div``;

const KeyNav = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.div`
  overflow-y: auto;
  height: 340px;
`;

const SrcRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px;
  border-bottom: 1px solid #f0f0f0;
  font-family: 'SUIT', sans-serif;
  font-size: 14px;
`;

const ViewCount = styled.span`
  font-size: 13px;
  color: #888;
`;
