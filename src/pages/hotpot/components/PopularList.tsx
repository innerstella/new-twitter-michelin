import { Badge, Flex } from '@radix-ui/themes';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../fbase';
import { Recipe } from '../types';

const PopularList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const snapshot = await getDocs(collection(db, 'source'));
      const list: Recipe[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Recipe, 'id'>),
      }));
      const sorted = [...list].sort((a, b) => b.view - a.view).slice(0, 5);
      setRecipes(sorted);
    };
    fetchRecipes();
  }, []);

  return (
    <List>
      {recipes.map((src, index) => (
        <SrcRow key={src.id}>
          <Rank>{index + 1}</Rank>
          <Link
            to={`/hotpot/detail/${src.id}`}
            style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}
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
  );
};

export default PopularList;

const List = styled.div`
  overflow-y: auto;
`;

const SrcRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 4px;
  border-bottom: 1px solid #f0f0f0;
  font-family: 'SUIT', sans-serif;
  font-size: 14px;
`;

const Rank = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #bc1d1b;
  min-width: 20px;
`;

const ViewCount = styled.span`
  font-size: 13px;
  color: #888;
  white-space: nowrap;
`;
