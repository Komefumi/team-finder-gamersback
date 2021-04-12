import classnames from 'classnames';

import HoldingChildrenProps from 'types/HoldingChildrenProps';
import StandardCardProps from 'types/StandardCardProps';
import GamerCardProps from 'types/GamerCardProps';
import NewPostCardProps from 'types/NewPostCardProps';

import cardStyling from 'styling/card.module.sass';

const {
  'card-structure': cardStructure, 'card-header': cardHeader, 'card-header-rule': cardHeaderRule,
  'card-title': cardTitle, 'card-body': cardBody,
  'gamer-card-structure': gamerCardStructure, 'gamer-card-front-space': gamerCardFrontSpace,
  'gamer-card-back-face': gamerCardBackFace, 'display-picture-space': displayPictureSpace,
  'display-picture': displayPicture, 'display-name-space': displayNameSpace, 'display-name': displayName,
  'gamer-stats-space': gamerStatsSpace, 'gamer-stat-row': gamerStatRow,
  'gamer-stat-label': gamerStatLabel, 'gamer-stat-values': gamerStatValues, 'gamer-roles': gamerRoles,
  'gamer-role-item': gamerRoleItem, 'gamer-role-graphic': gamerRoleGraphic, 'gamer-role-name': gamerRoleName,
  'face-switcher-space': faceSwitcherSpace, 'language-space': languageSpace,
  'achivements-space': achievementsSpace, 'recruitment-details-space': recruitmentDetailsSpace
} = cardStyling;

console.log(gamerRoles);

export function CardStructure({ children }: HoldingChildrenProps) {
  return (
    <div className={cardStructure}>{children}</div>
  );
}

export function CardHeader({ children }: HoldingChildrenProps) {
  return (
    <header className={cardHeader}>
      {children}
      <hr className={cardHeaderRule} />
    </header>
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

export function NewPostCard(props: NewPostCardProps) {
  const title = props.title || 'Create your post';
  return (
    <CardStructure>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <textarea name="" id="" cols={30} rows={10} placeholder="Share what you are thinking ?" />
      </CardBody>
    </CardStructure>
  );
}

export function GamerCard({ name, profilePictureSrc, gamerStats, languages, achievements, availableForRecruitment }: GamerCardProps) {
  return (
    <div className={gamerCardStructure}>
      <div className={gamerCardFrontSpace}>
        <div className={displayPictureSpace}>
          <img className={displayPicture} src={profilePictureSrc} alt=""/>
        </div>
        <div className={displayNameSpace}>
          <h4 className={displayName}>{name}</h4>
        </div>
        <div className={gamerStatsSpace}>
          <div className={gamerStatRow}>
            <div className={gamerStatLabel}>Game</div>
            <div className={gamerStatValues}>{gamerStats.game}</div>
          </div>
          <div className={gamerStatRow}>
            <div className={gamerStatLabel}>Team</div>
            <div className={gamerStatValues}>{gamerStats.team || '-'}</div>
          </div>
          <div className={gamerStatRow}>
            <div className={gamerStatLabel}>Rank</div>
            <div className={gamerStatValues}>{gamerStats.rank}</div>
          </div>
          <div className={gamerStatRow}>
            <div className={gamerStatLabel}>Role</div>
            <div className={classnames([gamerRoles, gamerStatValues])}>
              {gamerStats.roles.map(({RenderGraphic, name}) => (
                <div className={gamerRoleItem}>
                  <RenderGraphic className={gamerRoleGraphic} />
                  <span className={gamerRoleName}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}