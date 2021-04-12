import RoleItem from 'types/RoleItem';

type GamerCardProps = {
  name: string;
  profilePictureSrc: string;
  gamerStats: {
    game: string;
    team?: string;
    rank: string;
    roles: RoleItem[],
  },
  languages?: string[],
  achievements?: string[],
  availableForRecruitment: boolean,
};

export default GamerCardProps;