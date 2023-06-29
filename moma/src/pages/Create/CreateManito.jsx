import React, { useEffect, useState } from "react";
import { ReactComponent as Heart } from "../../assets/icons/heartIcon.svg";
import Step1 from "../../components/create/Step1";
import ProgressStatus from "../../components/create/ProgressStatus";
import * as S from "./style";
import Step2 from "../../components/create/Step2";
import Step3 from "../../components/create/Step3";
import Step4 from "../../components/create/Step4";
import axios from "../../api/axios";

export default function CreateManito() {
    const [step, setStep] = useState(1);
    const [type, setType] = useState("");
    const [peoples, setPeoples] = useState("");
    const [mails, setMails] = useState("");

    const [groupName, setGroupName] = useState("");
    const [participantEmails, setParticipantEmails] = useState("");
    const [participantNames, setParticipantNames] = useState("");
    const [ownerTalk, setOwnerTalk] = useState();
    const [publicDate, setPublicDate] = useState(new Date());

    const [userCnt, setUserCnt] = useState(0);
    const [giftAmount, setGiftAmount] = useState("");

    const handleStepChange = (newStep) => {
        setStep(newStep);
    };

    const fetchManitoCnt = () => {
        axios
            .get("https://api.modumanito.site/manito/count")
            .then((response) => {
                const { total_count } = response.data;
                console.log(total_count);
                setUserCnt(total_count);
            })
            .catch((error) => {
                // Handle error if the request fails
                console.log(error);
            });
    };

    useEffect(() => {
        fetchManitoCnt();
    }, []);

    const renderStepComponent = () => {
        switch (step) {
            case 1:
                return <Step1 setStep={setStep} setType={setType} />;
            case 2:
                return (
                    <Step2
                        setStep={setStep}
                        type={type}
                        setPeoples={setPeoples}
                        setMails={setMails}
                        groupName={groupName}
                        setGroupName={setGroupName}
                        participantEmails={participantEmails}
                        setParticipantEmails={setParticipantEmails}
                        participantNames={participantNames}
                        setParticipantNames={setParticipantNames}
                        ownerTalk={ownerTalk}
                        setOwnerTalk={setOwnerTalk}
                        publicDate={publicDate}
                        setPublicDate={setPublicDate}
                        giftAmount={giftAmount}
                        setGiftAmount={setGiftAmount}
                    />
                );
            case 3:
                return (
                    <Step3
                        setStep={setStep}
                        type={type}
                        peoples={peoples}
                        mails={mails}
                        groupName={groupName}
                        publicDate={publicDate}
                        giftAmount={giftAmount}
                        ownerTalk={ownerTalk}
                    />
                );
            case 4:
                return <Step4 setStep={setStep} userCnt={userCnt} />;
            default:
                return null;
        }
    };

    return step != 4 ? (
        <S.StepWrapper>
            <S.ProgressTextWrapper>
                <S.ProgressText color={step === 1 ? "#C02E21" : "#B9AEAF"}>
                    STEP1
                </S.ProgressText>
                <S.ProgressText color={step === 2 ? "#C02E21" : "#B9AEAF"}>
                    STEP2
                </S.ProgressText>
                <S.ProgressText color={step === 3 ? "#C02E21" : "#B9AEAF"}>
                    STEP3
                </S.ProgressText>
                <S.ProgressText color={step === 4 ? "#C02E21" : "#B9AEAF"}>
                    STEP4
                </S.ProgressText>
            </S.ProgressTextWrapper>
            <S.ProgressCircleWrapper>
                <S.ProgressCircle
                    color={step === 1 ? "#C02E21" : "#B9AEAF"}
                ></S.ProgressCircle>
                <S.ProgressCircle
                    color={step === 2 ? "#C02E21" : "#B9AEAF"}
                ></S.ProgressCircle>
                <S.ProgressCircle
                    color={step === 3 ? "#C02E21" : "#B9AEAF"}
                ></S.ProgressCircle>
                <S.ProgressCircle
                    color={step === 4 ? "#C02E21" : "#B9AEAF"}
                ></S.ProgressCircle>
            </S.ProgressCircleWrapper>
            <S.CreateProgressBar />

            {/* 스탭별 컴포넌트 */}
            {renderStepComponent()}
        </S.StepWrapper>
    ) : (
        <Step4 setStep={setStep} peoples={peoples} userCnt={userCnt} />
    );
}
