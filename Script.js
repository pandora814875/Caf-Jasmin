// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Menu Filtering Logic
const menuData = {
    boissons: [
        { name: "Direct (Café au lait)", desc: "L'incontournable classique tunisien.", price: "3.200 DT" },
        { name: "Thé à la Menthe & Pignons", desc: "Thé vert infusé à la menthe fraîche.", price: "4.500 DT" },
        { name: "Citronnade Maison", desc: "Fraîchement pressée à la mode sfaxienne.", price: "5.500 DT" },
        { name: "Café Jasmin Signature", desc: "Latte floral aux notes de fleur d'oranger.", price: "6.800 DT" }
    ],
    gourmandises: [
        { name: "Bambalouni au Sucre", desc: "Beignet traditionnel chaud et croustillant.", price: "2.500 DT" },
        { name: "Assiette de Pâtisserie Tunisienne", desc: "Sélection de Baklawa et Kaak Warka.", price: "12.000 DT" },
        { name: "Cheesecake Pistache", desc: "Fusion moderne à la pistache de Mateur.", price: "9.500 DT" },
        { name: "Mlawi Chocolat Noisette", desc: "Crêpe fine revisitée.", price: "6.000 DT" }
    ]
};

function filterMenu(category) {
    const content = document.getElementById('menu-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    // Update Active Button
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category.substring(0,3))) btn.classList.add('active');
    });

    // Animate transition
    content.style.opacity = '0';
    
    setTimeout(() => {
        content.innerHTML = menuData[category].map(item => `
            <div class="menu-item">
                <div class="menu-info">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                </div>
                <span class="price">${item.price}</span>
            </div>
        `).join('');
        content.style.opacity = '1';
    }, 300);
}

// Initial reveal call
reveal();