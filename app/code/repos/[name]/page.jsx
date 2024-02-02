import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import React, { Suspense } from 'react'
// Dynamique Page souvent [id] ou [title] ou autre avec braquet 
// Destruction au niveau de params ou ne pas utiliser params.name dans les acollades
// l'api a été fait au niveau de Repo et utilisé ici
const RepoPage = ({ params:{name} }) => {
  return (
    <div className="card">
        {/* Cet url permet de revenir en arriere apres la visite de la page  */}
        <Link href='/code/repos' className='btn btn-back'>
            Back To Repositories
        </Link>
        <Suspense fallback={ <div>Loading repo...</div> }>
           <Repo name={name} />
        </Suspense>
        <Suspense fallback={ <div>Loading directories...</div> }>
          <RepoDirs name={name} />
        </Suspense>
    </div>
  )
}

export default RepoPage
