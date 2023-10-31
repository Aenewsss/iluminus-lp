import Script from "next/script";

const GoogleHeadTag = () => {
    return (
        <>
            {/* Google tag (gtag.js)  */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-71S9BMXBR7"></script>
            <Script
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-71S9BMXBR7');
            `
                }
                }
            />
            <Script
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5746VZ79');
            `
                }
                }
            />

            {/*  End Google Tag Manager  */}
        </>
    );
}

export default GoogleHeadTag;