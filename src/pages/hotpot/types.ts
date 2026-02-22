export type Keyword = '매콤' | '짭잘' | '새콤' | '달콤' | '고소';

export interface Recipe {
  id: string;
  name: string;
  keyword: Keyword;
  view: number;
  ingredient: string[];
  explain?: string;
}
