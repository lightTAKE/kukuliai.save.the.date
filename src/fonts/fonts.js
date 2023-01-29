import { createGlobalStyle } from "styled-components";

import OpenSansWoff from "./OpenSans-Regular.woff";
import OpenSansWoff2 from "./OpenSans-Regular.woff2";
import OpenSansBoldWoff from "./OpenSans-Bold.woff";
import OpenSansBoldWoff2 from "./OpenSans-Bold.woff2";
import OpenSansSemiboldWoff from "./OpenSans-SemiBold.woff";
import OpenSansSemiboldWoff2 from "./OpenSans-SemiBold.woff2";

import PermanentMarkerWoff from "./PermanentMarker.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'),
        url(${OpenSansWoff2}) format('woff2'),
        url(${OpenSansWoff}) format('woff');
    }    

    @font-face {
        font-family: 'Open Sans Bold';
        src: local('Open Sans Bold'),
        url(${OpenSansBoldWoff2}) format('woff2'),
        url(${OpenSansBoldWoff}) format('woff');
        font-weight: 700;
        font-style: bold;
    }

    @font-face {
        font-family: 'Open Sans Semibold';
        src: local('Open Sans Semibold'),
        url(${OpenSansSemiboldWoff2}) format('woff2'),
        url(${OpenSansSemiboldWoff}) format('woff');
        font-weight: 600;
        font-style: bold;
    }

    @font-face {
        font-family: 'Permenent Marker';
        src: local('Open Sans Semibold'),
        url(${PermanentMarkerWoff}) format('woff');
        font-style: regular;
    }
`;
