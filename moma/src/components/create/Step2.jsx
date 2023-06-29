import React, { useState } from 'react';
import * as S from './style';

export default function Step2({ setStep, type,setPeoples,setMails}) {
  const [groupName, setGroupName] = useState('');
  const [participantEmails, setParticipantEmails] = useState('');
  const [participantNames, setParticipantNames] = useState('');
  const [ownerTalk, setOwnerTalk] = useState();
  const [publicDate, setPublicDate] = useState(new Date());

  const [giftAmount, setGiftAmount] = useState('');
  

  const handlePublicDateChange = (date) => {
    setPublicDate(date);
  };



  const handleNextStep = () => {
    if (
      groupName.length === 0 ||
      participantEmails.length === 0 ||
      participantNames.length === 0 ||
      giftAmount.length === 0
    ) {
      alert('입력되지 않은 항목이 있습니다.');
      return;
    }else if(
      participantEmails.length === 1 ||
      participantNames.length === 1 ){
      alert("한명은 마니또 이벤트를 참여할 수 없습니다.");
    }

    const emails = participantEmails.split(',');
    const names = participantNames.split(',');

    setPeoples(names);
    setMails(emails);


    if (emails.length !== names.length) {
      alert(`메일 수(${emails.length})와 사람 수(${names.length})가 일치하지 않습니다.`);
      return;
    }

    // Perform the one-to-one matching of emails and names and save them to a new location

    setStep(3);
  };

  return (
    <>
      <S.ProgressingHeaderWrapper>
        {/* type에 따라서 */}
        {type === 'A' ? (
          <S.TypeBox>메일로 받아볼래요!</S.TypeBox>
        ) : (
          <S.TypeBox>함께 알아가볼래요!</S.TypeBox>
        )}

        <S.ProgressingHeader>
          정보를
          <br />
          입력해주세요!
        </S.ProgressingHeader>

        <S.WarningContent2>참가자의 메일과 이름 순서를 컴마를 기준으로 동일하게 입력해 주세요!</S.WarningContent2>

        {/* 매칭 */}
        <S.InputWrapper>
          <S.InputTitle>모임명을 알려주세요.</S.InputTitle>
          <S.InputBox
            required
            placeholder="예시) 모마 홍보팀 / 컴공 동기엠티"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />

          <S.InputTitle >참가자의 메일을 알려주세요.</S.InputTitle>
          <S.TextAreaBox
            required
            placeholder="예시) aaa@aaa.com, bbb@bbb.com..."
            value={participantEmails}
            onChange={(e) => setParticipantEmails(e.target.value.trim())}
          />

          <S.InputTitle>참가자의 이름을 알려주세요.</S.InputTitle>
          <S.TextAreaBox
            required
            placeholder="예시) 김땡땡, 이빵빵, ..."
            value={participantNames}
            onChange={(e) => setParticipantNames(e.target.value.trim())}
          />

          <S.InputTitle>공개원하시는 날을 알려주세요.</S.InputTitle>
          <S.StyledDatePicker
            required
            onChange={handlePublicDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy.MM.dd HH:mm"
            placeholderText="예시) 2023.06.29 18:00"
          />

          <S.InputTitle>마니또 선물 금액을 알려주세요.</S.InputTitle>
          <S.InputBox
            required
            number="true"
            inputMode="numeric"
            placeholder="숫자만 입력. 예시) 5000"
            value={giftAmount}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/[^0-9]/g, "");
              setGiftAmount(numericValue);
            }}
          />
        </S.InputWrapper>

        <S.InputTitle>주최자로서 한마디 하실래요?</S.InputTitle>
          <S.TextAreaBox
            placeholder="예시) 여러분들 모두 올 한해 수고했습니다!"
            value={ownerTalk}
            onChange={(e) => setOwnerTalk(e.target.value)}
          />


        <S.WhatTypeOfManitoWrapper>
          <S.WhatTypeOfManito
            type={0}
            onClick={() => {
              setStep(1);
            }}
          >
            이전으로
          </S.WhatTypeOfManito>
          <S.WhatTypeOfManito
            type={1}
            onClick={handleNextStep}
          >
            다음으로
          </S.WhatTypeOfManito>
        </S.WhatTypeOfManitoWrapper>
      </S.ProgressingHeaderWrapper>
    </>
  );
}
