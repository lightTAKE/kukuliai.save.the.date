import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import mainImage from "./../images/g&t.png";
import sectionImage1 from "./../images/section1.jpg";
import sectionImage2 from "./../images/section2.jpg";
import sectionImage3 from "./../images/section3.jpg";
import sectionImage4 from "./../images/section4.jpg";
import weddingFlower from "./../images/flower1.webp";
import weddingFlower2 from "./../images/flower2.webp";
import Checkbox from "../components/checkbox";
import useRespond from "../hooks/use-respond";

const mainColor = "#aec2b6";
const darkColor = "#163e3a";
const secondaryDarkColor = "#58655d";

const StyledContainer = styled.div`
  text-align: center;
  white-space: pre-line;
  font-family: "Open Sans";
`;

const StyledSectionContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled.header`
  background-color: ${mainColor};
  position: fixed;
  top: 0;
  width: 100%;
`;

const EmptySection = styled.section`
  height: 5.34rem;
  background-color: white;

  @media screen and (max-width: 700px) {
    height: 4rem;
  }
`;

const StyledMenu = styled.div`
  overflow: hidden;
  background-color: ${mainColor};
  display: inline-flex;
`;

const StyledMenuItem = styled.a`
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 2rem 2rem;
  font-size: 1rem;

  &:hover {
    color: ${darkColor};
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    padding: 1.5rem 0.4rem;
  }
`;

const RespondButton = styled.a`
  background-color: ${darkColor};
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 1rem 3rem;
  margin: 1rem 7rem 1rem 0;
  font-size: 1rem;

  &:hover {
    color: ${mainColor};
    background-color: ${secondaryDarkColor};
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    padding: 0.5rem 0.5rem;
    margin: 1rem 0;
  }
`;

const StyledLinkButton = styled.a`
  background-color: ${darkColor};
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 1rem 3rem;
  font-size: 1rem;

  &:hover {
    background-color: ${secondaryDarkColor};
    cursor: pointer;
  }
`;

const HomeSection = styled.section`
  background-color: ${mainColor};
  padding: 3rem 0;
`;

const MainImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 700px) {
    max-width: 100%;
  }
`;

const GettingMarriedText = styled.span`
  letter-spacing: 0.3rem;
  padding: 2rem 0 0 0;
`;

const HomeSectionDateText = styled.span`
  font-family: "Open Sans Bold";
  font-size: 3rem;
  padding: 0 0 2rem 0;

  @media screen and (max-width: 700px) {
    font-size: 2.5rem;
  }
`;

const ParallaxSectionOne = styled.section`
  background-image: url(${sectionImage1});
  background-color: white;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
`;

const ParallaxSectionTwo = styled.section`
  background-image: url(${sectionImage2});
  background-color: white;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
`;

const ParallaxSectionThree = styled.section`
  background-image: url(${sectionImage3});
  background-color: white;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
`;

const ParallaxSectionFour = styled.section`
  background-image: url(${sectionImage4});
  background-color: white;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
`;

const WeddingSection = styled.section`
  background-color: white;
  padding: 3rem 0;
`;

const WeddingImage = styled.img`
  padding: 1rem 0 0 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const SectionHeaderText = styled.span`
  font-family: "Open Sans Bold";
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
`;

const SectionItemHeader = styled.span`
  font-size: 1.7rem;
  letter-spacing: 0.2rem;
`;

const SectionItemParagraph = styled.p`
  font-size: 1rem;
  margin: 0;
  letter-spacing: 0.1rem;
  line-height: 2rem;
`;

const SectionItemContainer = styled.div`
  margin: 1.5rem 0;
`;

const StyledDivider = styled.div`
  width: 20px;
  height: 1px;
  background-color: ${darkColor};
  margin: 0.5rem auto;
`;

const StyledRsvpContainer = styled.div`
  margin: 3rem 0 2rem 0;
`;

const RsvpParagraph = styled.p`
  font-size: 1rem;
  padding: 0 0 1rem 0;
`;

const GettingThereSection = styled.section`
  background-color: ${mainColor};
  padding: 5rem 0;
`;

const FaqSection = styled.section`
  background-color: white;
  padding: 5rem 0;
`;

const RsvpSection = styled.section`
  background-color: white;
  padding: 5rem 0;
`;

const StyledForm = styled.form`
  display: contents;
  font-family: "Open Sans";
  text-align: left;
`;

const StyledLabel = styled.label`
  padding: 0 0 0.2rem 0;
`;

const StyledInput = styled.input`
  font-family: "Open Sans";
  height: 2rem;
  min-width: 25rem;
  border: 0.2rem solid ${darkColor};
  margin: 0 0 1.5rem 0;

  &:focus {
    outline: 0.2rem solid ${secondaryDarkColor};
  }

  @media screen and (max-width: 700px) {
    min-width: 15rem;
  }
`;

const StyledTextarea = styled.textarea`
  font-family: "Open Sans";
  border: 0.2rem solid ${darkColor};
  margin: 0 0 1.5rem 0;
  resize: none;

  &:focus {
    outline: 0.2rem solid ${secondaryDarkColor};
  }
`;

function getNameFromQueryString(): string {
  const queryParams = new URLSearchParams(document.location.search);
  return queryParams.get("name") || "";
}

function Invitation() {
  const { t } = useTranslation("", { keyPrefix: "invitation" });
  const placeholder = t("rsvp_section.comments_placeholder");
  const namePlaceholder = t("rsvp_section.name_placeholder");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const emptySection = document.getElementById("empty-section");

    if (element && emptySection) {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        emptySection.offsetHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      console.log(y);
    }
  };

  const [name, setName] = useState(getNameFromQueryString());
  const [attendingCheck, setAttendingChecked] = useState(true);
  const [transportCheck, setTransportChecked] = useState(true);
  const [comments, setComments] = useState("");

  const [rsvpFormVisible, setRsvpFormVisible] = useState(true);

  const respond = useRespond();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await respond({
        name: name,
        attending: attendingCheck,
        needTransport: transportCheck,
        comments: comments,
      });
      setRsvpFormVisible(false);
    } catch {
      alert("Oops! Something went wrong :(");
    }
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledMenu>
          <RespondButton onClick={() => scrollToSection("rsvp")}>
            {t("menu.rsvp")}
          </RespondButton>
          <StyledMenuItem onClick={() => scrollToSection("home")}>
            {t("menu.home")}
          </StyledMenuItem>
          <StyledMenuItem onClick={() => scrollToSection("wedding")}>
            {t("menu.wedding")}
          </StyledMenuItem>
          <StyledMenuItem onClick={() => scrollToSection("getting-there")}>
            {t("menu.getting_there")}
          </StyledMenuItem>
          <StyledMenuItem onClick={() => scrollToSection("faq")}>
            {t("menu.faq")}
          </StyledMenuItem>
        </StyledMenu>
      </StyledHeader>
      <EmptySection id="empty-section" />
      <HomeSection id="home">
        <StyledSectionContainer>
          <MainImage src={mainImage} />
          <GettingMarriedText>
            {t("home_section.getting_married")}
          </GettingMarriedText>
          <HomeSectionDateText>{t("home_section.date")}</HomeSectionDateText>
        </StyledSectionContainer>
      </HomeSection>
      <ParallaxSectionOne />
      <WeddingSection id="wedding">
        <StyledSectionContainer>
          <WeddingImage src={weddingFlower} />
          <SectionItemContainer>
            <SectionHeaderText>{t("wedding_section.header")}</SectionHeaderText>
          </SectionItemContainer>
          <SectionItemParagraph>
            {t("wedding_section.invitation_paragraph")}
          </SectionItemParagraph>
          <SectionItemContainer>
            <SectionItemHeader>
              {t("wedding_section.when_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("wedding_section.when_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionItemHeader>
              {t("wedding_section.where_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("wedding_section.where_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
          <StyledRsvpContainer>
            <RsvpParagraph>{t("wedding_section.rsvp_paragraph")}</RsvpParagraph>
            <StyledLinkButton onClick={() => scrollToSection("rsvp")}>
              {t("wedding_section.rsvp_button")}
            </StyledLinkButton>
          </StyledRsvpContainer>
        </StyledSectionContainer>
      </WeddingSection>
      <ParallaxSectionTwo />
      <GettingThereSection id="getting-there">
        <StyledSectionContainer>
          <SectionItemContainer>
            <SectionHeaderText>
              {t("getting_there_section.header")}
            </SectionHeaderText>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionItemHeader>
              {t("getting_there_section.transportation_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("getting_there_section.transportation_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionItemHeader>
              {t("getting_there_section.accomodations_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("getting_there_section.accomodations_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
          <SectionItemContainer>
            <StyledLinkButton
              href="https://goo.gl/maps/SBEMyieyoyFVnmbh7"
              target="_blank"
            >
              {t("getting_there_section.map_button")}
            </StyledLinkButton>
          </SectionItemContainer>
        </StyledSectionContainer>
      </GettingThereSection>
      <ParallaxSectionThree />
      <FaqSection id="faq">
        <StyledSectionContainer>
          <SectionItemContainer>
            <SectionHeaderText>{t("faq_section.header")}</SectionHeaderText>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionItemHeader>
              {t("faq_section.dress_code_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("faq_section.dress_code_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionItemHeader>
              {t("faq_section.kids_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("faq_section.kids_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionItemHeader>
              {t("faq_section.flowers_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("faq_section.flowers_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionItemHeader>
              {t("faq_section.gifts_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("faq_section.gifts_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionItemHeader>
              {t("faq_section.anything_else_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("faq_section.anything_else_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
        </StyledSectionContainer>
      </FaqSection>
      <ParallaxSectionFour />
      <RsvpSection id="rsvp">
        <StyledSectionContainer>
          <WeddingImage src={weddingFlower2} />
          {rsvpFormVisible ? (
            <>
              <SectionItemContainer>
                <SectionHeaderText>
                  {t("rsvp_section.header")}
                </SectionHeaderText>
              </SectionItemContainer>
              <StyledForm>
                <StyledLabel>{t("rsvp_section.name_label")}</StyledLabel>
                <StyledInput
                  type="text"
                  value={name}
                  autoComplete="off"
                  placeholder={namePlaceholder}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <Checkbox
                  id="attending"
                  checked={attendingCheck}
                  label={t("rsvp_section.attending_label")}
                  onChange={() => setAttendingChecked(!attendingCheck)}
                />
                <Checkbox
                  id="transport"
                  checked={transportCheck}
                  label={t("rsvp_section.transport_label")}
                  onChange={() => setTransportChecked(!transportCheck)}
                />
                <StyledLabel>{t("rsvp_section.comments_label")}</StyledLabel>
                <StyledTextarea
                  value={comments}
                  autoComplete="off"
                  rows={4}
                  placeholder={placeholder}
                  onChange={(e) => setComments(e.target.value)}
                />
                <StyledLinkButton onClick={handleSubmit}>
                  {t("rsvp_section.save_button")}
                </StyledLinkButton>
              </StyledForm>
            </>
          ) : (
            <>
              <SectionItemContainer>
                <SectionHeaderText>
                  {t("rsvp_section.thank_you")}
                </SectionHeaderText>
              </SectionItemContainer>
              <StyledLinkButton onClick={() => setRsvpFormVisible(true)}>
                {t("rsvp_section.edit_button")}
              </StyledLinkButton>
            </>
          )}
        </StyledSectionContainer>
      </RsvpSection>
    </StyledContainer>
  );
}

export default Invitation;
