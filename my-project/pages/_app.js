import '../styles/globals.css'
import Head from "next/head"
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return
  
  
  <div>
       <Head>
              <Script
          id="show-banner"
          dangerouslySetInnerHTML={{
            __html: `
            
            window.markerConfig = {
              project: '63ca1870671d2395d00ecce7', 
              source: 'snippet'
            };
          
          !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);
          
            `,
          }}
        />
    
      </Head>
      <Component {...pageProps} />
  </div>

}

export default MyApp
