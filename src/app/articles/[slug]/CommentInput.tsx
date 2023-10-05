'use client'

import { EventHandler, MouseEventHandler, useState } from 'react'
import { Button, Flex, FormControl, Input } from '../../common/chakraComponents'

type Props = {
  slug: string
}

export function CommentInput({ slug }: Props) {
  console.log({ slug })
  const [comment, setComment] = useState('')
  const handleClick = async (): Promise<void> => {
    console.log({ comment })
    await fetch(`/api/articles/${slug}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment }),
    })
  }
  return (
    <form>
      <Flex gap={4}>
        <FormControl>
          <Input
            type="text"
            variant="flushed"
            placeholder="コメントを書く"
            value={comment}
            onChange={(e) => setComment(e.currentTarget.value)}
          />
        </FormControl>
        <Button
          onClick={handleClick}
          isDisabled={comment.length === 0}
          colorScheme="teal"
        >
          送信
        </Button>
      </Flex>
    </form>
  )
}
