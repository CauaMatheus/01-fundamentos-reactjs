import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Cauã Matheus'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at vitae a, cumque neque officiis! Facilis autem, tenetur dignissimos nesciunt explicabo atque quisquam sapiente, at quaerat veritatis debitis perferendis placeat!'
          />
          <Post 
            author='Kenzo'
            content='Novo post muito legal!'
          />
        </main>
      </div>
    </>
  )
}
