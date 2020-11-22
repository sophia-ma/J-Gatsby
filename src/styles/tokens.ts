interface Breakpoints {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}

interface Variables {
    backgroundColour: string;
    sectionColour: string;
    mainSectionsColourText: string;
    basicColour: string;
    headerHeight: string;
    headerHeightSM: string;
    headerHeightXS: string;
}

interface Matches {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
}

export const variables: Variables = {
    backgroundColour: '#1a2b2c',
    sectionColour: '#e0dede',
    mainSectionsColourText: '#2a2b2c',
    basicColour: '#d0b88d',
    headerHeight: '190px',
    headerHeightSM: '110px',
    headerHeightXS: '80px',
};

export const breakpoints: Breakpoints = {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
};

export const matches: Breakpoints = {
    xs: `(max-width:${breakpoints.xs})`,
    sm: `(max-width:${breakpoints.sm})`,
    md: `(max-width:${breakpoints.md})`,
    lg: `(max-width:${breakpoints.lg})`,
};
