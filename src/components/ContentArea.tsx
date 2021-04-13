import { BiHeadphone } from 'react-icons/bi';
import { GiGrenade } from 'react-icons/gi';
import { BiAnchor } from 'react-icons/bi';
import { GiSplitArrows } from 'react-icons/gi';

import { NewPostCard, GamerCard, UpcomingGamesCard, RecentlyUploadedCard } from 'components/Card';
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

const size = "1.5em";

const sampleUser: GamerCardProps = {
  profilePictureSrc: playerImage,
  name: 'Gaming Name',
  gamerStats: {
    game: 'Valorant',
    team: undefined,
    rank: 'Diamond II',
    roles: [
      { name: 'support', RenderGraphic: () => <BiHeadphone size={size} /> },
      { name: 'flagger', RenderGraphic: () => <GiGrenade size={size} /> },
      { name: 'Anchor', RenderGraphic: () => <BiAnchor size={size} /> },
      { name: 'Flex', RenderGraphic: () => <GiSplitArrows size={size} /> }
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
        <UpcomingGamesCard />
        <RecentlyUploadedCard />
      </Column>
    </div>
  );
}
