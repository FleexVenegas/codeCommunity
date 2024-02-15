
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import CardView from "../../../components/molecules/CardView/CardView"
import ResponseBtn from "../../../components/atoms/ResponseBtn/ResponseBtn"
import CardForm from "../../../components/molecules/CardForm/CardForm"
import ReturnBtn from "../../../components/atoms/ReturnBtn/ReturnBtn"
import "./SeeQuestion.scss"
import { getAxiosApi } from "../../../services/api/Api"
import { Warning } from "../../../utilities/SweetAlertModal"
import { Answer, Props, UpQuestions } from "../../../interface/interface"

const SeeQuestion = () => {

    const { id, titleQuestion } = useParams()
    const [openQuestion, setOpenQuestion] = useState<boolean>(false)
    const [questionData, setQuestionData] = useState<UpQuestions[]>()
    const [answerData, setAnswerData] = useState<Answer[]>()
    const [id_question, setId_question] = useState<string | undefined>("")



    useEffect(() => {
        const getQuestion = async () => {
            try {
                const response: unknown = await getAxiosApi(`/api/community/get-question/${id}`)    
                const _response = response as Props

                _response.data.map((item) => {
                    setAnswerData(item.answers)

                    const updatedQuestions = [item.question].map((prop) => {
                        setId_question(prop?.id_question)
                        return {
                          ...prop,
                          tags: prop?.tags.replace(/['"]+/g, '').split(',').map(itm => ({ tag: itm.trim() }))
                        };
                      });

                      setQuestionData(updatedQuestions)
                })

            } catch (error) {
                Warning("Network Error")
                console.log(error)
            }
        }

        getQuestion()
      
    }, [])

    console.log(questionData)
    console.log(answerData)
    console.log(id_question)


  return (
    <CardView className="SeeQuestion" classCard={`s-cardQuestion ${openQuestion && "s-width100"}`} heightVh>

        <ReturnBtn className="btn-return" url="/" />
        <div className={`cnt-support ${openQuestion && "s-gap"}`}>
            <div className="cnt-secct">
                {questionData?.map((_, idx) => {
                    return(
                        <div key={idx} className="cnt_question">
                            <div className="se-cntHeader">
                                <h1 className="s-title">{_.title}</h1>
                                <p className="s-date">{_.registration_date}</p>
                            </div>
                            <div className="s-cntDescription" dangerouslySetInnerHTML={{__html:  _.description || ""}}></div>
                            <div className="s-cntTags">
                                {_.tags?.map((_, idx) => (
                                    <div key={idx} className="s-tag">{_.tag}</div>
                                ))}
                            </div>
                        </div>
                    )
                    })}
                <div className={`s-cnt-form ${openQuestion && "max-width"}`}>
                    <CardForm className={`s-modalQuestion ${openQuestion && "s-fixed"}`} 
                                setValue={setOpenQuestion} 
                                id_question={id_question || ""} 
                                titleQuestion={titleQuestion}
                    /> 
                </div> 

            </div>
  
                <div className={`cnt-response ${openQuestion && "max-width"} ${answerData && answerData?.length < 1 ? "displayBlock": null}`}>
                    <p className="r-titleAnswer">Answer</p>
                    <div className="r-cntBlock">
                        {answerData?.map((_, idx) => {
                            return(
                                <div key={idx} className="r-block">
                                    <div className="r-cntCode" dangerouslySetInnerHTML={{__html: _.response || ""}}></div>
                                    <p className="r-dateP">{_.registration_date_answer}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            
        </div>
        <ResponseBtn className="s-customPosition" onClick={() => setOpenQuestion(true)}/>
    </CardView>
  );
}

export default SeeQuestion