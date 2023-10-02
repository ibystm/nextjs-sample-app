import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'

export function CommentInput() {
  return (
    <Box mb="4">
      <FormControl>
        <FormLabel>コメントを書く</FormLabel>
        <Input type="text" />
      </FormControl>
    </Box>
  )
}
