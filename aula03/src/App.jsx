import './App.css'
import Aluno from './components/Aluno'
import Linguagens from './components/Linguagens'
import Produtos from './components/Produtos'


const App = () => {

  return (

    <>

      {

        [

          { nome: "João", email: "joao@gmail.com", curso: "Sistemas para Internet", media: 4 },

          { nome: "Maria", email: "maria@gmail.com", curso: "Sistemas para Internet", media: 7 },

          { nome: "Kellyanne", email: "kellyanne@gmail.com", curso: "Sistemas para Internet", media: 7 }

        ].map((aluno) =>

          <Aluno

            nome={aluno.nome}

            email={aluno.email}

            curso={aluno.curso}

            media={aluno.media}

            status={aluno.status} />

        )

      }

      <h1>- - - - - - - - - - - -</h1>

      {

        [

          { nome: "Java", dificuldade: "Alta" },

          { nome: "Python", dificuldade: "Baixa" },

          { nome: "JavaScript", dificuldade: "Alta" },

        ].map((linguagens) =>

          <Linguagens

            nome={linguagens.nome}

            dificuldade={linguagens.dificuldade} />

        )

      }

      <h1>- - - - - - - - - - - -</h1>

      {

        [

          { nome: "Feijao", preco: 10, categoria: "comida", quantidade: 3 },

          { nome: "Mouse", preco: 150, categoria: "eletrônicos", quantidade: 0 },

          { nome: "Cuscuz", preco: 12, categoria: "comida", quantidade: 1 },



        ].map((produtos) =>

          <Produtos

            nome={produtos.nome}

            preco={produtos.preco}

            categoria={produtos.categoria}

            quantidade={produtos.quantidade}

            status={produtos.status} />

        )

      }

    </>

  )

}

export default App