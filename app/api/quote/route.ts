export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const qouteUrl = 'https://favqs.com/api';
    const res = await fetch(`${qouteUrl}/qotd`);

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return new Response('Error fetching quote', { status: 500 });
  }
}

export interface Quote {
  id: number;
  dialogue: boolean;
  source: string;
  private: boolean;
  tags: any[];
  url: string;
  favorites_count: number;
  upvotes_count: number;
  downvotes_count: number;
  author: string;
  author_permalink: string;
  body: string;
}

export interface QuoteResponse {
  qotd_date: string;
  quote: Quote;
}
