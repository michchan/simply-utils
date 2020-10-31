import {
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components/macro'

type StyledCss <T = unknown> = FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<T>>
export default StyledCss