import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type ListSection = {
  name: string
  items: ListItem[]
}

export type ListItem = {
  icon: IconDefinition
  label: string
  link: string
}
