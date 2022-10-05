import styles from './styles.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function Comment() {
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

            <button title='Deletar comentário'>
              <Trash />
            </button>
          </header>

          <p>Conteudo bala ae</p>
        </div>

        <footer>
          <button><ThumbsUp /> Aplaudir <span>20</span></button>
        </footer>
      </div>
    </div>
  );
}
