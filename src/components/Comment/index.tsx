import styles from './styles.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { useState } from 'react';

interface ICommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: ICommentProps) {
  const [likesCount, setLikesCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikesCount((likes) => {
      return likes + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/CauaMatheus.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cauã Matheus</strong>
              <time
                title='05 de outubro de 2022 ás 13:32'
                dateTime='2022-10-05 13:32:00'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp /> Aplaudir <span>{likesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
