//DOC VARIABLES//
let currentLogo;
let currentProjects;
let currentProject = [];
let currentCapability = [];
let legendTables = [];
//DOC VARIABLES//

//DUMMY DATA//
const layers = ["atom", "cat", "top"];
const projectData = [
    {
        "project" : "Alpha",
        "partners" : [
            "Runolfsdottir-Legros",
            "VonRueden Inc",
            "Gibson-Gleichner",
            "Rau, Collier and Hirthe",
            "McDermott and Sons",
            "Digital Inc",
            "Kozey and Sons"
        ],
        "description": "A description of the selected project goes here. If you look on the map you can see all the members that participate in this project are highlighted."
    },
    {
        "project" : "Beta",
        "partners" : [
            "Digital Inc",
            "Blanda-Lowe",
            "Ledner, Lehner and Herzog",
            "Jacobi, Hermann and Kling",
            "Kozey-Boyle",
            "Kunde, Brekke and Douglas",
            "O'Conner-Hodkiewicz"
        ],
        "description": "A description of the selected project goes here. If you look on the map you can see all the members that participate in this project are highlighted."
    },
]
const capabilityData =[
    { "name": "Auditing",
        "enablers": [
            "Yost-Reinger",
            "Koss and Sons",
            "Hamill-Cummings",
            "Labadie LLC",
            "Ruecker and Sons",
            "Jerde LLC"
        ],
        "description": "A description of the selected capability goes here. If you look on the map you can see all the members that can also enable this capability are highlighted."
    },
    {
        "name": "Cloud Services",
        "enablers": [
            "Cummings, Kutch and VonRueden",
            "Luettgen-West",
            "Monahan, Kshlerin and Harvey",
            "Hackett-Aufderhar",
        ],
        "description": "A description of the selected capability goes here. If you look on the map you can see all the members that can also enable this capability are highlighted."
    },
    {
        "name": "Finance",
        "enablers": [
            "Jerde LLC",
            "Koelpin-Ankunding",
            "Weissnat, Breitenberg and Jones",
            "O'Conner, Homenick and Legros",
            "Hermiston, Funk and Beier"
        ],
        "description": "A description of the selected capability goes here. If you look on the map you can see all the members that can also enable this capability are highlighted."
    },
    {
        "name": "Solutions",
        "enablers": [
            "Digital Inc",
            "Bosco-Tromp",
            "Bergnaum-Grady",
            "Dickens Group",
            "Blick, Murazik and Halvorson"
        ],
        "description": "A description of the selected capability goes here. If you look on the map you can see all the members that can also enable this capability are highlighted."
    }
    ,{
        "name": "Design",
        "enablers": [
            "Blanda-Lowe",
            "Waters LLC",
            "Schaden, Wolf and Kertzmann",
            "O'Conner-Hodkiewicz"
        ],
        "description": "A description of the selected capability goes here. If you look on the map you can see all the members that can also enable this capability are highlighted."
    }
]
const dataset = {
    "name": "Corporate Partnerships Ecosystem",
    "description": "Here you would find a description of the Partnership ecosystem. This is the top level of the ecosystem, an umbrella for all the other groups",
    "children": [
        {
            "name": "Corporate Organizations",
            "description": "Here you would find a description of this particular organization",
            "children": 
                [
                    {"name": "Digital Inc","description": "Here you would find a description of this single entity", "intensity": 9, "projects":["Alpha", "Beta"]},
                    {"name":"Runolfsdottir-Legros","description": "Here you would find a description of this single entity", "intensity":7, "projects": ["Alpha"]},
                    {"name":"Hamill-Cummings","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Ernser and Sons","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Collier, Conn and Buckridge","description": "Here you would find a description of this single entity", "intensity":6},
                    {"name":"Blanda LLC","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Stokes LLC","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Labadie LLC","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Schaefer, Becker and Kirlin","description": "Here you would find a description of this single entity", "intensity":1},
                    {"name":"Jerde LLC","description": "Here you would find a description of this single entity", "intensity":10},
                    {"name":"Willms, Weissnat and Hickle","description": "Here you would find a description of this single entity", "intensity":6},
                    {"name":"Blanda-Lowe","description": "Here you would find a description of this single entity", "intensity":4, "projects":["Beta"]},
                    {"name":"Cummings, Kutch and VonRueden","description": "Here you would find a description of this single entity", "intensity":9},
                    {"name":"Bosco-Tromp","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Ruecker and Sons","description": "Here you would find a description of this single entity", "intensity":1},
                    {"name":"Goyette-Hoeger","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Bahringer Inc","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Weissnat, Breitenberg and Jones","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Ledner, Lehner and Herzog","description": "Here you would find a description of this single entity", "intensity":2, "projects":["Beta"]},
                ]
        },
        {
            "name": "Not for Profit",
            "description": "Here you would find a description of this particular organization",
            "children":
                [
                    {"name":"Durgan LLC","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Bechtelar-Sipes","description": "Here you would find a description of this single entity", "intensity":10},
                    {"name":"Brekke, Prosacco and Wintheiser","description": "Here you would find a description of this single entity", "intensity":1},
                    {"name":"VonRueden Inc","description": "Here you would find a description of this single entity", "intensity":1, "projects":["Alpha"]},
                    {"name":"Powlowski, Borer and Hettinger","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Auer-Wilkinson","description": "Here you would find a description of this single entity", "intensity":1},
                    {"name":"Koss, Powlowski and Beer","description": "Here you would find a description of this single entity", "intensity":9},
                    {"name":"Steuber, Russel and Hansen","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Weissnat-Koelpin","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Kris, Kovacek and Stokes","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Erdman Inc","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Lind, Windler and Wolf","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Howe Group","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Koelpin-Ankunding","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Waters LLC","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Carter and Sons","description": "Here you would find a description of this single entity", "intensity":9},
                    {"name":"Luettgen-West","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Roberts, Hickle and Rodriguez","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Lesch-Schimmel","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Bruen-Hoeger","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Reichel-Swift","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Raynor-Goodwin","description": "Here you would find a description of this single entity", "intensity":6},
                    {"name":"Labadie and Sons","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Auer Inc","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Gibson-Gleichner","description": "Here you would find a description of this single entity", "intensity":7, "projects":["Alpha"]},
                    {"name":"Jacobi, Hermann and Kling","description": "Here you would find a description of this single entity", "intensity":9, "projects":["Beta"]}
                ]
        },
        {
            "name": "Expert Groups",
            "description": "Here you would find a description of this particular organization",
            "children": 
                [
                    {"name":"Yost-Reinger","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Ruecker, Langosh and Boyer","description": "Here you would find a description of this single entity", "intensity":10},
                    {"name":"White and Sons","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Thompson-Robel","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Effertz-Kohler","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Lindgren-Reinger","description": "Here you would find a description of this single entity", "intensity":1},
                    {"name":"Rau, Collier and Hirthe","description": "Here you would find a description of this single entity", "intensity":8, "projects":["Alpha"]},
                    {"name":"Monahan, Kshlerin and Harvey","description": "Here you would find a description of this single entity", "intensity":6},
                    {"name":"Stamm-Beier","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Thiel-Boyer","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Koss and Sons","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Shanahan-Harvey","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Kunze and Sons","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Jenkins Inc","description": "Here you would find a description of this single entity", "intensity":6},
                    {"name":"Kozey-Boyle","description": "Here you would find a description of this single entity", "intensity":5, "projects":["Beta"]},
                    {"name":"Turner and Sons","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Carter-Shanahan","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Mann-Padberg","description": "Here you would find a description of this single entity", "intensity":9},
                    {"name":"Bergnaum-Grady","description": "Here you would find a description of this single entity", "intensity":9},
                    {"name":"Dach LLC","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Robel-Metz","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Lueilwitz Inc","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"West LLC","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Stehr-Gutkowski","description": "Here you would find a description of this single entity", "intensity":9},
                    {"name":"Runte-Beer","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Beahan Group","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Jakubowski-Eichmann","description": "Here you would find a description of this single entity", "intensity":10},
                    {"name":"Ankunding, Aufderhar and Gusikowski","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Jerde, Heathcote and Konopelski","description": "Here you would find a description of this single entity", "intensity":10},
                ]
        },
        {
            "name": "Startups",
            "description": "Here you would find a description of this particular organization",
            "children": 
                [
                    {"name":"Sipes-Blick","description": "Here you would find a description of this single entity", "intensity":9},
                    {"name":"Ullrich-Kihn","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Schamberger, Franecki and Luettgen","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Keeling-Kiehn","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Beahan, Mann and Doyle","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Kihn-Jerde","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Kilback Inc","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Turner, Abbott and Walsh","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Dickens Group","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Romaguera-Smitham","description": "Here you would find a description of this single entity", "intensity":1},
                    {"name":"McDermott and Sons","description": "Here you would find a description of this single entity", "intensity":9, "projects":["Alpha"]},
                    {"name":"Bosco, Hamill and Tillman","description": "Here you would find a description of this single entity", "intensity":10},
                    {"name":"Adams Inc","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Schulist Group","description": "Here you would find a description of this single entity", "intensity":6},
                    {"name":"Veum-Lemke","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Grimes Group","description": "Here you would find a description of this single entity", "intensity":1},
                    {"name":"Heathcote-Russel","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Morar, Ratke and Hudson","description": "Here you would find a description of this single entity", "intensity":10},
                    {"name":"Hane Group","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"O'Conner, Homenick and Legros","description": "Here you would find a description of this single entity", "intensity":10},
                    {"name":"Gleichner, Davis and Barton","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Legros-McKenzie","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Parker, Grady and Hilll","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Volkman-Franecki","description": "Here you would find a description of this single entity", "intensity":9},
                    {"name":"Cremin LLC","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Hackett-Aufderhar","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Treutel LLC","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Schinner and Sons","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Schaden, Wolf and Kertzmann","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"O'Reilly, Miller and Kuhic","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"O'Hara-Weber","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Fadel Inc","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Legros, Johnson and Bergnaum","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Krajcik LLC","description": "Here you would find a description of this single entity", "intensity":1},
                    {"name":"Dibbert-Leannon","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Boehm and Sons","description": "Here you would find a description of this single entity", "intensity":10},
                    {"name":"Mitchell, Homenick and O'Connell","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Farrell, Kreiger and Weimann","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Crooks, Bailey and Wolf","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Mills-Metz","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Crooks, Reinger and McKenzie","description": "Here you would find a description of this single entity", "intensity":3},
                ]
        },
        {
            "name": "Industy Partners",
            "description": "Here you would find a description of this particular organization",
            "children":
                [
                    {"name":"Goodwin, Kerluke and Jakubowski","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Rosenbaum, Gutkowski and Schuster","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Hauck, Grant and Ledner","description": "Here you would find a description of this single entity", "intensity":1},
                    {"name":"Hansen and Sons","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Dicki, Kiehn and Boyer","description": "Here you would find a description of this single entity", "intensity":9},
                    {"name":"Kozey and Sons","description": "Here you would find a description of this single entity", "intensity":6, "projects":["Alpha"]},
                    {"name":"Brakus, Lebsack and Reinger","description": "Here you would find a description of this single entity", "intensity":6},
                    {"name":"Skiles, Stark and Wisoky","description": "Here you would find a description of this single entity", "intensity":3},
                    {"name":"Romaguera, Abernathy and Konopelski","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Wehner and Sons","description": "Here you would find a description of this single entity", "intensity":5},
                    {"name":"Hermiston, Funk and Beier","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Kunde, Brekke and Douglas","description": "Here you would find a description of this single entity", "intensity":9, "projects":["Beta"]},
                    {"name":"Shanahan, Dooley and Harvey","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Smitham, Hermann and Gibson","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Ebert, Kerluke and Weissnat","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Paucek Group","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Hickle LLC","description": "Here you would find a description of this single entity", "intensity":6},
                    {"name":"O'Conner-Hodkiewicz","description": "Here you would find a description of this single entity", "intensity":6, "projects":["Beta"]},
                    {"name":"Blick, Murazik and Halvorson","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Cormier LLC","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Johnson-Heaney","description": "Here you would find a description of this single entity", "intensity":8},
                    {"name":"Johns, Rogahn and Roberts","description": "Here you would find a description of this single entity", "intensity":1},
                    {"name":"Lueilwitz, Erdman and O'Connell","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Adams-Vandervort","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Schmitt-Brakus","description": "Here you would find a description of this single entity", "intensity":1},
                ]
        },
        {
            "name": "Technology Innovators",
            "description": "Here you would find a description of this particular organization",
            "children":
                [
                    {"name":"Leannon, Grimes and Harris","description": "Here you would find a description of this single entity", "intensity":10},
                    {"name":"Metz-Willms","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Frami, Lesch and Nicolas","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Kuhn-Senger","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Leannon-Doyle","description": "Here you would find a description of this single entity", "intensity":6},
                    {"name":"Ryan, Koss and Reinger","description": "Here you would find a description of this single entity", "intensity":7},
                    {"name":"Willms-Halvorson","description": "Here you would find a description of this single entity", "intensity":4},
                    {"name":"Kub, Ratke and Brown","description": "Here you would find a description of this single entity", "intensity":2},
                    {"name":"Padberg-Ledner","description": "Here you would find a description of this single entity", "intensity":10},
                    {"name":"O'Conner Inc","description": "Here you would find a description of this single entity", "intensity":6},
                    {"name":"Hodkiewicz, Schmeler and Gorczany","description": "Here you would find a description of this single entity", "intensity":2}
                ]
        }
    ]};
//DUMMY DATA//

//CALIBRATING VARIABLES//
let w = 900;
let h = w;
let ratio = w/900;
///

//NOT D3//
//Global Handlers
const assign = d=>{
    switch(d.depth){
        case 2:
            //Bottom Nodes: Entities//
            let parent = d.parent.data.name
            switch(parent){
                case "Corporate Organizations":
                    return "atom-one";
                case "Not for Profit":
                    return "atom-two";
                case "Expert Groups":
                    return "atom-three";
                case "Industy Partners":
                    return "atom-four";
                case "Startups":
                    return "atom-five";
                case "Technology Innovators":
                    return "atom-six";
            }
        case 1:
            //Middle Nodes: Categories//
            return "cat";
        case 0:
            //Top Node: Ecosystem//
            return "top";
    }
}
const cleanUp = ()=>{
    removeButtons();
    removeCapabilities();
    removeCapabilityDisplay();
}
function handleClick(d){
    removeDetails();
    let id = d3.select(this).attr("id");
    document.getElementById("entity-name").innerText = `Entity: ${d.data.name}`;
    //Check if node has children
    if(d.parent != null){
        //Group nodes
        if(d.depth==1){
            //Clean up
            cleanUp();
            document.getElementById("connections").style.display="none";
            document.getElementById("entity-group").style.display="none";
            document.getElementById("project-title").style.display="none";
            document.getElementById("entity-group").innerText = '';
            document.getElementById("project-title").innerText = '';
            //Details
            document.getElementById("logo").src="./group.png"
            document.getElementById("capabilities-title").innerText = `${d.data.name} Capabilities`;
            document.getElementById("details").innerText = `${d.data.description}`;
           groupCapability(d);
        }
        //Entity nodes
        else{
            //Clean up
            cleanUp();
            document.getElementById("connections").style.display="none";
            document.getElementById("project-title").style.display="none";
            //Details
            document.getElementById("logo").src="./unit.png"
            if(d.data.projects){
                document.getElementById("connections").style.display="inline";
                document.getElementById("project-title").style.display="inline";
                document.getElementById("project-title").innerText = `Projects Involving ${d.data.name}`;
                generateProjects(d);
            }
            document.getElementById("entity-group").style.display="inline";
            document.getElementById("entity-group").innerText = `Category: ${d.parent.data.name}`;
            document.getElementById("capabilities-title").innerText = `${d.data.name} Capabilities`;
            document.getElementById("details").innerText = `${d.data.description}`;
            entityCapability(d);
        }
    }
    //Ecosystem node
    else{
        //Clean up
        cleanUp();
        document.getElementById("connections").style.display="none";
        document.getElementById("entity-group").style.display="none";
        document.getElementById("project-title").style.display="none";
        document.getElementById("entity-group").innerText = '';
        document.getElementById("project-title").innerText = '';
        //Details
        document.getElementById("logo").src="./eco.png"
        document.getElementById("capabilities-title").innerText = 'Ecosystem Capabilities';
        document.getElementById("details").innerText = `${d.data.description}`;
        ecosystemCapability();
    }
}
function handleOver(){
    d3.select(this)
        .attr("stroke", "#e3ff00")
        .classed('circle-vis', false);
}
function handleOut(){
    d3.select(this)
        .attr("stroke", "")
        .classed("circle-vis", true);
}
//Project View Handlers
const removeButtons = ()=>{
    let container = document.getElementById("project-container");
    while(container.firstChild){
        container.firstChild.remove();
    }
}
function generateProjects(d){
    removeButtons();
    if(d.data.projects){
        currentProjects = d.data.projects;
        let container = document.getElementById("project-container");
        container.style.display = "block";
        let newButton;
        projectData.forEach(el => {
            if(currentProjects.includes(el.project)){
                newButton = document.createElement("span");
                newButton.classList.add("button", "is-small", "project-button")
                newButton.innerText = el.project;
                container.append(newButton);
            }
        });
        let buttons = document.querySelectorAll(".project-button")
        buttons.forEach(el => el.addEventListener("click", projectDetails))
    }
    else{
        container.style.display = "none";
    }
}
function projectDetails(){
    removeDetails();
    removeCapabilityDisplay();
    document.getElementById("logo").src="./project.png"
    let selection;
    projectData.forEach(el=>{
        if(el.project == this.innerText){
            let target;
            document.getElementById("details").innerText=el.description
            el.partners.forEach(partner=>{
                target = d3.select(document.getElementsByName(partner)[0]);
                target.attr("stroke", "#e3ff00")
                .classed('circle-vis', false);
                currentProject.push(target);
            })
        }
    })
    document.getElementById("entity-group").innerText = `Project: ${this.innerText}`;
}
function removeDetails(){
    currentProject.forEach(element => {
        element.attr("stroke", "")
            .classed('circle-vis', true);
    });
    currentProject = []
}
//Capability View Handlers
const removeCapabilities = ()=>{
    let container = document.getElementById("capabilities-container");
    while(container.firstChild){
        container.firstChild.remove();
    }
}
function ecosystemCapability(){
    let container = document.getElementById("capabilities-container");
    removeCapabilities();
    if(capabilityData){
        capabilityData.forEach(el =>{
            newButton = document.createElement("span");
            newButton.classList.add("button", "is-small", "capability-button")
            newButton.innerText = el.name;
            container.append(newButton);
        })
        let buttons = document.querySelectorAll(".capability-button")
        buttons.forEach(el => el.addEventListener("click", displayCapability))
    }
    else{
        container.style.display = "none";
    }
}
function groupCapability(d){
    removeCapabilityDisplay();
    let container = document.getElementById("capabilities-container");
    removeCapabilities();
    let groupCaps = [];
    capabilityData.forEach(capability=>{
        d.children.forEach(child=>{
            if(capability.enablers.includes(child.data.name)){
                if(!groupCaps.includes(capability.name)){
                    groupCaps.push(capability.name)
                }
            }
        })
    })
    if(groupCaps){
        groupCaps.forEach(el =>{
            newButton = document.createElement("span");
            newButton.classList.add("button", "is-small", "capability-button")
            newButton.innerText = el;
            container.append(newButton);
        })
        let buttons = document.querySelectorAll(".capability-button")
        buttons.forEach(el => el.addEventListener("click", displayCapability))
    }
    else{
        container.style.display = "none";
    }
}
function entityCapability(d){
    let container = document.getElementById("capabilities-container");
    capabilityData.forEach(capability => {
        for(enabler of capability.enablers){
            if(enabler == d.data.name){
                newButton = document.createElement("span");
                newButton.classList.add("button", "is-small", "capability-button")
                newButton.innerText = capability.name;
                container.append(newButton);
            }
        }
    })
    let buttons = document.querySelectorAll(".capability-button")
    buttons.forEach(el => el.addEventListener("click", displayCapability))
}
function displayCapability(){
    document.getElementById("logo").src="./tool.png"
    document.getElementById("entity-group").style.display="inline"
    let capability;
    capabilityData.forEach(el=>{
        if(el.name == this.innerText){
            capability = el;
        }
    })
    //clean up
    removeDetails();
    removeCapabilityDisplay();
    //display
    document.getElementById('entity-group').innerText=`Capability: ${capability.name}`;
    document.getElementById("details").innerText=capability.description
    let target;
    capability.enablers.forEach(el=>{
        target = d3.select(document.getElementsByName(el)[0])
        target.attr("stroke", "#e3ff00")
            .classed('circle-vis', false);
            currentCapability.push(target);
    })
}
function removeCapabilityDisplay(){
    currentCapability.forEach(element => {
        element.attr("stroke", "")
            .classed('circle-vis', true);
    });
    currentCapability = []
}
//NOT D3//

//LAYOUT//
let g = d3.select("#ecosys")
        .attr('width', w)
        .attr('height', h)
        .select('g');

let eco = d3.pack()
        .size([w-50, h-50])
        .padding(2);

let root = d3.hierarchy(dataset)
        .sum( d=>{return d.intensity;})
        .sort((a, b) => b.value - a.value);
eco(root);


//CIRCLE PACK//
let nodes = d3.select("svg g")
    .selectAll('g')
    .data(root.descendants())
    .enter()
    .append('g')
    .attr('transform', d=>{return 'translate(' + [d.x+25, d.y+25] + ')'})
    .attr("text-anchor", "middle");

//DRAW CIRCLES
nodes.append('circle')
    .attr('r', d=>{return d.r})
    .attr('class',d=>{
        return assign(d);})
    .classed('circle-vis', true)
    .attr('id', (d,i)=>{
        return i;
    })
    .on("click", handleClick)
    .on("mouseover", handleOver)
    .on("mouseout", handleOut)
    .attr('stroke-width', d=>(d.r/15))
    .attr("name", d=>d.data.name);

//SCALE FOR TEXT//
let max = 0;
let circles = d3.selectAll("circle")["_groups"][0]
for(let el of circles){
    if(el.r["animVal"]["value"] > max){
        max = el.r["animVal"]["value"]
    }
}
let min = max;
for(let el of circles){
    if(el.r["animVal"]["value"] < min){
        min = el.r["animVal"]["value"]
    }
}
let scale = d3.scaleLinear()
        .domain([min, max])
        .range([10,60]);
//SCALE//

//LEGEND CREATION//
let pages = document.getElementById("pages")
let tables = document.getElementById("legends");

let groups = dataset.children;
let current;
let newRow;
let newIn;
let newPage;
let newBody;
let newTable;

const activate = function(){
    //ACTIVATE TABS
    let tabs = document.getElementsByClassName("tableTab");
    for(tab in tabs){
        if(tabs[tab].classList){
            tabs[tab].classList.toggle("is-active", false);
        }
    }
    this.classList.toggle("is-active", true);
    
    //ACTIVATE TABLE
    for(table in legendTables){
        legendTables[table].style.display = "none";
    }
    let org = this.id.replace("Tab", "Id");
    document.getElementById(org).style.display ='block';
}

//LOOP FOR LEGEND CREATION
for(group in groups){
    current = groups[group].name;

    //CREATES A TAB FOR EACH ORGANIZATION
    newPage = document.createElement("li");
    newPage.classList.add("tableTab");
    if(group == 0){
        newPage.classList.add("is-active");
    }
    newPage.id = `${current.replace(/ /g, '')}Tab`;
    newPage.addEventListener("click", activate);
    newIn = document.createElement("a");
    newIn.innerText = parseInt(group)+1;
    newPage.append(newIn);
    pages.append(newPage);

    //TABLES FOR TABS
    newTable = document.createElement("table");
    newTable.id = `${current.replace(/ /g, '')}Id`;
    newTable.classList.add("table", "is-striped", "is-fullwidth");
    if(group == 0){
        newTable.style.display = "block";
    }
    else{
        newTable.style.display="none";
    }
    tables.append(newTable);
    legendTables.push(newTable);

    //HEADINGS FOR TABLES
    let newHeader = document.createElement("thead");
    let newHrow = document.createElement("th");
    newHrow.innerText = current;
    newHrow.style.fontSize = "large";
    newHeader.append(newHrow);
    newTable.append(newHeader);

    //BODIES FOR TABLES
    newBody = document.createElement("tbody")
    newBody.style.display = "block";
    newBody.style.height = `${w-230}px`;
    newBody.style.overflowY = "scroll";
    newTable.append(newBody);

    //ROWS FOR BODIES
    groupEntities = groups[group].children;
    for(entity in groupEntities){
        newRow = document.createElement("tr");
        newIn = document.createElement("td");
        newIn.innerText = groupEntities[entity].name;
        newRow.append(newIn);
        newBody.append(newRow);
    }
}
