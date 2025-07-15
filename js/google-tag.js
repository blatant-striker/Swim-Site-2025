// Google Tag Manager Integration
(function() {
    // Load Google Tag Manager script
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-17239822947";
    document.head.appendChild(gtmScript);
    
    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17239822947');
    
    // Make gtag available globally
    window.gtag = gtag;
    
    console.log("Google Tag Manager initialized with ID: AW-17239822947");
})(); 