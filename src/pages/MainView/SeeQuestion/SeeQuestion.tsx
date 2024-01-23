
import { useEffect, useState } from "react"
import CardView from "../../../components/molecules/CardView/CardView"
import "./SeeQuestion.scss"
import { useParams } from "react-router-dom"
import ResponseBtn from "../../../components/atoms/ResponseBtn/ResponseBtn"
import CardForm from "../../../components/molecules/CardForm/CardForm"
import ReturnBtn from "../../../components/atoms/ReturnBtn/ReturnBtn"

const SeeQuestion = () => {

    const { titleQuestion } = useParams()
    const [openQuestion, setOpenQuestion] = useState<boolean>(false)

    const myInfo = [
      {
        id: 1,
        title: titleQuestion,
        question: " ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de " +
                  "las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de" +
                  " relleno estándar de las industrias desde el año 1500, cuando un impresor " +
                  "(N. del T. persona que se dedica a la imprenta) desconocido usó una " +
                  " galería de textos y los mezcló de tal manera que logró hacer un libro de" +
                  " textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó",
        tags: [
          {
            id: 1,
            tag: "Python",
          },
          {
            id: 2,
            tag: "NodeJS"
          }
        ]
      }
    ]


  return (
    <CardView className="SeeQuestion" classCard={`s-cardQuestion ${openQuestion && "s-width100"}`} heightVh>

        <ReturnBtn className="btn-return" url="/" />

        <div className={`cnt-support ${openQuestion && "s-gap"}`}>
            {myInfo.map((_, idx) => {
                return(
                    <div key={idx} className="cnt_question">
                        <h1 className="s-title">{_.title}</h1>
                        <p className="s-cntDescription">{_.question}</p>
                        <div className="s-cntTags">
                            {_.tags.map((_, idx) => (
                                <div key={idx} className="s-tag">{_.tag}</div>
                                ))}
                        </div>
                    </div>
                )
                })}

            <div className={`s-cnt-form ${openQuestion && "max-width"}`}>
                <CardForm className={`s-modalQuestion`} setValue={setOpenQuestion} /> 
            </div> 

        </div>
        <ResponseBtn className="s-customPosition" onClick={() => setOpenQuestion(true)}/>
    </CardView>
  );
}

export default SeeQuestion