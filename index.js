//DOC VARIABLES//
let currentLogo;
let currentProjects;
let currentProject = [];
let currentCapability = [];
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
    "children": [
        {
            "name": "Corporate Organizations",
            "children": 
                [
                    {"name": "Digital Inc", "intensity": 9, "projects":["Alpha", "Beta"]},
                    {"name":"Runolfsdottir-Legros","intensity":7, "projects": ["Alpha"]},
                    {"name":"Hamill-Cummings","intensity":3},
                    {"name":"Ernser and Sons","intensity":5},
                    {"name":"Collier, Conn and Buckridge","intensity":6},
                    {"name":"Blanda LLC","intensity":8},
                    {"name":"Stokes LLC","intensity":5},
                    {"name":"Labadie LLC","intensity":7},
                    {"name":"Schaefer, Becker and Kirlin","intensity":1},
                    {"name":"Jerde LLC","intensity":10},
                    {"name":"Willms, Weissnat and Hickle","intensity":6},
                    {"name":"Blanda-Lowe","intensity":4, "projects":["Beta"]},
                    {"name":"Cummings, Kutch and VonRueden","intensity":9},
                    {"name":"Bosco-Tromp","intensity":3},
                    {"name":"Ruecker and Sons","intensity":1},
                    {"name":"Goyette-Hoeger","intensity":3},
                    {"name":"Bahringer Inc","intensity":3},
                    {"name":"Weissnat, Breitenberg and Jones","intensity":7},
                    {"name":"Ledner, Lehner and Herzog","intensity":2, "projects":["Beta"]},
                ]
        },
        {
            "name": "Not for Profit",
            "children":
                [
                    {"name":"Durgan LLC","intensity":8},
                    {"name":"Bechtelar-Sipes","intensity":10},
                    {"name":"Brekke, Prosacco and Wintheiser","intensity":1},
                    {"name":"VonRueden Inc","intensity":1, "projects":["Alpha"]},
                    {"name":"Powlowski, Borer and Hettinger","intensity":5},
                    {"name":"Auer-Wilkinson","intensity":1},
                    {"name":"Koss, Powlowski and Beer","intensity":9},
                    {"name":"Steuber, Russel and Hansen","intensity":2},
                    {"name":"Weissnat-Koelpin","intensity":2},
                    {"name":"Kris, Kovacek and Stokes","intensity":2},
                    {"name":"Erdman Inc","intensity":7},
                    {"name":"Lind, Windler and Wolf","intensity":5},
                    {"name":"Howe Group","intensity":8},
                    {"name":"Koelpin-Ankunding","intensity":7},
                    {"name":"Waters LLC","intensity":5},
                    {"name":"Carter and Sons","intensity":9},
                    {"name":"Luettgen-West","intensity":3},
                    {"name":"Roberts, Hickle and Rodriguez","intensity":5},
                    {"name":"Lesch-Schimmel","intensity":3},
                    {"name":"Bruen-Hoeger","intensity":8},
                    {"name":"Reichel-Swift","intensity":5},
                    {"name":"Raynor-Goodwin","intensity":6},
                    {"name":"Labadie and Sons","intensity":8},
                    {"name":"Auer Inc","intensity":4},
                    {"name":"Gibson-Gleichner","intensity":7, "projects":["Alpha"]},
                    {"name":"Jacobi, Hermann and Kling","intensity":9, "projects":["Beta"]}
                ]
        },
        {
            "name": "Expert Groups",
            "children": 
                [
                    {"name":"Yost-Reinger","intensity":5},
                    {"name":"Ruecker, Langosh and Boyer","intensity":10},
                    {"name":"White and Sons","intensity":7},
                    {"name":"Thompson-Robel","intensity":4},
                    {"name":"Effertz-Kohler","intensity":4},
                    {"name":"Lindgren-Reinger","intensity":1},
                    {"name":"Rau, Collier and Hirthe","intensity":8, "projects":["Alpha"]},
                    {"name":"Monahan, Kshlerin and Harvey","intensity":6},
                    {"name":"Stamm-Beier","intensity":5},
                    {"name":"Thiel-Boyer","intensity":8},
                    {"name":"Koss and Sons","intensity":2},
                    {"name":"Shanahan-Harvey","intensity":5},
                    {"name":"Kunze and Sons","intensity":8},
                    {"name":"Jenkins Inc","intensity":6},
                    {"name":"Kozey-Boyle","intensity":5, "projects":["Beta"]},
                    {"name":"Turner and Sons","intensity":7},
                    {"name":"Carter-Shanahan","intensity":4},
                    {"name":"Mann-Padberg","intensity":9},
                    {"name":"Bergnaum-Grady","intensity":9},
                    {"name":"Dach LLC","intensity":5},
                    {"name":"Robel-Metz","intensity":3},
                    {"name":"Lueilwitz Inc","intensity":4},
                    {"name":"West LLC","intensity":7},
                    {"name":"Stehr-Gutkowski","intensity":9},
                    {"name":"Runte-Beer","intensity":8},
                    {"name":"Beahan Group","intensity":3},
                    {"name":"Jakubowski-Eichmann","intensity":10},
                    {"name":"Ankunding, Aufderhar and Gusikowski","intensity":2},
                    {"name":"Jerde, Heathcote and Konopelski","intensity":10},
                ]
        },
        {
            "name": "Startups",
            "children": 
                [
                    {"name":"Sipes-Blick","intensity":9},
                    {"name":"Ullrich-Kihn","intensity":8},
                    {"name":"Schamberger, Franecki and Luettgen","intensity":4},
                    {"name":"Keeling-Kiehn","intensity":5},
                    {"name":"Beahan, Mann and Doyle","intensity":4},
                    {"name":"Kihn-Jerde","intensity":5},
                    {"name":"Kilback Inc","intensity":7},
                    {"name":"Turner, Abbott and Walsh","intensity":8},
                    {"name":"Dickens Group","intensity":3},
                    {"name":"Romaguera-Smitham","intensity":1},
                    {"name":"McDermott and Sons","intensity":9, "projects":["Alpha"]},
                    {"name":"Bosco, Hamill and Tillman","intensity":10},
                    {"name":"Adams Inc","intensity":4},
                    {"name":"Schulist Group","intensity":6},
                    {"name":"Veum-Lemke","intensity":5},
                    {"name":"Grimes Group","intensity":1},
                    {"name":"Heathcote-Russel","intensity":5},
                    {"name":"Morar, Ratke and Hudson","intensity":10},
                    {"name":"Hane Group","intensity":2},
                    {"name":"O'Conner, Homenick and Legros","intensity":10},
                    {"name":"Gleichner, Davis and Barton","intensity":5},
                    {"name":"Legros-McKenzie","intensity":7},
                    {"name":"Parker, Grady and Hilll","intensity":8},
                    {"name":"Volkman-Franecki","intensity":9},
                    {"name":"Cremin LLC","intensity":8},
                    {"name":"Hackett-Aufderhar","intensity":4},
                    {"name":"Treutel LLC","intensity":7},
                    {"name":"Schinner and Sons","intensity":5},
                    {"name":"Schaden, Wolf and Kertzmann","intensity":7},
                    {"name":"O'Reilly, Miller and Kuhic","intensity":8},
                    {"name":"O'Hara-Weber","intensity":8},
                    {"name":"Fadel Inc","intensity":5},
                    {"name":"Legros, Johnson and Bergnaum","intensity":3},
                    {"name":"Krajcik LLC","intensity":1},
                    {"name":"Dibbert-Leannon","intensity":5},
                    {"name":"Boehm and Sons","intensity":10},
                    {"name":"Mitchell, Homenick and O'Connell","intensity":7},
                    {"name":"Farrell, Kreiger and Weimann","intensity":7},
                    {"name":"Crooks, Bailey and Wolf","intensity":2},
                    {"name":"Mills-Metz","intensity":8},
                    {"name":"Crooks, Reinger and McKenzie","intensity":3},
                ]
        },
        {
            "name": "Industy Partners",
            "children":
                [
                    {"name":"Goodwin, Kerluke and Jakubowski","intensity":7},
                    {"name":"Rosenbaum, Gutkowski and Schuster","intensity":4},
                    {"name":"Hauck, Grant and Ledner","intensity":1},
                    {"name":"Hansen and Sons","intensity":4},
                    {"name":"Dicki, Kiehn and Boyer","intensity":9},
                    {"name":"Kozey and Sons","intensity":6, "projects":["Alpha"]},
                    {"name":"Brakus, Lebsack and Reinger","intensity":6},
                    {"name":"Skiles, Stark and Wisoky","intensity":3},
                    {"name":"Romaguera, Abernathy and Konopelski","intensity":5},
                    {"name":"Wehner and Sons","intensity":5},
                    {"name":"Hermiston, Funk and Beier","intensity":2},
                    {"name":"Kunde, Brekke and Douglas","intensity":9, "projects":["Beta"]},
                    {"name":"Shanahan, Dooley and Harvey","intensity":4},
                    {"name":"Smitham, Hermann and Gibson","intensity":8},
                    {"name":"Ebert, Kerluke and Weissnat","intensity":4},
                    {"name":"Paucek Group","intensity":2},
                    {"name":"Hickle LLC","intensity":6},
                    {"name":"O'Conner-Hodkiewicz","intensity":6, "projects":["Beta"]},
                    {"name":"Blick, Murazik and Halvorson","intensity":7},
                    {"name":"Cormier LLC","intensity":2},
                    {"name":"Johnson-Heaney","intensity":8},
                    {"name":"Johns, Rogahn and Roberts","intensity":1},
                    {"name":"Lueilwitz, Erdman and O'Connell","intensity":7},
                    {"name":"Adams-Vandervort","intensity":7},
                    {"name":"Schmitt-Brakus","intensity":1},
                ]
        },
        {
            "name": "Technology Innovators",
            "children":
                [
                    {"name":"Leannon, Grimes and Harris","intensity":10},
                    {"name":"Metz-Willms","intensity":2},
                    {"name":"Frami, Lesch and Nicolas","intensity":2},
                    {"name":"Kuhn-Senger","intensity":2},
                    {"name":"Leannon-Doyle","intensity":6},
                    {"name":"Ryan, Koss and Reinger","intensity":7},
                    {"name":"Willms-Halvorson","intensity":4},
                    {"name":"Kub, Ratke and Brown","intensity":2},
                    {"name":"Padberg-Ledner","intensity":10},
                    {"name":"O'Conner Inc","intensity":6},
                    {"name":"Hodkiewicz, Schmeler and Gorczany","intensity":2}
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
                newButton.classList.add("button", "is-medium", "project-button")
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
            newButton.classList.add("button", "is-medium", "capability-button")
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
            newButton.classList.add("button", "is-medium", "capability-button")
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
                newButton.classList.add("button", "is-medium", "capability-button")
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


