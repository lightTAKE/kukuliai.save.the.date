import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 0 0 1.4rem 0;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? "#163e3a" : "#58655d")};
  transition: all 150ms;
  line-height: 21px;
  text-align: center;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #acacac;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }

  &:hover {
    background: black;
  }
`;

const StyledLabel = styled.label`
  font-family: "Open Sans",
  font-size: 1rem;
  width: 8rem;
`;

const Checkbox = ({
  checked,
  onChange,
  id,
  label,
  ...props
}: {
  checked: boolean;
  onChange: (event: any) => void;
  id: string;
  label: string;
  props?: any[];
}) => (
  <label>
    <CheckboxContainer>
      <HiddenCheckbox
        checked={checked}
        onChange={onChange}
        id={id}
        {...props}
      />
      <StyledLabel>{label}</StyledLabel>
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  </label>
);

export default Checkbox;
