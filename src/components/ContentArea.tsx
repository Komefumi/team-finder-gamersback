import { BiHeadphone } from 'react-icons/bi';
import { GiGrenade } from 'react-icons/gi';
import { BiAnchor } from 'react-icons/bi';
import { GiSplitArrows } from 'react-icons/gi';

import StandardCard, { NewPostCard, GamerCard } from 'components/Card';
import playerImage from 'assets/player.jpg';

import HoldingChildrenProps from 'types/HoldingChildrenProps';
import GamerCardProps from 'types/GamerCardProps';

import contentAreaStyling from 'styling/content-area.module.sass';

const { containment, column, 'feed-column': feedColumn } = contentAreaStyling;

const Column = ({ children }: HoldingChildrenProps) => (
  <div className={column}>{children}</div>
);

const FeedColumn = ({ children }: HoldingChildrenProps) => (
  <div className={feedColumn}>{children}</div>
);

const sampleUser: GamerCardProps = {
  profilePictureSrc: playerImage,
  name: 'Gaming Name',
  gamerStats: {
    game: 'Valorant',
    team: undefined,
    rank: 'Diamond II',
    roles: [
      { name: 'support', RenderGraphic: () => <BiHeadphone size={"1.25em"} /> },
      { name: 'flagger', RenderGraphic: () => <GiGrenade size={"1.25em"} /> },
      { name: 'Anchor', RenderGraphic: () => <BiAnchor size={"1.25em"} /> },
      { name: 'Flex', RenderGraphic: () => <GiSplitArrows size={"1.25em"} /> }
    ],
  },
  availableForRecruitment: false,
};

export default function ContentArea() {
  return (
    <div className={containment}>
      <Column>
        <GamerCard {...sampleUser} />
      </Column>
      <FeedColumn>
        <NewPostCard />
      </FeedColumn>
      <Column>
        <StandardCard title="Standard Card, Placeholder, Dummy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero nam quasi sed esse dignissimos eveniet necessitatibus ipsam vel impedit quos, deleniti consectetur dolorem eos totam laboriosam temporibus vitae dolorum!
        </StandardCard>
        <StandardCard title="Standard Card, Placeholder, Dummy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero nam quasi sed esse dignissimos eveniet necessitatibus ipsam vel impedit quos, deleniti consectetur dolorem eos totam laboriosam temporibus vitae dolorum!
        </StandardCard>
      </Column>
    </div>
  );
}
