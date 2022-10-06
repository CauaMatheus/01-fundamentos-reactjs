import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

interface IPost {
  id: number;
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

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/gustavokenzo1.png',
      name: 'Gustavo Kenzo',
      role: 'FullStack Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de fazer um projeto simples aqui pra NASA, foi só coisa básica tipo criar um foguete e configurar a trajetória dele pra marte :D'
      },
      {
        type: 'link',
        content: '👉 https://www.nasa.gov/'
      }
    ],
    tags: [
      '#novoprojeto',
      '#basiquinho',
      '#nasa'
    ],
    publishedAt: new Date('2022-05-20 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/CauaMatheus.png',
      name: 'Cauã Matheus',
      role: 'Back-end Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      }
    ],
    tags: [
      '#novoprojeto',
      '#nlw',
      '#rocketseat'
    ],
    publishedAt: new Date('2022-05-21 20:00:00'),
  }
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              tags={post.tags}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}
