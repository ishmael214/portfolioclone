const showProjects = document.querySelector("section p");
const wrap = document.querySelector(".wrap");
const video = document.querySelector("video");
let overlay = null;
let activeForm = null;

showProjects.addEventListener('click', () => {
    video.style.filter = `brightness(35%)`;
    wrap.innerHTML = 
    `
    <div class ="form" id = "1">
                <button data-close-button class="close-button">&times;</button>
                    <div class="summaryvid">
                        <video src="clonevid.mp4" autoplay muted loop></video>
                    </div>
                    <div class="summary">
                        <p>
                            Building this Amazon clone really strengthened my understanding of React and Redux.
                            Not only does it look similar to Amazon's website, I was also able to implement a 
                            login & registration with user authentication via firebase, and handle payment processing
                            via stripe and a backend server.
                        </p>
                    </div>
    </div>

            <div class ="form" id = "2">
            <button data-close-button class="close-button">&times;</button>
                <div class="summaryvid">
                    <video src="theproj.mp4" autoplay muted loop></video>
                </div>
                <div class="summary">
                    <p>
                        Building this project gave me a strong, well-needed foundation in React and Redux.
                        It was also this project that taught me the importance of planning out the architecture 
                        of a website as well as writing neat and organized code.
                        In addition to that, throughout building this project I learned and exercised the
                        ability to store data in firebase, authenticate user data, and integrate stripe
                        payments.

                    </p>
                </div>
        </div>

        <div class ="form" id = "3">
            <button data-close-button class="close-button">&times;</button>
                <div class="summaryvid">
                    <video src="realestatevid.mp4" autoplay muted loop></video>
                </div>
                <div class="summary">
                    <p>I created this static website to display my ability to create clean, professional design for client's websites.</p>
                </div>
        </div>
          
          
          <div id="overlay"></div>

    <div class="subProjectContainer">
            <div class="projects">
            <img src="amazon.png">
            <div class="options">
                <h4 data-login-target="#login" class= "login" data-id="1" >View Desc</h4>
                <a href ="https://clone-37a95.web.app/" target="_blank"><h4>View Project</h4></a>
                <a href ="https://github.com/ishmael214/amazon-clone" target="_blank"><h4>View Code</h4></a>
                
            </div> 
            <p>Amazon Clone </p> 
                
        </div>
        <!-- WHEN U ADD JAVASCRIPT MAKE SURE TO LOWER BRIGHTNESS OF BACKGROUND VID -->
        <div class="projects">
            <img src="ecommerce.jpg">
            <div class="options">
                <h4 data-login-target="#login" class= "login" data-id="2" >View Desc</h4>
                <a href ="https://ecommerce-sto.web.app/" target="_blank"><h4>View Project</h4></a>
                <a href ="https://github.com/ishmael214/ecommerceproj" target="_blank"><h4>View Code</h4></a>
                
            </div> 
            <p>Ecommerce Store</p>    
        </div>

        <div class="projects">
            <img src="newestate.jpg">
            <div class="options">
                <h4 data-login-target="#login" class= "login" data-id="3" >View Desc</h4>
                <a href ="https://ishmael214.github.io/realestateproject.io/" target="_blank"><h4>View Project</h4></a>
                <a href ="https://github.com/ishmael214/realestateproject.io" target="_blank"><h4>View Code</h4></a>
                
            </div> 
            <p>Real Estate Site</p>      
        </div>

                    
    </div>
    `;

    setTimeout(function(){
        initApp();
    }, 1000);

    function initApp(){
        const loginButtons = document.querySelectorAll(".login");
        const closeButtons = document.querySelectorAll('[data-close-button]');
        overlay = document.getElementById('overlay')
        

        console.log(loginButtons);

        //add event listener to all login buttons
        Array.from(loginButtons).forEach((x) => {
            x.addEventListener('click', handleClick);
        });

        //add event listener to all close buttons
        Array.from(closeButtons).forEach((x) => {
            x.addEventListener('click', closeModal);
        })

        overlay.addEventListener('click', closeModal);
    }   

    const handleClick = (event) => {
        const clickTarget = event.target;
        const modalId = clickTarget.dataset.id;
        openModal(modalId);
    }

    function closeModal(event){
        const modalForm = document.getElementById(activeForm);
        modalForm.classList.remove('active');
        overlay.classList.remove('active');
        activeForm = null;
    }


    function openModal(modalId) {
        if (!modalId) return;
        activeForm = modalId;
        const modalForm = document.getElementById(modalId);
        modalForm.classList.add('active');
        overlay.classList.add('active');    
    }
})

