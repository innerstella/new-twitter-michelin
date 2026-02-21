import { CheckboxGroup } from '@radix-ui/themes';
import { doc, getDoc, increment, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Template from '../../../templates';
import Header from '../../home/components/Header';
import { db } from '../fbase';
import { Recipe } from '../types';

const HotpotDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [copied, setCopied] = useState(false);

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
    };
    fetchDetail();
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Template>
      <Wrapper>
        <Header />
        <Card>
          <Name>{recipe?.name}</Name>
          <KeywordBadge>#{recipe?.keyword}</KeywordBadge>
        </Card>
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

        <ButtonRow>
          <BackBtn onClick={() => navigate(-1)}>← 뒤로</BackBtn>
          <ShareBtn onClick={handleShare}>
            {copied ? '✓ 복사됨' : '🔗 공유하기'}
          </ShareBtn>
        </ButtonRow>
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

const Card = styled.div`
  margin-top: 24px;
  padding: 24px;
  background: linear-gradient(90deg, #bc1d1b 0%, rgba(188, 29, 27, 0.85) 100%);
  border-radius: 16px;
  color: #fff;
`;

const Name = styled.h2`
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 700;
`;

const KeywordBadge = styled.span`
  font-size: 14px;
  font-weight: 300;
  opacity: 0.9;
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

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const BackBtn = styled.button`
  background: none;
  border: none;
  font-family: 'SUIT', sans-serif;
  font-size: 14px;
  color: #555;
  cursor: pointer;
`;

const ShareBtn = styled.button`
  padding: 10px 20px;
  background: #bc1d1b;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-family: 'SUIT', sans-serif;
  font-size: 14px;
  cursor: pointer;
`;
