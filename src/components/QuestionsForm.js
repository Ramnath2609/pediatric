import Docpic from '../assets/DoctorAnim.jpg';
import KidsPic from '../assets/Kids.jpg';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: grid;
    padding: 20px;
    grid-template: 100px 100px 100px / 100%;
    background-color: #c8d6e5;
`;

const FlexBox = styled.div`
    display: grid;
    grid-template: 100% / 100px 1fr;
    grid-gap: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.input`
    height: 80px;
    background-color: #0abde3;
    font-size: 20px;
`;

export function QuestionsForm() {
    return (
        <FormWrapper>
            <FlexBox>
                <img src={Docpic} alt="doctor-anim" width={80} height={80} />
                <h3>Please enter your question</h3>
            </FlexBox>
            <FlexBox>
                <img src={KidsPic} alt="kids-pic" width={80} height={80} />
                <TextBox type="text" />
            </FlexBox>
            <FlexBox>
                <img src={Docpic} alt="kids-pic" width={80} height={80} />
                <TextBox type="text" />
            </FlexBox>
        </FormWrapper>
    )
}