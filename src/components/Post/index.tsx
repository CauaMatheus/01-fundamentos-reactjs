import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, InvalidEvent, useState } from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';
import { FormEvent } from 'react';

interface IPostProps {
  author: {
    avatar_url: string;
    name: string;
    role: string;
  };
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[];
  tags: string[];
  publishedAt: Date;
}

export function Post({ author, content, tags, publishedAt }: IPostProps) {
  const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'de' yyyy 'ás' hh:mm'h'", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [newCommentText, setNewCommentText] = useState('');
  function handleNewCommentTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }
  const isNewCommentEmpty = newCommentText.trim().length === 0;
  
  const [comments, setComments] = useState<string[]>([]);
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    if(!newCommentText.trim()) {
      return;
    }

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  function deleteComment(content: string) {
    setComments(comments.filter((comment) => comment !== content));
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          }

          if (item.type === 'link') {
            return <p key={item.content}><a href={item.content}>{item.content}</a></p>
          }

          return <></>
        })}

        <p className={styles.hashtags}>
          {tags.map((tag) => (
            <a key={tag} href='#'>{tag}</a>
          ))}
        </p>
      </div>

      <form 
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentário'
          value={newCommentText}
          onChange={handleNewCommentTextChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button 
            disabled={isNewCommentEmpty}
            type='submit'
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment 
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}