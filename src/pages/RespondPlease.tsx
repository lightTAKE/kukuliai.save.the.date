import styled from "styled-components";
import Checkbox from "../components/checkbox";
import { useState } from "react";
import useRespond from "../hooks/use-respond";

const StyledComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledInnerContainer = styled.div`
  min-width: -webkit-fill-available;
  margin: 0 20vh 0 20vh;
`;

const StyledFieldset = styled.fieldset`
  border 0.5rem solid black;
`;

const StyledLegend = styled.legend`
  font-size: 4rem;
  font-family: "Permenent Marker";
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  row-gap: 1.25rem;
`;

const StyledForm = styled.form`
  margin: 2.5rem 1rem 1rem 1rem;
`;

const StyledLabel = styled.span`
  font-family: "Open Sans Bold";
  font-size: 1rem;
`;

const StyledTextInput = styled.input`
  border: none;
  padding-bottom: 0.125rem;
  border-bottom: 0.125rem solid black;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const SyledButton = styled.button`
  border: none;
  background-color: #cb4127;
  color: white;
  padding: 0;
  margin: 0;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;

function RespondPlease() {
  const [name, setName] = useState("");
  const [attendingCheck, setAttendingChecked] = useState(true);
  const [transportCheck, setTransportChecked] = useState(true);
  const [comments, setComments] = useState("");

  const respond = useRespond();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await respond({
      name: name,
      attending: attendingCheck,
      needTransport: transportCheck,
      comments: comments,
    });
  };

  return (
    <StyledComponentContainer>
      <StyledInnerContainer>
        <StyledFieldset>
          <StyledLegend>&nbsp;RSVP&nbsp;</StyledLegend>
          <StyledForm>
            <StyledGridContainer>
              <StyledLabel>Name&nbsp;&nbsp;</StyledLabel>
              <StyledTextInput
                type="text"
                name="name"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
              <StyledLabel>Will be there!</StyledLabel>
              <Checkbox
                id="attending"
                checked={attendingCheck}
                onChange={() => setAttendingChecked(!attendingCheck)}
              />
              <StyledLabel>Need a lift!</StyledLabel>
              <Checkbox
                id="transport"
                checked={transportCheck}
                onChange={() => setTransportChecked(!transportCheck)}
              />
              <StyledLabel>Comments&nbsp;&nbsp;</StyledLabel>
              <StyledTextInput
                type="text"
                name="comments"
                autoComplete="off"
                placeholder="alergies, special needs, etc."
                onChange={(e) => setComments(e.target.value)}
              />
              <SyledButton onClick={handleSubmit}>Submit</SyledButton>
            </StyledGridContainer>
          </StyledForm>
        </StyledFieldset>
      </StyledInnerContainer>
    </StyledComponentContainer>
  );
}

export default RespondPlease;
