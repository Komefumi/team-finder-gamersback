import HoldingChildrenProps from 'types/HoldingChildrenProps';
import StandardCardProps from 'types/StandardCardProps';

import cardStyling from 'styling/card.module.sass';

const { 'card-structure': cardStructure, 'card-header': cardHeader, 'card-title': cardTitle, 'card-body': cardBody } = cardStyling;

export function CardStructure({ children }: HoldingChildrenProps) {
  return (
    <div className={cardStructure}>{children}</div>
  );
}

export function CardHeader({ children }: HoldingChildrenProps) {
  return (
    <header className={cardHeader}>{children}</header>
  );
}

export function CardTitle({ children }: HoldingChildrenProps) {
  return (
    <h3 className={cardTitle}>{children}</h3>
  );
}

export function CardBody({ children }: HoldingChildrenProps) {
  return (
    <main className={cardBody}>{children}</main>
  );
}

export default function StandardCard({ title, children }: StandardCardProps) {
  return (
    <CardStructure>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </CardStructure>
  );
}