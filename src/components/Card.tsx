import autosize from "autosize";
import { useRef, useEffect, useState, RefObject } from "react";
import classnames from "classnames";

import UserImagePlaceholder from "components/UserImagePlaceholder";

import HoldingChildrenProps from "types/HoldingChildrenProps";
import StandardCardProps from "types/StandardCardProps";
import GamerCardProps from "types/GamerCardProps";
import NewPostCardProps from "types/NewPostCardProps";
import CardFacesEnum from "types/CardFacesEnum";

import cardStyling from "styling/card.module.sass";

const {
  "card-structure": cardStructure,
  "card-header": cardHeader,
  "orange-left-piece": orangeLeftPiece,
  "card-header-rule": cardHeaderRule,
  "card-title": cardTitle,
  "card-body": cardBody,
  "post-body": postBody,
  "post-body-left": postBodyLeft,
  "post-body-right": postBodyRight,
  "post-body-text-writer": postBodyTextWriter,
  "upcoming-games-card-body": upcomingGamesCardBody,
  "gamer-card-structure": gamerCardStructure,
  "gamer-card-front-face": gamerCardFrontFace,
  "gamer-card-back-face": gamerCardBackFace,
  "display-picture-space": displayPictureSpace,
  "display-picture": displayPicture,
  "display-name-space": displayNameSpace,
  "display-name-left-piece": displayNameLeftPiece,
  "display-name-right-piece": displayNameRightPiece,
  "display-name": displayName,
  "gamer-stats-space": gamerStatsSpace,
  "gamer-stat-row": gamerStatRow,
  "gamer-stat-label": gamerStatLabel,
  "gamer-stat-values": gamerStatValues,
  "gamer-roles": gamerRoles,
  "gamer-role-item": gamerRoleItem,
  "gamer-role-graphic": gamerRoleGraphic,
  "gamer-role-name": gamerRoleName,
  "face-switcher-space": faceSwitcherSpace,
  "face-switch-button": faceSwitchButton,
  "switch-orb": switchOrb,
  "active-switch-orb": activeSwitchOrb,
  "language-space": languageSpace,
  "achievements-space": achievementsSpace,
  "recruitment-details-space": recruitmentDetailsSpace,
} = cardStyling;

console.log(gamerRoles);

export function CardStructure({ children }: HoldingChildrenProps) {
  return <div className={cardStructure}>{children}</div>;
}

export function CardHeader({ children }: HoldingChildrenProps) {
  return (
    <header className={cardHeader}>
      <div className={orangeLeftPiece} />
      {children}
      <hr className={cardHeaderRule} />
    </header>
  );
}

export function CardTitle({ children }: HoldingChildrenProps) {
  return <h3 className={cardTitle}>{children}</h3>;
}

export function CardBody({ children }: HoldingChildrenProps) {
  return <main className={cardBody}>{children}</main>;
}

export default function StandardCard({ title, children }: StandardCardProps) {
  return (
    <CardStructure>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </CardStructure>
  );
}

export function UpcomingGamesCard() {
  return (
    <CardStructure>
      <CardHeader>
        <CardTitle>Upcoming Games</CardTitle>
      </CardHeader>
      <div className={classnames([cardBody, upcomingGamesCardBody])}></div>
    </CardStructure>
  );
}

export function RecentlyUploadedCard() {
  return (
    <CardStructure>
      <CardHeader>
        <CardTitle>Recently Uploaded</CardTitle>
      </CardHeader>
      <div className={cardBody}></div>
    </CardStructure>
  );
}

export function NewPostCard(props: NewPostCardProps) {
  const title = props.title || "Create your post";
  const inputArea = useRef(null);
  const [isTextAreaAutosized, setIsTextAreaAutosized] = useState(false);

  useEffect(() => {
    if (!inputArea.current) return;
    if (!isTextAreaAutosized) {
      autosize((inputArea.current as unknown) as HTMLInputElement);
      setIsTextAreaAutosized(true);
    }

    return () => {
      if (isTextAreaAutosized && inputArea.current)
        autosize.destroy((inputArea.current as unknown) as HTMLInputElement);
    };
  }, [inputArea, isTextAreaAutosized, setIsTextAreaAutosized]);

  return (
    <CardStructure>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <div className={postBody}>
          <div className={postBodyLeft}>
            <UserImagePlaceholder size="44px" />
          </div>
          <div className={postBodyRight}>
            <textarea
              ref={inputArea}
              className={postBodyTextWriter}
              name=""
              id=""
              placeholder="Share what you are thinking ?"
            />
          </div>
        </div>
      </CardBody>
    </CardStructure>
  );
}

export function GamerCard({
  name,
  profilePictureSrc,
  gamerStats,
  languages,
  achievements,
  availableForRecruitment,
}: GamerCardProps) {
  const [currentFace, setCurrentFace] = useState(CardFacesEnum.FRONT);
  return (
    <div className={gamerCardStructure}>
      {currentFace === CardFacesEnum.FRONT && (
        <div className={gamerCardFrontFace}>
          <div className={displayPictureSpace}>
            <img className={displayPicture} src={profilePictureSrc} alt="" />
          </div>
          <div className={displayNameSpace}>
            <div className={displayNameLeftPiece} />
            <h4 className={displayName}>{name}</h4>
            <div className={displayNameRightPiece} />
          </div>
          <div className={gamerStatsSpace}>
            <div className={gamerStatRow}>
              <div className={gamerStatLabel}>Game</div>
              <div className={gamerStatValues}>{gamerStats.game}</div>
            </div>
            <div className={gamerStatRow}>
              <div className={gamerStatLabel}>Team</div>
              <div className={gamerStatValues}>{gamerStats.team || "-"}</div>
            </div>
            <div className={gamerStatRow}>
              <div className={gamerStatLabel}>Rank</div>
              <div className={gamerStatValues}>{gamerStats.rank}</div>
            </div>
            <div className={gamerStatRow}>
              <div className={gamerStatLabel}>Role</div>
              <div className={classnames([gamerRoles, gamerStatValues])}>
                {gamerStats.roles.map(({ RenderGraphic, name }) => (
                  <div className={gamerRoleItem}>
                    <RenderGraphic className={gamerRoleGraphic} />
                    <span className={gamerRoleName}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={faceSwitcherSpace}>
            <button
              className={faceSwitchButton}
              onClick={() => {
                setCurrentFace(CardFacesEnum.BACK);
              }}
            >
              <span className={classnames([switchOrb, activeSwitchOrb])} />
              <span className={switchOrb} />
            </button>
          </div>
        </div>
      )}
      {currentFace === CardFacesEnum.BACK && (
        <div className={gamerCardBackFace}>
          <div className={languageSpace}>
            <h5>Language</h5>
          </div>
          <div className={achievementsSpace}>
            <h5>Achievements</h5>
          </div>
          <div className={recruitmentDetailsSpace}>
            <h5>Available for recruitment: </h5>
          </div>
          <div className={faceSwitcherSpace}>
            <button
              className={faceSwitchButton}
              onClick={() => {
                setCurrentFace(CardFacesEnum.FRONT);
              }}
            >
              <span className={switchOrb} />
              <span className={classnames([switchOrb, activeSwitchOrb])} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
