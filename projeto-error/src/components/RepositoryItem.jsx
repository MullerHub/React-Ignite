export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repoName.name}</strong>
      <p>{props.repoName.description}</p>

      <a href={props.repoName.html_url}>
        Acessar o repositorios
      </a>
    </li>
  )
}