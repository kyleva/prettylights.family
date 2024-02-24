import { ReactElement } from 'react'

import { ListItem as ListItemProps } from '@/types/list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ListItem = ({
  icon,
  label,
  link,
}: ListItemProps): ReactElement => (
  <li>
    <a
      href={link}
      className="py-6 px-8 pr-10 border border-slate-400 rounded-xl hover:border-primary transition-colors duration-200 flex flex-col sm:flex-inline sm:flex-row items-center space-x-3 group space-y-4 sm:space-y-0"
    >
      <FontAwesomeIcon
        className="group-hover:text-primary duration-200"
        icon={icon}
        width={25}
        height={25}
      />
      <span className="text-slate-500 group-hover:text-slate-600 font-mono text-xs sm:text-sm md:text-base">
        {label}
      </span>
    </a>
  </li>
)
