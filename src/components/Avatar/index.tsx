import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true, ...othersProps }: IAvatarProps) {
  return (
    <img
      className={
        hasBorder
          ? styles.avatarWithBorder
          : styles.avatar
      }
      src={src}

      {...othersProps}
    />
  )
}