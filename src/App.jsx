import { Post } from "./Post";

export function App() {
  return (
    <>
      <Post 
        author="Cauã Matheus"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at vitae a, cumque neque officiis! Facilis autem, tenetur dignissimos nesciunt explicabo atque quisquam sapiente, at quaerat veritatis debitis perferendis placeat!"
      />
      <Post 
        author="Kenzo"
        content="Novo post muito legal!"
      />
    </>
  )
}
