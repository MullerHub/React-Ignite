import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.js'
import { Container } from "../styles/repositories.js"
import { useEffect, useState } from "react"

const repoName = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform"
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  })

  return (
    <Container>
      <section className="repository-list">
        <h1>Lista de repositorios</h1>

        <ul>
          {repositories.map(repository => {
            return <RepositoryItem key={repository.name} repoName={repository} />
          })}
        </ul>

      </section>
    </Container>
  )
}