import Link from "next/link"

async function fetchRepoContents(name){
      // Interagir avec LoadingPage directement à 3 seconde
      await new Promise((resolve) =>setTimeout(resolve, 3000))

  const reponse = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`,
  {
    next: {
      revalidate: 60,
    },
  })
  
  const contents = await reponse.json()
  return contents
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name)
  const dirs = contents.filter((content) => content.type ==='dir')
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) =>(
          <li key={dir.path}>
            <Link href={`/code/repos${name}/${dir.path}`}>
               {dir.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RepoDirs
