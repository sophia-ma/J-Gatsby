interface Breakpoints {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}

interface Variables {
    backgroundColour: string;
    primaryColour: string;
    headerHeight: string;
    headerHeightSM: string;
    headerHeightXS: string;
    secondaryColour: string;
}

interface Matches {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
}

export const variables: Variables = {
    backgroundColour: '#fff',
    primaryColour: '#2a2b2c',
    headerHeight: '190px',
    headerHeightSM: '110px',
    headerHeightXS: '80px',
    secondaryColour: '#bbb',
};

export const breakpoints: Breakpoints = {
    xs: '480px',
    sm: '769px',
    md: '992px',
    lg: '1200px',
};

export const matches: Breakpoints = {
    xs: `(max-width:${breakpoints.xs})`,
    sm: `(max-width:${breakpoints.sm})`,
    md: `(max-width:${breakpoints.md})`,
    lg: `(max-width:${breakpoints.lg})`,
};
