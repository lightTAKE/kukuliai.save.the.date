import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: ${(props) => (props.checked ? "#cb4127" : "#ffebf2")};
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
    background: red;
  }
`;

const Checkbox = ({
  checked,
  onChange,
  id,
  ...props
}: {
  checked: boolean;
  onChange: (event: any) => void;
  id: string;
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
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  </label>
);

export default Checkbox;
