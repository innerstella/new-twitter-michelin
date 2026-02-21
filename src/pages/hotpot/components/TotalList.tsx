import { Badge, Flex } from '@radix-ui/themes';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../fbase';
import { Recipe } from '../types';

const TotalList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

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

  return (
    <List>
      {recipes.map((src) => (
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
  );
};

export default TotalList;

const List = styled.div`
  overflow-y: auto;
  height: 420px;
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
