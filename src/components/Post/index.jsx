import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/CauaMatheus.png'/>
          <div className={styles.authorInfo}>
            <strong>Cauã Matheus</strong>
            <span>Web Developer</span>
          </div>
        </div>
        
        <time
          title='05 de outubro de 2022 ás 13:32'
          dateTime='2022-10-05 13:32:00'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href='#'>jane.design/doctorcare</a></p>

        <p className={styles.hashtags}>
          <a href='#'>#novoprojeto</a>
          <a href='#'>#nlw</a>
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe seu comentário'
        />
        
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}