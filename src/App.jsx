import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
     <Header /> 

    <div className={styles.wrapper}>
     <Sidebar />
      <main>
        <Post 
          author="André Renan" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure quasi dolores odit nostrum distinctio quam? Laborum nisi maxime asperiores corporis cumque repellat quod ab. Maxime iure libero dignissimos eum." 
        />
        <Post 
          author="Mariane" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure quasi dolores odit nostrum distinctio quam? Laborum nisi maxime asperiores corporis cumque repellat quod ab. Maxime iure libero dignissimos eum." 
        />
      </main>
    </div>



    </div>
  )
}



