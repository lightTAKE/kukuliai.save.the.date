import styled from "styled-components";
import { useTranslation } from "react-i18next";

function Invitation() {
  const { t } = useTranslation("", { keyPrefix: "invitation" });

  return <span>Reception</span>;
}

export default Invitation;
