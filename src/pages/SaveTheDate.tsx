import kukuliai from "./../images/scaled_kukuliai.jpg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledComponentContainer = styled.div`
  text-align: center;
  white-space: pre-line;
`;

const StyledHeader = styled.header`
  background-color: #e9ecef;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StyledContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  outline: 0.5rem solid white;
  outline-offset: -2.5rem;
  display: inline-block;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    outline: 0.3rem solid white;
    outline-offset: -1rem;
  }
`;

const Kukuliai = styled.img`
  width: 100%;
  height: auto;
`;

const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SaveTheDateText = styled.div`
  font-family: "Open Sans Bold";
  font-size: 5rem;

  @media screen and (max-width: 700px) {
    font-size: 2.5rem;
  }
`;

const NamesText = styled.div`
  font-size: 2.5rem;
  font-family: "Permenent Marker";
  padding: 9rem 0 1rem 0;

  @media screen and (max-width: 700px) {
    font-size: 1rem;
    padding: 3.375rem 0 1rem 0;
  }
`;

const DateText = styled.div`
  font-size: 1.75rem;
  font-family: "Open Sans Bold";
  @media screen and (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

const InvitationText = styled.div`
  font-size: 1rem;
  padding: 1rem 0 0 0;
  font-family: "Open Sans";
  @media screen and (max-width: 700px) {
    font-size: 0.75rem;
    padding: 1rem 0 0 0;
  }
`;

function SaveTheDate() {
  const { t } = useTranslation("", { keyPrefix: "save_the_date" });

  return (
    <StyledComponentContainer>
      <StyledHeader>
        <StyledContainer>
          <Kukuliai src={kukuliai} />
          <CenteredText>
            <SaveTheDateText>{t("title")}</SaveTheDateText>
            <NamesText>{t("names")}</NamesText>
            <DateText>{t("date")}</DateText>
            <InvitationText>{t("invitation")}</InvitationText>
          </CenteredText>
        </StyledContainer>
      </StyledHeader>
    </StyledComponentContainer>
  );
}

export default SaveTheDate;
