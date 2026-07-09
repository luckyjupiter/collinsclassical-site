// Bluebonnet Music — Simple page view tracker
// Logs page views to /api/track endpoint (no cookies, no PII)
(function() {
    var data = {
        page: location.pathname,
        ref: document.referrer || 'direct',
        t: new Date().toISOString()
    };
    navigator.sendBeacon('/api/track', JSON.stringify(data));
})();
