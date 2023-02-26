import MainPic from '../assets/MainPic.jpg'
import styled from 'styled-components';

const InfoWrapper = styled.div`
    display: grid;
    background-color: #0abde3;
`;

const GridLayout = styled.div`
    display: grid;
    grid-template: 100% / 60% 40%;
`;

const TitleText = styled.p`
    font-size: 36px;
`;

const ImageHolder = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Flex = styled.div`
    display: grid;
    grid-template: auto / 50% 50%;
    justify-content: flex-start;
    padding: 20px;
    align-items: center;
`;

const Button = styled.button`
    margin-left: 20px;
    width: 50%;
    border: 1px solid red;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 12px;
`;

const Text = styled.p`
    font-weight: 700;
    font-size: 22px;
`;

const SubText = styled.div`
    font-size: 22px;
`;

const MainImage = styled.img`
    border: 2px solid lightgray;
    box-shadow: 0px 0px 24px;
`;

export function Info() {
    return (
        <InfoWrapper>
            <GridLayout>
                <ImageHolder>
                <MainImage src={MainPic} alt="main-pic" width="90%" />
                </ImageHolder>
                <div>
                    <TitleText>We can help you obtaining the pediatric information you need immediately.</TitleText>
                    <SubText>You can ask us about Kid diseases, Disease information, Symptoms, Diagnosis, Treatment, Causes, Complications, When you should immediately contact your doctor, What drugs will cure the disease, Drug Information, Possible drug side effects, How to take the drug, etc.</SubText>
                </div>
            </GridLayout>
            <div>
                <Flex>
                    <Text>At the end of the conversation press this button to download the conversation for your records</Text>
                    <Button>Download conversation</Button>
                </Flex>
                <Flex>
                    <Text>To end the conversation press this button</Text>
                    <Button>End conversation</Button>
                </Flex>
            </div>
        </InfoWrapper>
    )
}