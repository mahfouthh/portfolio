import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Maor Hevron - Personal Portfolio}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="	cv, portfolio, react nextjs portfolio, resume"
      />
      <meta
        name="description"
        content="Maor Hevron - Personal Portfolio"
      />
      <meta name="ibthemes" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="favicon.ico" />

      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
        window.onload = function() {
          Calendly.initBadgeWidget({
            url: 'https://calendly.com/maor-hevron/interview',
            text: 'Schedule a Quick Talk',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: undefined
          });
        }
      `}} />
    </Head>
  </>
);

export default Seo;
