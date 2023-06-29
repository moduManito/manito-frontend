import React from "react";
import * as S from "./style";
import axios from "axios";

export default function Step3({
    setStep,
    type,
    peoples,
    mails,
    groupName,
    publicDate,
    giftAmount,
    ownerTalk,
}) {
    const handleNextStep = async () => {
        const shouldSubmit = window.confirm(
            "모두에게 마니또-마로 배정 메일이 전송될 예정입니다. 정말 제출하시겠습니까?"
        );
        if (shouldSubmit) {
            try {
                // Prepare the data object to be sent
                const data = {
                    title: groupName,
                    content: ownerTalk,
                    type: type,
                    price: giftAmount,
                    mail_data: mails.join(", "),
                    name_data: peoples.join(", "),
                    end_at: type === "A" ? publicDate : null,
                };

                console.log(data);

                // Send the POST request to the API endpoint
                const response = await axios.post(
                    "https://api.modumanito.site/manito/",
                    data
                );
                console.log(response);

                // Handle the response or perform any necessary actions
                console.log(response.data);

                // Set the step to 4 if needed
                setStep(4);
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                alert("메일 발송에 실패했습니다. 추후 다시 시도해주세요.");
                console.error(error);
            }
        }
    };

    const formattedDate = publicDate.toLocaleString();

    return (
        <>
            <S.ProgressingHeaderWrapper>
                {/* type에 따라서 */}
                {type === "A" ? (
                    <S.TypeBox>메일로 받아볼래요!</S.TypeBox>
                ) : (
                    <S.TypeBox>함께 알아가볼래요!</S.TypeBox>
                )}

                <S.ProgressingHeader>
                    아래 정보가
                    <br />
                    맞을까요?
                </S.ProgressingHeader>

                <S.InputTitle style={{ marginTop: "20px", marginLeft: "5px" }}>
                    모임명
                </S.InputTitle>
                <S.InputBox2>{groupName}</S.InputBox2>

                <S.ResultTableContainer2>
                    <S.ResultTableContainer
                        style={{
                            borderBottom: "1px solid var(--gray-3, #E5DEDF) ",
                        }}
                    >
                        <S.ResultTableTitle>이름</S.ResultTableTitle>
                        <S.ResultTableTitle>이메일</S.ResultTableTitle>
                    </S.ResultTableContainer>
                    {peoples.map((person, index) => (
                        <S.ResultTableContainer
                            key={index}
                            style={{
                                background:
                                    index % 2 === 1 ? "#E5DEDF" : "transparent",
                            }}
                        >
                            <div>{person}</div>
                            <div>{mails[index]}</div>
                        </S.ResultTableContainer>
                    ))}
                </S.ResultTableContainer2>

                {type === "A" ? (
                    <>
                        <S.InputTitle
                            style={{ marginTop: "20px", marginLeft: "5px" }}
                        >
                            공개일
                        </S.InputTitle>
                        <S.InputBox2>{formattedDate}</S.InputBox2>
                    </>
                ) : (
                    ""
                )}

                <S.InputTitle style={{ marginTop: "5px", marginLeft: "5px" }}>
                    선물금액
                </S.InputTitle>
                <S.InputBox2>{giftAmount}</S.InputBox2>

                <S.InputTitle style={{ marginTop: "5px", marginLeft: "5px" }}>
                    주최자로서 한마디
                </S.InputTitle>
                <S.InputBox2>{ownerTalk}</S.InputBox2>

                <S.WhatTypeOfManitoWrapper>
                    <S.WhatTypeOfManito
                        type={0}
                        onClick={() => {
                            setStep(2);
                        }}
                    >
                        이전으로
                    </S.WhatTypeOfManito>
                    <S.WhatTypeOfManito type={1} onClick={handleNextStep}>
                        제출하기
                    </S.WhatTypeOfManito>
                </S.WhatTypeOfManitoWrapper>
            </S.ProgressingHeaderWrapper>
        </>
    );
}
