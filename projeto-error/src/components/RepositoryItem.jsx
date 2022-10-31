export function RepositoryItem(props) {
  return(
    <li>
    <strong>{props.repoName.name ?? 'Default'}</strong>
    <p>{props.repoName.description ?? 'Default'}</p>

    <a href={props.repoName.link ?? 'Default'}>
      Acessar o repositorios
    </a>
  </li>
  )
}