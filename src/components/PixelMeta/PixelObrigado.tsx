'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Script from "next/script"
import { useEffect } from "react";

let time = 0

const PixelObrigado = () => {

    const pathname = usePathname()
    const router = useRouter()
    const params = useSearchParams()

    useEffect(() => {
        if (window != undefined && params.get('lead')) {
            router.push('/obrigado?reloaded')
            setTimeout(() => {
                window.location.reload()
            }, 300)
        }
    }, [pathname]);



    if (time == 0 && pathname == '/obrigado') {
        time = 1
        return (
            <>
                {/* Meta Pixel Code  */}
                <Script id="fb-pixel"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '2005714673161741');
                        fbq('track', 'PageView');
                        fbq('track', 'Lead');
                    `
                    }
                    }
                />
                <noscript><img height="1" width="1" style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=2005714673161741&ev=PageView&noscript=1"
                /></noscript>
                {/* End Meta Pixel Code  */}
            </>
        );
    }
    return null

}

export default PixelObrigado;