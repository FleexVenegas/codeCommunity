
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import CardView from "../../../components/molecules/CardView/CardView"
import ResponseBtn from "../../../components/atoms/ResponseBtn/ResponseBtn"
import CardForm from "../../../components/molecules/CardForm/CardForm"
import ReturnBtn from "../../../components/atoms/ReturnBtn/ReturnBtn"
import "./SeeQuestion.scss"
import { getAxiosApi } from "../../../services/api/Api"
import { Warning } from "../../../utilities/SweetAlertModal"
import { ParsedQuestion, Question } from "../../../interface/interface"

const SeeQuestion = () => {

    const { titleQuestion, id } = useParams()
    const [openQuestion, setOpenQuestion] = useState<boolean>(false)
    const [questionData, setQuestionData] = useState<ParsedQuestion[]>([])

    useEffect(() => {

        const getQuestion = async () => {
            try {
                const response: Question = await getAxiosApi(`/api/community/get-question/${id}`)    
                const updateDatas: ParsedQuestion[]  = [response].map((item: Question) => {
                    return{
                        ...item,
                        tags: item.tags.replace(/['"]+/g, '').split(',').map(itm => ({ tag: itm.trim() }))
                    }
                })
                
                setQuestionData(updateDatas)

            } catch (error) {
                Warning("Network Error")
                console.log(error)
            }
        }

        getQuestion()
      
    }, [])
    
  return (
    <CardView className="SeeQuestion" classCard={`s-cardQuestion ${openQuestion && "s-width100"}`} heightVh>

        <ReturnBtn className="btn-return" url="/" />

        <div className={`cnt-support ${openQuestion && "s-gap"}`}>
            {questionData.map((_, idx) => {
                return(
                    <div key={idx} className="cnt_question">
                        <div className="se-cntHeader">
                            <h1 className="s-title">{_.title}</h1>
                            <p className="s-date">{_.registration_date}</p>
                        </div>
                        <div className="s-cntDescription" dangerouslySetInnerHTML={{__html: _.description}}></div>
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