import { useStaticQuery, graphql } from 'gatsby';

interface DataProps {
    site: {
        buildTime: string;
        siteMetadata: {
            title: string;
            titleAlt: string;
            description: string;
            banner: string;
            headline: string;
            siteLanguage: string;
            author: string;
        };
    };
}

export const useSiteMetadata = () => {
    const { site }: DataProps = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    buildTime(formatString: "YYYY-MM-DD")
                    siteMetadata {
                        title
                        titleAlt
                        description
                        banner
                        headline
                        siteLanguage
                        author
                    }
                }
            }
        `,
    );

    return site;
};
