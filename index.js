
 fetch ('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=fNj7i8N6BNJ3jfJKwISX76zB5uPzmDkY')
 .then (response => response.json())
 .then (data => {
    console.log(data.results);
    const main = document.getElementById ("main");
    const content = document.querySelector("#content");
    let mainContent = ``;
    let elements = ``;
    for (let i =0; i < data.results.length; i++) {
        
        let element = `
        <div class="element">
        <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column">
        <div class="style1 mt-4 m-5 d-flex flex-row justify-content-start ">
            <p class="style1">${data.results[i].byline} in </p>
            <p class="style1">${data.results[i].item_type} * </p>
            <p class="d-flex flex-row">${data.results[i].published_date}</p>
        </div>
        <div class="click style2 mt-0 m-5 d-flex justify-content-start">
            <h4 id="click-${i}" class=" links click link-secondary link-offset-2 link-underline-opacity-0">${data.results[i].title}</h4>
        </div>
        <div class="style3 mt-0 m-5 d-flex justify-content-start">
            <p>${data.results[i].abstract}</p>
        </div>
        <div class="style4 mt-0 m-5 d-flex flex-row justify-content-start">
            <div>
                <button type="button" class="btn btn-secondary btn-sm">${data.results[i].section}</button>
            </div>
           
            <p class="style1">${data.results[i].update_date} * </p>
            <p class="style1">${data.results[i].geo_facet}</p>
            <div class="d-flex flex-row justify-content-end">
                <div class="m-1"><img class="mt-1 m-2 d-flex flex-row justify-content-end " src="./src/icon.png" width = "24px" height="24px"></div>
                <div class="m-1"><img class="mt-1 m-2 d-flex flex-row justify-content-end" src="./src/icon.png" width = "24px" height="24px"></div>
                <div class="m-1"><img class="mt-1 m-2 d-flex flex-row justify-content-end" src="./src/icon.png" width = "24px" height="24px"></div>
            </div>
            
        </div>
    </div>
        <div class="mt-4 m-5 justify-content-center justify-content-md-end">
            <img class="d-flex justify-content-center justify-content-md-end rounded float-end"  src="./src/0.png" width = "295px" height="295px">
        </div>
    </div>
</div>
</div>
        `;

        elements += element;
        content.innerHTML += element;

    }
    mainContent = `  <h3 class="t-5 mt-4 m-5 d-flex flex-row justify-content-start">Hello, world!</h3>
    <div id="content">${elements}</div> 
    `;

    let currentIndex = 0;

    main.addEventListener("click", (event) => {
        if (event.target.classList.contains("links")) {
            currentIndex = +(event.target.id.split("-")[1]);
            let newContent = `<div>
            <div class="mt-4 m-5 d-flex justify-content-start">
                <img class="arrow-right" src="./src/arrow.png" width = "25px" height="25px">
            </div>
            
                <div class="style7 mt-0 m-5">
                    <p class="d-flex justify-content-start flex-row">${data.results[currentIndex].byline}</p>
                    <div class="d-flex justify-content-end flex-row">
                        <img id="d-flex justify-content-end" src="./src/facebook.png" width = "25px" height="25px">
                        <img id="d-flex justify-content-end" src="./src/link.png" width = "25px" height="25px">
                        <img id="d-flex justify-content-end" src="./src/twitter.png" width = "25px" height="25px">
                    </div>
                </div>
                <div class="style8 m-5 d-flex flex-row">
                    <p class="style8">${data.results[currentIndex].published_date} * </p>
                    <p class="style8">${data.results[currentIndex].updated_date} * </p>
                    <p class="style8">${data.results[currentIndex].geo_facet}</p>
                </div>
                
            <div class="mt-4 m-5">
                <h4>${data.results[currentIndex].title}</h4>
                <p>${data.results[currentIndex].section}</p>
                <div class="mt-4 m-5 d-flex justify-content-start">
                    <img src="./src/0.png" width = "1120px" height="480px">
                </div>
                <h3>${data.results[currentIndex].subsection}</h3>
                <p>${data.results[currentIndex].abstract}</p>
            </div>
        </div> 
                `;

                main.innerHTML = newContent;
        } else if (event.target.classList.contains("arrow-right")) {
            main.innerHTML = mainContent;
        }
    });

 }).catch(e => console.log(e));
    
