const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const btnpdf = document.querySelectorAll(".btn_pdf");

btnpdf.forEach(btnpdf => {
  btnpdf.addEventListener("mouseover", () => {
    btnpdf.style.color= "#2476da";
  });
  btnpdf.addEventListener("mouseout", () => {
    btnpdf.style.color= "#2887ff";
  });
});

menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");

    const isopen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isopen ? "ri-close-line" : "re-menu-line")
});


navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-close-line" )
})

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };

   var map = L.map('mapa1')
      var botella = L.icon({
    iconUrl: 'static/images/1445056.png',
    iconSize:     [40, 50], 
    shadowSize:   [50, 64], 
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76]
});
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)
      

-37.249222, -59.129242
    L.Routing.control({
      waypoints: [
        L.latLng(-37.229372, -59.095139), 
        L.latLng(-37.486044, -59.171119),

      ],
      draggableWaypoints: false,
    }).addTo(map)
    L.marker([-37.459381, -59.174536], {icon: botella}).addTo(map)
      L.marker([-37.260153, -59.135422], {icon: botella}).addTo(map)
     var map = L.map('mapa2')
      var botella = L.icon({
    iconUrl: 'static/images/1445056.png',
    iconSize:     [40, 50], 
    shadowSize:   [50, 64], 
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76]
});
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)
      

    L.Routing.control({
      waypoints: [
        L.latLng(-37.044102, -59.004488), 
        L.latLng(-37.648146, -59.402475),
        
      ],
      draggableWaypoints: false,
    }).addTo(map)
    L.marker([-37.205626, -59.068792], {icon: botella}).addTo(map);
      L.marker([-37.494547, -59.304623], {icon: botella}).addTo(map);
  ScrollReveal().reveal(".header__image images", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".destination__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
    ScrollReveal().reveal(".showcase__image images", {
    ...scrollRevealOption,
    origin: "left",
  });

  ScrollReveal().reveal(".showcase__content h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".showcase__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal("showcase__btn", {
    ...scrollRevealOption,
    delay: 1500,
     });

       ScrollReveal().reveal(".banner__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});


