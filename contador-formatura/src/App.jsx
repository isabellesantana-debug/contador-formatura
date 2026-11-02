
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [agora, setAgora] = useState(new Date())

  // Data final: 17 de dezembro de 2026,
  // até o último segundo do dia.
  const dataFinal = new Date(2026, 11, 18, 0, 0, 0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAgora(new Date())
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  const diferenca = Math.max(0, dataFinal - agora)

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24)
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60)
  const segundos = Math.floor((diferenca / 1000) % 60)

  const contador = [
    { valor: dias, nome: 'DIAS' },
    { valor: horas, nome: 'HORAS' },
    { valor: minutos, nome: 'MINUTOS' },
    { valor: segundos, nome: 'SEGUNDOS' }
  ]

  return (
    <main className="pagina">
      <header className="cabecalho">
        <div className="logo">
          <span>✦</span> COUNTDOWN
        </div>

        <div className="status">
          <span className="bolinha"></span>
          CONTAGEM REGRESSIVA
        </div>
      </header>

      <section className="conteudo">
        <div className="estrela">✦</div>

        <p className="subtitulo">
          UM CICLO ESTÁ CHEGANDO AO FIM
        </p>

        <h1>
          O semestre está
          <br />
          <span>chegando ao fim.</span>
        </h1>

        <p className="descricao">
          Cada segundo nos aproxima de mais uma conquista.
          <br />
          A contagem regressiva começou!
        </p>

        <div className="data-card">
          <span className="calendario">◷</span>
          17 DE DEZEMBRO DE 2026
        </div>

        {diferenca > 0 ? (
          <div className="contador">
            {contador.map((item) => (
              <div className="bloco-tempo" key={item.nome}>
                <div className="numero">
                  {String(item.valor).padStart(2, '0')}
                </div>
                <span className="legenda">{item.nome}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="mensagem-final">
            Chegou o grande dia! ✨
          </div>
        )}

        <div className="mensagem">
          <span>✧</span>
          O fim de um semestre, o começo de novas possibilidades.
          <span>✧</span>
        </div>
      </section>

      <footer className="rodape">
        FEITO PARA CELEBRAR CADA CONQUISTA
        <span> • 2026</span>
      </footer>
    </main>
  )
}

export default App
