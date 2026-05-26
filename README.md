# 📝 Todo List React

Uma aplicação de lista de tarefas desenvolvida com **React**, focada em praticar conceitos fundamentais e intermediários da biblioteca, como gerenciamento de estado, persistência de dados e compartilhamento global de informações com **Context API**.

Esse projeto foi construído com foco em **aprendizado de lógica e funcionamento interno do React**, priorizando arquitetura e manipulação de estado mais do que interface visual.

---

## 🚀 Funcionalidades

- ✅ Adicionar tarefas
- ✏️ Editar tarefas
- 🗑️ Excluir tarefas
- ✔️ Marcar/desmarcar como concluída
- 🔍 Filtrar tarefas:
  - Todas
  - Concluídas
  - Pendentes
- 💾 Persistência com LocalStorage
- 🌐 Compartilhamento global de estado com Context API

---

## 🛠️ Tecnologias utilizadas

- **React**
- **JavaScript (ES6+)**
- **Context API**
- **Hooks do React**
  - `useState`
  - `useEffect`
  - `useContext`
- **Custom Hooks**
- **LocalStorage API**
- **CSS Modules / CSS**

---

## 📚 Conceitos praticados

Durante o desenvolvimento, foram aplicados conceitos importantes como:

### Gerenciamento de estado

Uso do `useState` para manipular:

- Lista de tarefas
- Estado de conclusão
- Controle de filtros
- Inputs controlados

---

### Efeitos colaterais

Uso do `useEffect` para sincronizar o estado com o LocalStorage.

---

### Persistência de dados

Armazenamento local das tarefas para manter os dados após recarregar a página.

---

### Custom Hooks

Criação de hook reutilizável para abstrair a lógica de LocalStorage.

Exemplo:

```javascript
useLocalStorage()
```

---

### Context API

Implementação de contexto global para compartilhar dados entre componentes sem prop drilling.

---

### Imutabilidade

Atualização de arrays e objetos usando:

- `map()`
- `filter()`
- spread operator (`...`)

Sem mutação direta de estado.

---

## 🎯 Objetivo do projeto

O principal objetivo foi consolidar conhecimentos práticos em React, evoluindo da manipulação básica de estado para uma estrutura mais organizada utilizando:

- Componentização
- Reutilização de lógica
- Estado global
- Separação de responsabilidades

---

## ▶️ Como rodar o projeto

Clone o repositório:

```bash
git clone "https://github.com/gbc84389-tech/TodoListReact"
```

Acesse a pasta:

```bash
cd todolistreact
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

---

## 📈 Aprendizados

Esse projeto ajudou a reforçar principalmente:

- Pensamento reativo
- Fluxo de atualização de estado
- Renderização baseada em estado
- Diferença entre dados derivados e estado real
- Compartilhamento global com Context API

---

## 👨‍💻 Autor

Desenvolvido por **Gustavo Borges Camargos**

Projeto criado como prática de evolução em **React e desenvolvimento frontend**.
