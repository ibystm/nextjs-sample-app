const BASE_PATH = 'https://hacker-news.firebaseio.com'

/** Hacker Newsの人気・最新の記事500件の記事IDを取得する */
export async function getTopStories(): Promise<number[]> {
  return fetch(`${BASE_PATH}/v0/topstories.json`, {
    next: { revalidate: 60 },
  }).then((res) => res.json())
}
/** 記事の詳細データを取得する */
export async function getItem(
  id: number
): Promise<{ id: number; title: string }> {
  return fetch(`${BASE_PATH}/v0/item/${id}.json`).then((res) => res.json())
}
