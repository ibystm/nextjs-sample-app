import NextLink from 'next/link'
import { Button, Heading } from '../common/chakraComponents'

export default function NotFound() {
  return (
    <div>
      <Heading mb={4}>お探しの記事が見つかりませんでした。</Heading>
      <Button as={NextLink} href="/">
        トップへ戻る
      </Button>
    </div>
  )
}
