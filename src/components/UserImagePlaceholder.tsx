import UserImagePlaceholderProps from 'types/UserImagePlaceholderProps';

import PlaceholderUserImageSrc from 'assets/g843.png';

import styles from 'styling/user-image-placeholder.module.sass';

export default function UserImagePlaceholder({ size }: UserImagePlaceholderProps) {
  return (<img className={styles.img} width={size} height={size} src={PlaceholderUserImageSrc} alt="User Placeholder" />);
}
