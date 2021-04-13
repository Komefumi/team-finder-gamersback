import { ReactNode } from 'react';

import CardHeaderLeftPieceTypeEnum from 'types/CardHeaderLeftPieceTypeEnum';

type CardHeaderProps = {
  leftPieceToUse?: CardHeaderLeftPieceTypeEnum,
  children: ReactNode,
}

export default CardHeaderProps;
