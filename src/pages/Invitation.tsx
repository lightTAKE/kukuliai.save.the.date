import invitation_background from "./../images/invitation_background.jpg";
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
  color: black;
`;

const StyledContainer = styled.div`
  position: relative;
  text-align: left;
  color: black;
  display: inline-block;
  overflow: hidden;
`;

const InvitationBackground = styled.img`
  width: 100%;
  height: auto;
`;

const AlignedText = styled.div`
  position: absolute;
  top: 70%;
  left: 40%;
  transform: translate(-72%, -40%);
`;

const InvitationText = styled.div`
  font-size: 1.5rem;
  font-family: "Open Sans Bold";
  @media screen and (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

const NamesText = styled.div`
  font-size: 5rem;
  font-family: "Open Sans Bold";
  padding: 1.5rem 0 1.5rem 0;

  @media screen and (max-width: 700px) {
    font-size: 1rem;
    padding: 3.375rem 0 1rem 0;
  }
`;

const DateText = styled.div`
  font-size: 1.75rem;
  font-family: "Open Sans Bold";
  padding: 0 0 1rem 0;

  @media screen and (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

const AddressText = styled.div`
  font-family: "Open Sans";
  padding: 0 0 1rem 0;
`;

const ReceptionText = styled.div`
  font-family: "Open Sans";
  padding: 0 0 1rem 0;
`;

const RsvpText = styled.div`
  font-size: 1.75rem;
  font-family: "Permenent Marker";
`;

function Invitation() {
  const { t } = useTranslation("", { keyPrefix: "invitation" });

  return (
    <StyledComponentContainer>
      <StyledHeader>
        <StyledContainer>
          <InvitationBackground src={invitation_background} />
          <AlignedText>
            <InvitationText>{t("title")}</InvitationText>
            <NamesText>{t("names")}</NamesText>
            <DateText>{t("date")}</DateText>
            <AddressText>{t("address")}</AddressText>
            <ReceptionText>{t("reception")}</ReceptionText>
            <RsvpText>{t("rsvp")}</RsvpText>
          </AlignedText>
        </StyledContainer>
      </StyledHeader>
    </StyledComponentContainer>
  );
}

export default Invitation;
