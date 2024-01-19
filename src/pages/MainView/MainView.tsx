import { NavLink } from 'react-router-dom'
import CardView from '../../components/molecules/CardView/CardView'

import "./MainView.scss"

const MainView = () => {

    const question = [
        {
            id: 1,
            title: "Tengo problemas con acceder a las cookies mediante flask",
            descript: "Cuando se envia la info por reques no puedo acceder",
            tags: [
                {
                    id: 1,
                    tag: "Python"
                },
                {
                    id: 2,
                    tag: "Node.js"
                },
            ]
        },
        {
            id: 1,
            title: "Tengo problemas con acceder a las cookies mediante flask",
            descript: "Cuando se envia la info por reques no puedo acceder",
            tags: [
                {
                    id: 1,
                    tag: "Python"
                },
                {
                    id: 2,
                    tag: "Node.js"
                },
            ]
        },
        {
            id: 1,
            title: "Tengo problemas con acceder a las cookies mediante flask",
            descript: "Cuando se envia la info por reques no puedo acceder",
            tags: [
                {
                    id: 1,
                    tag: "Python"
                },
                {
                    id: 2,
                    tag: "Node.js"
                },
            ]
        },
        {
            id: 1,
            title: "Tengo problemas con acceder a las cookies mediante flask",
            descript: "Cuando se envia la info por reques no puedo acceder",
            tags: [
                {
                    id: 1,
                    tag: "Python"
                },
                {
                    id: 2,
                    tag: "Node.js"
                },
            ]
        },
    ]

  return (
    <CardView className='MainView_'>
        <div className='m-cntQuestion'>
            {question.map((_, idx) => {
                return(
                    <>
                        <div className='m-cards' key={idx}>
                            <div className='m-texts'>
                                <NavLink to={`/question/${_.id}/${_.title}`} className='m-title'>{_.title}</NavLink>
                                <p className='m-description'>{_.descript}</p>
                            </div>
                            <div className='m-tagFooter'>
                                {_.tags.map((tag, idx) => (
                                    <div key={idx} className="m-tags">
                                        {tag.tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </CardView>
  )
}

export default MainView