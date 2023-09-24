import { Box, Spinner } from './common/chakraComponents'

export default function Loading() {
  return (
    <Box justifyContent="center" display="flex">
      <Spinner color="orange.400" size="xl" />
    </Box>
  )
}
