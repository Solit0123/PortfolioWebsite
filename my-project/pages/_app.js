import '../styles/globals.css'
import Head from "next/head"
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    
  <div>
    <Head>
    

    </Head>
    {/* <Script src="//embed.typeform.com/next/embed.js"></Script> */}
    {/* <Script id="show-banner"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.markerConfig = {
          project: '63ca1870671d2395d00ecce7',
          source: 'snippet',
        
          // Identify your reporter
          reporter: {
            email: 'john@clientwebsite.com',
            fullName: 'John Smith',
          },
        
          // Collect custom information
          customData: {
            storeId: 123,
            storeName: 'Organic Fruits',
          },
        }
      
      !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);
      
        `, }}
    /> */}
    <Script
    id="HotJarAnalytics"
    strategy='afterInteractive'
    >
      {`
       (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3488778,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
       </Script>
  <Component {...pageProps} />
</div>
  )
  
  

}

export default MyApp
