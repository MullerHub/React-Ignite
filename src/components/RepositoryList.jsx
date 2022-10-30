import { RepositoryItem } from "./RepositoryItem"

const repoName = {
  name: "batata-frita",
  description: "batata-cozida",
  link: "https://github.com.br"
}


export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <RepositoryItem
        repoName={repoName}
      />

    </section>
  )
}