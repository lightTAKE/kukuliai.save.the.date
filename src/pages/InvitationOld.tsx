import invitation_background from "./../images/invitation_background.jpg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
  color: white;
  display: inline-block;
  overflow: hidden;
`;

const InvitationBackground = styled.img`
  width: 100%;
  height: auto;
`;

const AlignedText = styled.div`
  position: absolute;
  top: 68%;
  left: 40%;
  transform: translate(-68%, -40%);
`;

const InvitationText = styled.div`
  font-size: 1.5rem;
  font-family: "Open Sans Bold";
  @media screen and (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

const NamesText = styled.div`
  font-size: 7rem;
  font-family: "Rozha One";
  line-height: 1;
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
  padding: 0 0 1.5rem 0;
`;

const RsvpButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: block;
  font-family: "Permenent Marker";
  font-size: 2rem;
  color: white;
  &:hover {
    color: #cb4127;
  }
`;

function InvitationOld() {
  const { t } = useTranslation("", { keyPrefix: "invitation" });
  const rsvpNavigation = useNavigate();
  const rsvpNavigationHandler = () => rsvpNavigation("/rsvp");

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
            <RsvpButton type="button" onClick={rsvpNavigationHandler}>
              {t("rsvp")}
            </RsvpButton>
          </AlignedText>
        </StyledContainer>
      </StyledHeader>
    </StyledComponentContainer>
  );
}

export default InvitationOld;
