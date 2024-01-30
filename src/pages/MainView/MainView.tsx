import { NavLink, useNavigate } from "react-router-dom";
import CardView from "../../components/molecules/CardView/CardView";

import "./MainView.scss";
import { useEffect, useState } from "react";
import { getAxiosApi } from "../../services/api/Api";
import { ApiSuccessQuestion, ParsedQuestion, Question } from "../../interface/interface";
import { Warning } from "../../utilities/SweetAlertModal";
import { useStateContext } from '../../context/ContextProvider'
import Button from "../../components/atoms/Button/Button";

const MainView = () => {
//   const [questionData, setQuestionData] = useState<ParsedQuestion[]>([]);
  const { requestQuestion, setRequestQuestion, questionData, setQuestionData } = useStateContext();
  const navigate = useNavigate()

  useEffect(() => {
    const getQuestion = async () => {
      try {
        if(!requestQuestion){
            const response: ApiSuccessQuestion = await getAxiosApi("/api/community/get-questions");
    
            const updateDatas: ParsedQuestion[]  = response.map((item: Question) => {
                return{
                    ...item,
                    tags: item.tags.replace(/['"]+/g, '').split(',').map(itm => ({ tag: itm.trim() }))
                }
            })
            setQuestionData(updateDatas)
            setRequestQuestion(true)
        }

      } catch (error) { Warning("Network Error") }
    };

    getQuestion();
  }, []);

  return (
    <CardView className="MainView_" classCard="m_mainCard">
        <div className="m-cntQuestion">
            <div className="cnt-button">
                <Button text="Ask a Question" submit className="btn-question" onClick={() => navigate("/question/ask-question")} />
            </div>
            {questionData?.map((_, idx) => {
                return (
                    <div className="m-cards" key={idx}>
                        <div className="m-texts">
                            <NavLink to={`/question/${_.id}/${_.title}`} className="m-title" >
                                {_.title}
                            </NavLink>
                            <p className="m-date">{_.registration_date}</p>
                        </div>
                        <div className="m-tagFooter">
                            {_.tags?.map((tag, idx) => (
                                <div key={idx} className="m-tags">
                                    {tag.tag}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    </CardView>
  );
};

export default MainView;
