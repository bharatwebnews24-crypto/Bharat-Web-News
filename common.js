// १. टॉप बार, हेडर आणि नेव्हिगेशन मेनू (नवीन लोगोच्या रंगांनुसार)
const headerHTML = `
    <!-- Top Bar -->
    <div class="top-bar">
        <div><i class="fa-regular fa-calendar"></i> Tue, Aug 11, 2026</div>
        <div class="languages">
            <a href="index.html" class="active">मराठी</a> | 
            <a href="#">हिंदी</a> | 
            <a href="#">English</a>
        </div>
        <div>
            <a href="#" style="color:#fff;"><i class="fa-solid fa-bullhorn"></i> जाहिरातीसाठी संपर्क</a>
        </div>
    </div>

    <!-- Header -->
    <header>
        <div class="logo-container">
            <a href="index.html"><img src="bwn logo.jpg" alt="भारत WEB NEWS Logo"></a>
        </div>
        <div>
            <i class="fa-solid fa-magnifying-glass" style="font-size: 20px; color: var(--bwn-blue); cursor: pointer;"></i>
        </div>
    </header>

    <!-- Navigation Bar (तुम्ही दिलेली सर्व २५+ पेजेस) -->
    <nav>
        <a href="index.html">मुख्य पान</a>
        <a href="maharashtra.html">महाराष्ट्र</a>
        <a href="india.html">भारत</a>
        <a href="national.html">राष्ट्रीय</a>
        <a href="politics.html">राजकारण</a>
        <a href="maharashtra-politics.html">महाराष्ट्र राजकारण</a>
        <a href="elections.html">निवडणुका</a>
        <a href="government-schemes.html">सरकारी योजना</a>
        <a href="parliament.html">संसद</a>
        <a href="mumbai.html">मुंबई</a>
        <a href="pune.html">पुणे</a>
        <a href="nagpur.html">नागपूर</a>
        <a href="nashik.html">नाशिक</a>
        <a href="marathwada.html">मराठवाडा</a>
        <a href="vidarbha.html">विदर्भ</a>
        <a href="sports.html">क्रीडा</a>
        <a href="cricket.html">क्रिकेट</a>
        <a href="kabaddi.html">कबड्डी</a>
        <a href="football.html">फुटबॉल</a>
        <a href="other-sports.html">इतर क्रीडा</a>
        <a href="entertainment.html">मनोरंजन</a>
        <a href="bollywood.html">बॉलिवूड</a>
        <a href="marathi-movies.html">मराठी चित्रपट</a>
        <a href="tv.html">टीव्ही</a>
        <a href="technology.html">तंत्रज्ञान</a>
        <a href="mobile.html">मोबाईल</a>
        <a href="internet.html">इंटरनेट</a>
    </nav>

    <!-- Trending Bar -->
    <div class="trending-bar">
        <span class="tag">ट्रेंडिंग</span>
        <a href="elections.html">#निवडणुका</a>
        <a href="government-schemes.html">#सरकारी_योजना</a>
        <a href="cricket.html">#क्रिकेट</a>
        <a href="maharashtra-politics.html">#महाराष्ट्र_राजकारण</a>
    </div>
`;

// २. डावा साईडबार (Explorer Section)
const sidebarHTML = `
    <aside class="left-sidebar">
        <h3><i class="fa-solid fa-compass"></i> एक्सप्लोर करा</h3>
        <ul class="explorer-menu">
            <li><a href="index.html"><i class="fa-solid fa-house"></i> मुख्य पान</a></li>
            <li><a href="maharashtra.html"><i class="fa-solid fa-location-dot"></i> महाराष्ट्र</a></li>
            <li><a href="politics.html"><i class="fa-solid fa-landmark"></i> राजकारण</a></li>
            <li><a href="sports.html"><i class="fa-solid fa-trophy"></i> क्रीडा</a></li>
            <li><a href="entertainment.html"><i class="fa-solid fa-film"></i> मनोरंजन</a></li>
            <li><a href="technology.html"><i class="fa-solid fa-microchip"></i> तंत्रज्ञान</a></li>
        </ul>
    </aside>
`;

// ३. उजवा साईडबार (Ad + Top Headlines)
const rightSidebarHTML = `
    <aside class="right-sidebar">
        <div class="ad-box">
            <i class="fa-solid fa-rectangle-ad"></i> &nbsp; Advertisement (जाहिरात)
        </div>
        <div class="top-headlines">
            <h3><i class="fa-solid fa-bolt"></i> महत्त्वाच्या बातम्या</h3>
            <div class="headline-item">
                <span style="color: var(--bwn-red); font-size: 10px; font-weight: bold;">महाराष्ट्र</span>
                <a href="maharashtra.html"><br>राज्यात आज पावसाचा अंदाज; अनेक भागात अलर्ट जारी</a>
            </div>
            <div class="headline-item">
                <span style="color: var(--bwn-green); font-size: 10px; font-weight: bold;">तंत्रज्ञान</span>
                <a href="mobile.html"><br>नवीन ५जी स्मार्टफोन बाजारात; पहा किंमत आणि फीचर्स</a>
            </div>
            <div class="headline-item">
                <span style="color: var(--bwn-blue); font-size: 10px; font-weight: bold;">क्रीडा</span>
                <a href="cricket.html"><br>भारतीय संघाचा मोठा विजय; कर्णधाराची शतकी खेळी</a>
            </div>
        </div>
    </aside>
`;

// DOM मध्ये हेडर आणि साईडबार स्वयंचलित जोडणे
document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById("header-target")) {
        document.getElementById("header-target").innerHTML = headerHTML;
    }
    if(document.getElementById("left-sidebar-target")) {
        document.getElementById("left-sidebar-target").innerHTML = sidebarHTML;
    }
    if(document.getElementById("right-sidebar-target")) {
        document.getElementById("right-sidebar-target").innerHTML = rightSidebarHTML;
    }

    // Active Tab Highlight करणे
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "") currentPage = "index.html";
    let navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
