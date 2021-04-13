import UserImagePlaceholderProps from 'types/UserImagePlaceholderProps';

import PlaceholderUserImageSrc from 'assets/g843.png';

export default function UserImagePlaceholder({ size }: UserImagePlaceholderProps) {
  return (<img width={size} height={size} src={PlaceholderUserImageSrc} alt="User Placeholder" />);
}
