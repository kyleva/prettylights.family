import { ReactElement } from 'react'

import { ListSection as ListSectionProps } from '@/types/list'
import { ListItem } from '../ListItem'

export const ListSection = ({
  items,
  name,
}: ListSectionProps): ReactElement => (
  <>
    <h2 className="font-mono text-2xl font-medium tracking-wide">{name}</h2>
    <ul className="space-y-4 max-w-full">
      {items.map((item) => (
        <ListItem key={item.label} {...item} />
      ))}
    </ul>
  </>
)
