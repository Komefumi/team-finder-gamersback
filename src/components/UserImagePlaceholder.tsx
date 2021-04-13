import UserImagePlaceholderProps from 'types/UserImagePlaceholderProps';

import PlaceholderUserImageSrc from 'assets/g844.png';

export default function UserImagePlaceholder({ size }: UserImagePlaceholderProps) {
  return (<img width={size} height={size} src={PlaceholderUserImageSrc} alt="User Placeholder" />);
}
