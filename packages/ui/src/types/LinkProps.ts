import type { HttpMethod } from "./HttpMethod"

export type LinkProps = {
  href: string,
  method?: HttpMethod,
  target?: string,
  download?: true,
}