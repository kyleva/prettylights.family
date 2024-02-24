import { ListItem, ListSection } from '@/types/list'
import {
  faDiscord,
  faFacebook,
  faReddit,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons'

const COMMUNITY_LIST_ITEMS: ListItem[] = [
  {
    icon: faDiscord,
    label: 'discord.gg/prettylightsfamily',
    link: 'https://discord.gg/prettylightsfamily',
  },
  {
    icon: faFacebook,
    label: '@prettylightsfamily',
    link: 'https://www.facebook.com/groups/281952911877924',
  },
  {
    icon: faReddit,
    label: '/r/prettylights',
    link: 'https://old.reddit.com/r/prettylights',
  },
  {
    icon: faTwitch,
    label: 'twitch.tv/prettylights',
    link: 'https://twitch.tv/prettylights',
  },
]

export const LIST_SECTIONS: ListSection[] = [
  {
    name: 'Community',
    items: COMMUNITY_LIST_ITEMS,
  },
]
