const cursos = [
  { titulo: 'HTML e CSS do zero', categoria: 'Tecnologia', nivel: 'Iniciante', duracao: '4h 20min', descricao: 'Construa páginas organizadas e responsivas entendendo cada camada da interface.', cor: 'coral', simbolo: '</>' },
  { titulo: 'Design de interfaces', categoria: 'Design', nivel: 'Iniciante', duracao: '3h 10min', descricao: 'Aprenda a transformar ideias em telas claras, úteis e agradáveis de usar.', cor: 'lilac', simbolo: '✦' },
  { titulo: 'JavaScript na prática', categoria: 'Tecnologia', nivel: 'Intermediário', duracao: '5h 40min', descricao: 'Adicione comportamento às páginas com variáveis, eventos e funções essenciais.', cor: 'sun', simbolo: 'JS' },
  { titulo: 'Criatividade para projetos', categoria: 'Criatividade', nivel: 'Todos os níveis', duracao: '2h 45min', descricao: 'Use repertório, referências e processos simples para criar com mais intenção.', cor: 'mint', simbolo: '✳' },
  { titulo: 'Comunicação de projetos', categoria: 'Negócios', nivel: 'Intermediário', duracao: '3h 05min', descricao: 'Apresente suas ideias com clareza e organize uma narrativa que faça sentido.', cor: 'blue', simbolo: '↗' },
  { titulo: 'Portfólio que conta histórias', categoria: 'Design', nivel: 'Intermediário', duracao: '4h 00min', descricao: 'Estruture seus projetos para mostrar processo, decisões e aprendizados.', cor: 'peach', simbolo: '▱' }
];

const grade = document.querySelector('#grade-cursos');
const resultado = document.querySelector('#resultado');
const busca = document.querySelector('#campo-busca');
let categoriaAtual = 'Todos';

function mostrarCursos() {
  const termo = busca.value.trim().toLowerCase();
  const encontrados = cursos.filter((curso) => {
    const pertence = categoriaAtual === 'Todos' || curso.categoria === categoriaAtual;
    const corresponde = `${curso.titulo} ${curso.descricao} ${curso.categoria}`.toLowerCase().includes(termo);
    return pertence && corresponde;
  });

  resultado.innerHTML = `<strong>${encontrados.length}</strong> cursos encontrados`;
  grade.innerHTML = encontrados.length ? encontrados.map((curso, indice) => `
    <article class="curso">
      <div class="curso-capa ${curso.cor}"><span>${curso.simbolo}</span></div>
      <div class="curso-conteudo">
        <small>${curso.categoria} · ${curso.nivel}</small>
        <h3>${curso.titulo}</h3>
        <p>${curso.descricao}</p>
        <div class="curso-rodape"><span>◷ ${curso.duracao}</span><b>→</b></div>
      </div>
    </article>`).join('') : '<div class="vazio"><h3>Nenhum curso encontrado</h3><p>Tente outra palavra ou escolha uma categoria diferente.</p></div>';
}

document.querySelectorAll('[data-categoria]').forEach((botao) => {
  botao.addEventListener('click', () => {
    document.querySelector('.filtros .ativo')?.classList.remove('ativo');
    botao.classList.add('ativo');
    categoriaAtual = botao.dataset.categoria;
    mostrarCursos();
  });
});

busca.addEventListener('input', mostrarCursos);
mostrarCursos();
