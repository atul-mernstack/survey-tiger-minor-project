import React from "react";
import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { surveySlice } from "../store/surveySlice";

function ConfirmSurvey() {
    const { surveyId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const survey = useSelector((globalStore) =>
        globalStore.surveys.find((s) => s.surveyId === surveyId)
    );

    const confirmAndPublishSurvey = () => {
        dispatch(surveySlice.actions.markPublished({ surveyId }));
        history.push("/");
    };

    return (
        <div style={{textAlign:"start"}}>
            {survey.questions.map((q,indx) => (
                <div key={indx}>
                    {q.type === "single" ? (
                        <>
                            <Form >
                                <FormGroup>
                    <Label for="exampleCheckbox">{indx+1}. {q.question}</Label>
                                    <div>
                                        <CustomInput type="checkbox" id="exampleCustomInline" label={q.options[0]} inline />
                                        <CustomInput type="checkbox" id="exampleCustomInline2" label={q.options[1]} inline />
                                    </div>
                                </FormGroup>
                            </Form>
                        </>
                    ) : (
                            <>

                                <Form >
                                    <FormGroup>
                                        <Label for="exampleCheckbox" >{indx+1}.{q.question}</Label>
                                        <div>
                                            <CustomInput type="checkbox" id="exampleCustomCheckbox" label={q.options[0]} />
                                            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label={q.options[1]} />
                                            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label={q.options[2]} />
                                            <CustomInput type="checkbox" id="exampleCustomCheckbox4" label={q.options[3]} />
                                        </div>
                                    </FormGroup>
                                </Form>
                            </>
                        )}
                    <hr />
                </div>
            ))}
            <Button className="survey-main-btn" onClick={confirmAndPublishSurvey}>
                Confirm Survey
      </Button>
        </div>
    );
}

export default ConfirmSurvey;
