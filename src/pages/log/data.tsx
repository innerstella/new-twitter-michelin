import { Link } from '@chakra-ui/react';

export const LOG_DATA = [
  {
    date: '2026/02/25',
    version: '1.3.1',
    type: 'feature',
    changes: (
      <p>
        생일 홍보 팝업 배너가 추가되었습니다.&nbsp;
        <Link
          href="https://innerstella.notion.site/affa459f47294cb599b9ccb8e8a9d9ef?source=copy_link"
          target="_blank"
          textDecoration="underline"
        >
          🔗 문의 링크
        </Link>
      </p>
    ),
  },
  {
    date: '2026/02/23',
    version: '1.3.0',
    type: 'feature',
    changes: '가게 홍보 배너가 추가되었습니다.',
  },
  {
    date: '2026/02/21',
    version: '1.2.2',
    type: 'feature',
    changes:
      '외부 페이지 이동 없이 훠궈 소스 백과사전을 볼 수 있도록 수정되었습니다.',
  },
  {
    date: '2026/02/20',
    version: '1.2.1',
    type: 'fix',
    changes: '추천 해시태그가 섞이지 않는 버그가 수정되었습니다.',
  },
  {
    date: '2026/02/19',
    version: '1.2.0',
    type: 'feature',
    changes: '그룹별 검색 및 추천 해시태그 페이지를 분리했습니다.',
  },
  {
    date: '2025/04/24',
    version: '1.1.1',
    type: 'feature',
    changes: '소상공인 찾기 메뉴가 추가되었습니다.',
  },
  {
    date: '2023/08/23',
    version: '1.1.0',
    type: 'feature',
    changes: 'UI가 수정되었습니다.',
  },
  {
    date: '2022/01/17',
    version: '1.0.0',
    type: 'feature',
    changes: '초기 버전이 배포되었습니다.',
  },
];

export default LOG_DATA;
