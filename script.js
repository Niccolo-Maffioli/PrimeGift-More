//home voce
/* const logo = document.querySelector('.logo');

logo.addEventListener("click", () => {
    logo.innerHTML = "<img src=\"img/logoHover.png\" alt=\"logohover\" class=\"logo\">"
}); */

// popup
// popup
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", (e) => {
      if (e.target.classList.contains("showdescription")) {
          toggleVideoPopup();
          videoItemDetails(e.target.closest(".card-episode"));
      }

      if (e.target.classList.contains("video-popup-close")) {
          toggleVideoPopup();
      }
  });

  function toggleVideoPopup() {
      const videoPopup = document.querySelector(".video-popup");
      videoPopup.classList.toggle("openpopup");

      if (videoPopup.classList.contains("openpopup")) {
          document.querySelector(".video-popup-close").addEventListener("click", toggleVideoPopup);
      } else {
          document.querySelector(".video-popup-close").removeEventListener("click", toggleVideoPopup);
      }
  }

  function videoItemDetails(videoItem) {
      document.querySelector(".details-title").textContent = videoItem.querySelector(".episode-title").textContent;
      document.querySelector(".details-description").textContent = videoItem.querySelector(".epdescription").textContent;
  }
});


function toggleVideoPopup() {
  const videoPopup = document.querySelector(".video-popup");
  videoPopup.classList.toggle("openpopup");

  if (videoPopup.classList.contains("openpopup")) {
      document.querySelector(".pp-thumbnail").play();
      document.querySelector(".video-popup-close").addEventListener("click", toggleVideoPopup);
  } else {
      document.querySelector(".pp-thumbnail").pause();
      document.querySelector(".video-popup-close").removeEventListener("click", toggleVideoPopup);
  }
}

/* section */

const nav = document.querySelector(".list"),
            navList = nav.querySelectorAll("li"),
            totalNavList = navList.length,
            allSection = document.querySelectorAll(".section"),
            totalSection = allSection.length

for(let i = 0; i<totalNavList; i++ ) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for(let j = 0; j<totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        /* if(window.innerWidth<1200) {
            asideSectionTogglerBtn();
        } */
    });
}

function removeBackSection() {
  for(let i = 0; i<totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for(let i = 0; i<totalSection; i++) {
      allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for(let i = 0; i<totalNavList; i++)
  {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
          navList[i].querySelector("a").classList.add("active");
      }
  }
}

/* read more */
/* const readMoreButton = document.querySelector(".read-more"),
            readMoreContent = document.querySelector(".not-visible");

readMoreButton.addEventListener("click", () => {
    readMoreContent.classList.toggle('visible');
    readMoreButton.innerHTML = "Leggi di meno";
}); */

/* modale */



document.addEventListener('DOMContentLoaded', function () {

    /* var prova = document.modalText.innerHTML = <img src="img/Diario/coverdiary"></img> */
    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modal-text");
    
    // Array to store text for each team member
    var teamMemberText = [
      '<img class="coverdiary" src="img/Diario/giorno 1_page-0001.jpg"></img>',
      '<img class="coverdiary" src="img/Diario/giorno 2_page-0001.jpg"></img>',
      '<img class="coverdiary" src="img/Diario/giorno 3_page-0001.jpg"></img>',
      '<img class="coverdiary" src="img/Diario/giorno 4_page-0001.jpg"></img>',
      '<img class="coverdiary" src="img/Diario/giorno 5_page-0001.jpg"></img>',
      '<img class="coverdiary" src="img/Diario/giorno 6_page-0001.jpg"></img>',
      '<img class="coverdiary" src="img/Diario/giorno 7_page-0001.jpg"></img>',
      '<img class="coverdiary" src="img/Diario/giorno 8_page-0001.jpg"></img>',
      '<img class="coverdiary" src="img/Diario/giorno 9_page-0001.jpg"></img>',
      '<img class="coverdiary" src="img/Diario/giorno 10_page-0001.jpg"></img>',
      
      // Add text for other team members here
    ];
    
    // Get all team members
    var teamMembers = document.querySelectorAll('.team-member');
    
    // Loop through each team member and add click event
    teamMembers.forEach(function(member, index) {
      member.addEventListener('click', function() {
        modal.style.display = "block";
        modalText.innerHTML = teamMemberText[index]; // Set modal text based on index
      });
    });
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', function() {
      modal.style.display = "none";
    });
    
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });

//playbutton hover
const start1 = document.querySelector('.start1'),
start2 = document.querySelector('.start2'),
start3 = document.querySelector('.start3'),
start4 = document.querySelector('.start4'),
start5 = document.querySelector('.start5'),
image1 = document.querySelector('.image1'),
image2 = document.querySelector('.image2'),
image3 = document.querySelector('.image3'),
image4 = document.querySelector('.image4'),
image5 = document.querySelector('.image5');

image1.addEventListener("mouseover", () => {
start1.classList.add('start-block');
});

image1.addEventListener("mouseleave", () => {
start1.classList.remove('start-block');
});

image2.addEventListener("mouseover", () => {
start2.classList.add('start-block');
});

image2.addEventListener("mouseleave", () => {
start2.classList.remove('start-block');
});

image3.addEventListener("mouseover", () => {
start3.classList.add('start-block');
});

image3.addEventListener("mouseleave", () => {
start3.classList.remove('start-block');
});

image4.addEventListener("mouseover", () => {
start4.classList.add('start-block');
});

image4.addEventListener("mouseleave", () => {
start4.classList.remove('start-block');
});

image5.addEventListener("mouseover", () => {
start5.classList.add('start-block');
});

image5.addEventListener("mouseleave", () => {
start5.classList.remove('start-block');
});

const metacontent = document.querySelector('.metacontent'),
            metabutton = document.querySelector('.metabutton');

metabutton.addEventListener("click", ()=> {
  metacontent.classList.add('block');
  metacontent.classList.remove('metacontentblock');
});



const blinkvoice = document.querySelector('.homelink'); //a
            logo = document.querySelector('.logodefault'); //img
            logoHover = document.querySelector('.logohover');

logo.addEventListener("mouseover", () => {
  logoHover.classList.remove('logohover');
  logo.classList.add('logohover');
});

logoHover.addEventListener("mouseleave", () => {
  logoHover.classList.add('logohover');
  logo.classList.remove('logohover');
});

/* if (!blinkvoice.classList.contains('active')){
  blinkvoice.innerHTML = '<img src="/img/logo.png" class="logo"></img>';
};

if (blinkvoice.classList.contains('active')){
  blinkvoice.innerHTML = '<img src="/img/logoHover.png" class="logo"></img>';
}; */