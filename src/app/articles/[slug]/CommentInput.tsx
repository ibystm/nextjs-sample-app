'use client'

import { useState } from 'react'
import { Button, Flex, FormControl, Input } from '../../common/chakraComponents'

export function CommentInput() {
  const [comment, setComment] = useState('')
  const handleClick = (): void => {
    // commmentを追加する処理
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
