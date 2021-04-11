import HoldingChildrenProps from 'types/HoldingChildrenProps';

import contentAreaStyling from 'styling/content-area.module.sass';
import cardStyling from 'styling/card.module.sass';

const { 'card-structure': cardStructure } = cardStyling;
const { containment, column, 'feed-column': feedColumn } = contentAreaStyling;

const Column = ({ children }: HoldingChildrenProps) => (
  <div className={column}>{children}</div>
);

const FeedColumn = ({ children }: HoldingChildrenProps) => (
  <div className={feedColumn}>{children}</div>
);

export default function ContentArea() {
  return (
    <div className={containment}>
      <Column>
        <div className={cardStructure}>

        </div>
      </Column>
      <FeedColumn>
        <div className={cardStructure}>

        </div>
      </FeedColumn>
      <Column>
        <div className={cardStructure}>

        </div>
      </Column>
    </div>
  );
}
