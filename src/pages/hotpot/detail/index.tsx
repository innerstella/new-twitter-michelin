import { Badge, CheckboxGroup } from '@radix-ui/themes';
import { doc, getDoc, increment, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Template from '../../../templates';
import Bar from '../../group/components/Bar';
import { db } from '../fbase';
import { Recipe } from '../types';

const HotpotDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      const ref = doc(db, 'source', id);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        const raw = data?.ingredients;
        const ingredient: string[] = Array.isArray(raw)
          ? raw
          : typeof raw === 'string'
            ? raw
                .split(',')
                .map((s: string) => s.trim())
                .filter(Boolean)
            : [];
        setRecipe({
          id: snap.id,
          ...(data as Omit<Recipe, 'id' | 'ingredient'>),
          ingredient,
        });
        await updateDoc(ref, { view: increment(1) });
      }
      setLoading(false);
    };
    fetchDetail();
  }, [id]);

  return (
    <Template showAd={!loading && recipe !== null}>
      <Wrapper>
        <Bar title={recipe?.name} />
        <Badge size="2" color="gray">
          #{recipe?.keyword}
        </Badge>
        <Section>
          <SectionTitle>🥢 RECIPE 🥢</SectionTitle>
          <Instruction>재료를 클릭하면 체크할 수 있어요!</Instruction>
          <CheckboxGroup.Root>
            {recipe?.ingredient?.map((item, i) => (
              <CheckboxGroup.Item key={i} value={item}>
                {item}
              </CheckboxGroup.Item>
            ))}
          </CheckboxGroup.Root>
        </Section>
      </Wrapper>
    </Template>
  );
};

export default HotpotDetailPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  padding: 0 25px 40px;
  background-color: #fafafa;
  font-family: 'SUIT', sans-serif;
  box-sizing: border-box;
`;

const Section = styled.div`
  margin-top: 28px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const Instruction = styled.p`
  font-size: 13px;
  color: #888;
  margin-bottom: 16px;
`;
