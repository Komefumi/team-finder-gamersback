import UserImagePlaceholderProps from 'types/UserImagePlaceholderProps';

import PlaceholderUserImageSrc from 'assets/g844.png';

import styles from 'styling/user-image-placeholder.module.sass';

export default function UserImagePlaceholder(_props: UserImagePlaceholderProps) {
  return (<img className={styles.img} width="33px" height="33px" src={PlaceholderUserImageSrc} alt="User Placeholder" />);
}
