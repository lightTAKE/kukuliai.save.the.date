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
import Arrow from "../components/arrow";

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
  z-index: 1;
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
  letter-spacing: 0.3rem;

  &:hover {
    color: ${mainColor};
    background-color: ${secondaryDarkColor};
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    padding: 0.5rem 0.5rem;
    margin: 1rem 0;
    letter-spacing: 0;
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
  color: white;
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

const ParallaxSection = styled.section`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 50vh;

  @supports (-webkit-touch-callout: none) {
    background-attachment: scroll;
    height: 100vh;
  }
`;

const ParallaxSectionOne = styled(ParallaxSection)`
  background-image: url(${sectionImage1});
`;

const ParallaxSectionTwo = styled(ParallaxSection)`
  background-image: url(${sectionImage2});
`;

const ParallaxSectionThree = styled(ParallaxSection)`
  background-image: url(${sectionImage3});
`;

const ParallaxSectionFour = styled(ParallaxSection)`
  background-image: url(${sectionImage4});
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

const PlanHeaderText = styled.span`
  font-family: "Open Sans Bold";
  font-size: 2rem;
  letter-spacing: 0.3rem;
`;

const PlanItemHeader = styled.span`
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
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

const SubjectToChangeParagraph = styled(SectionItemParagraph)`
  font-family: "Open Sans Bold";
  font-size: 0.9rem;
  margin: 2rem 0 0 0;
`;

const SectionItemContainer = styled.div`
  margin: 1.5rem 0;
  width: 50rem;

  @media screen and (max-width: 700px) {
    width: 21rem;
  }
`;

const StyledDivider = styled.div`
  width: 20px;
  height: 1px;
  background-color: ${darkColor};
  margin: 0.5rem auto;
`;

const StyledPlanContainer = styled.div``;

const RsvpItemContainer = styled(SectionItemContainer)`
  margin: 3rem 0 2rem 0;
`;

const RsvpParagraph = styled(SectionItemParagraph)`
  padding: 0 0 1.5rem 0;
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

function Invitation() {
  const { t } = useTranslation("", { keyPrefix: "invitation" });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const emptySection = document.getElementById("empty-section");

    if (element && emptySection) {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        emptySection.offsetHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [planVisible, setPlanVisible] = useState(false);

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
          <SectionItemContainer>
            <WeddingImage src={weddingFlower} />
            <SectionHeaderText>{t("wedding_section.header")}</SectionHeaderText>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionItemParagraph>
              {t("wedding_section.invitation_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
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

          <SectionItemContainer>
            <PlanHeaderText>
              {t("wedding_section.day_plan.header")}
            </PlanHeaderText>
          </SectionItemContainer>

          <Arrow
            rotated={planVisible}
            onClick={() => setPlanVisible(!planVisible)}
          />

          {planVisible ? (
            <StyledPlanContainer>
              <SectionItemContainer>
                <PlanItemHeader>
                  {t("wedding_section.day_plan.leaving_header")}
                </PlanItemHeader>
                <StyledDivider />
                <SectionItemParagraph>
                  {t("wedding_section.day_plan.leaving_paragraph")}
                </SectionItemParagraph>
              </SectionItemContainer>
              <SectionItemContainer>
                <PlanItemHeader>
                  {t("wedding_section.day_plan.arrival_header")}
                </PlanItemHeader>
                <StyledDivider />
                <SectionItemParagraph>
                  {t("wedding_section.day_plan.arrival_paragraph")}
                </SectionItemParagraph>
              </SectionItemContainer>
              <SectionItemContainer>
                <PlanItemHeader>
                  {t("wedding_section.day_plan.ceremony_header")}
                </PlanItemHeader>
                <StyledDivider />
                <SectionItemParagraph>
                  {t("wedding_section.day_plan.ceremony_paragraph")}
                </SectionItemParagraph>
              </SectionItemContainer>
              <SectionItemContainer>
                <PlanItemHeader>
                  {t("wedding_section.day_plan.coctail_header")}
                </PlanItemHeader>
                <StyledDivider />
                <SectionItemParagraph>
                  {t("wedding_section.day_plan.coctail_paragraph")}
                </SectionItemParagraph>
              </SectionItemContainer>
              <SectionItemContainer>
                <PlanItemHeader>
                  {t("wedding_section.day_plan.dinner_header")}
                </PlanItemHeader>
                <StyledDivider />
                <SectionItemParagraph>
                  {t("wedding_section.day_plan.dinner_paragraph")}
                </SectionItemParagraph>
              </SectionItemContainer>
              <SectionItemContainer>
                <PlanItemHeader>
                  {t("wedding_section.day_plan.cake_header")}
                </PlanItemHeader>
                <StyledDivider />
                <SectionItemParagraph>
                  {t("wedding_section.day_plan.cake_paragraph")}
                </SectionItemParagraph>
              </SectionItemContainer>
              <SectionItemContainer>
                <PlanItemHeader>
                  {t("wedding_section.day_plan.dancing_header")}
                </PlanItemHeader>
                <StyledDivider />
                <SectionItemParagraph>
                  {t("wedding_section.day_plan.dancing_paragraph")}
                </SectionItemParagraph>
              </SectionItemContainer>
              <SectionItemContainer>
                <PlanItemHeader>
                  {t("wedding_section.day_plan.bonfire_header")}
                </PlanItemHeader>
                <StyledDivider />
                <SectionItemParagraph>
                  {t("wedding_section.day_plan.bonfire_paragraph")}
                </SectionItemParagraph>
              </SectionItemContainer>
              <SectionItemContainer>
                <PlanItemHeader>
                  {t("wedding_section.day_plan.end_header")}
                </PlanItemHeader>
                <StyledDivider />
                <SectionItemParagraph>
                  {t("wedding_section.day_plan.end_paragraph")}
                </SectionItemParagraph>
              </SectionItemContainer>
              <SectionItemContainer>
                <SubjectToChangeParagraph>
                  {t("wedding_section.day_plan.might_change_paragraph")}
                </SubjectToChangeParagraph>
              </SectionItemContainer>
            </StyledPlanContainer>
          ) : (
            <></>
          )}

          <RsvpItemContainer>
            <RsvpParagraph>{t("wedding_section.rsvp_paragraph")}</RsvpParagraph>
            <StyledLinkButton onClick={() => scrollToSection("rsvp")}>
              {t("wedding_section.rsvp_button")}
            </StyledLinkButton>
          </RsvpItemContainer>
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
            <StyledLinkButton
              href="https://goo.gl/maps/QSbrQEpXu6y45J4E7"
              target="_blank"
            >
              {t("getting_there_section.pickup_button")}
            </StyledLinkButton>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionItemParagraph>
              {t("getting_there_section.getting_there_yourself_paragraph")}
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
          <SectionItemContainer>
            <SectionItemHeader>
              {t("getting_there_section.accomodations_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("getting_there_section.accomodations_paragraph")}
            </SectionItemParagraph>
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
              {t("faq_section.celebration_length_header")}
            </SectionItemHeader>
            <StyledDivider />
            <SectionItemParagraph>
              {t("faq_section.celebration_length_paragraph")}
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
          <SectionHeaderText>{t("rsvp_section.thank_you")}</SectionHeaderText>
          <SectionItemContainer>
            <SectionItemParagraph>
              {t("rsvp_section.thank_you_paragraph")}
            </SectionItemParagraph>
          </SectionItemContainer>
        </StyledSectionContainer>
      </RsvpSection>
    </StyledContainer>
  );
}

export default Invitation;
