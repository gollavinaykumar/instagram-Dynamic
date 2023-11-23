

let rootEl = document.getElementById("root");

let mainDivEl = document.createElement("div");
mainDivEl.style.display = "flex";
rootEl.appendChild(mainDivEl);


let divEl = document.createElement("div");
divEl.classList.add("left-navbar");
let instaName = document.createElement("h2");
instaName.innerHTML = "Instagram";
divEl.appendChild(instaName);

let leftNavBar = ["Home", "Search", "Explore", "Reels", "Messages", "Notifications", "Create", "Profile", "Threads", "More"];
let storyNames = [{
    Name: "vinay",
    image: "vi.jpg",
}, {
    Name: "pranav",
    image: "p.jpg",
},
{
    Name: "venkat",
    image: "v.jpg",
},
{
    Name: "durga",
    image: "p.jpg",
},
{
    Name: "rajeev",
    image: "p.jpg",
},
{
    Name: "sai",
    image: "p.jpg",
},
{
    Name: "teja",
    image: "p.jpg",
},
{
    Name: "jyothi",
    image: "p.jpg",
},
];
let POSTS = [];

leftNavBar.forEach((ele) => {
    const buttonEl = document.createElement("button");
    buttonEl.classList.add("leftnavbarbuttons");
    if (ele == "Home") {
        buttonEl.style.fontWeight = "bolder";
    }

    buttonEl.innerHTML = ele;


    if (buttonEl.innerHTML == "Create") {


        buttonEl.setAttribute("data-target", "modal1");
        buttonEl.classList.add("btn", "modal-trigger");

        const createDiv = document.createElement("div");
        createDiv.id = "modal1";
        createDiv.classList.add("modal");

        const createDiv1 = document.createElement("div");
        createDiv1.style.textAlign = "center";
        createDiv1.style.color = "black";
        createDiv1.classList.add("modal-content");

        const pEl1 = document.createElement("h2");
        pEl1.innerHTML = "Create A Post";

        const spanEl = document.createElement("h5");
        spanEl.innerHTML = "Author image";


        const inputEl1 = document.createElement("input");
        inputEl1.style.color = "black";
        inputEl1.setAttribute("type", "text");


        const pEl = document.createElement("h5");
        pEl.innerHTML = "Author Bio";

        const inputEl2 = document.createElement("input");
        inputEl2.style.color = "black";
        inputEl2.setAttribute("type", "text");


        createDiv1.append(pEl1, spanEl, inputEl1, pEl, inputEl2);

        const createDiv2 = document.createElement("div");
        createDiv2.classList.add("modal-footer");

        const linkEl1 = document.createElement("a");
        linkEl1.href = "#!";
        linkEl1.innerHTML = "post";
        linkEl1.classList.add("modal-close", "waves-effect", "waves-green", "btn-flat");
        linkEl1.addEventListener("click", (e) => {
            e.stopPropagation();
            const post = {
                author: {
                    id: 'vinay kumar golla',
                    image: "vi.jpg",
                },
                location: 'pedakallepalli',
                images: inputEl1.value,
                like_count: count,
                caption: inputEl2.value,
                link: 'https://www.instagram.com/p/CzkexXNJrwQ/?utm_source=ig_web_copy_link',
                date: '2023-11-14T06:11:48.691Z',
                comments: [
                    {
                        id: 'pkpl2',
                        text: 'I commented',
                        date: '2023-11-14T06:11:58.691Z',
                        like_count: count,
                    },
                    {
                        id: 'pkpl3',
                        text: 'I commented 2nd',
                        date: '2023-11-14T06:14:58.691Z',
                        like_count: count, // this
                    },
                    {
                        id: 'pkpl4',
                        text: 'I commented last',
                        date: '2023-11-14T06:16:58.691Z',
                    },
                ]
            };
            // const resultDiv = createPost(post);
            //divEl1.appendChild(resultDiv);
            //POSTS.push(post);
            //debugger;
            //M.Modal.getInstance(createDiv).close();
            //createDiv.parentElement.removeChild(createDiv);
        });

        createDiv2.appendChild(linkEl1);
        createDiv.append(createDiv1, createDiv2);

        buttonEl.appendChild(createDiv);
    }

    divEl.appendChild(buttonEl);
});
document.addEventListener('DOMContentLoaded', function () {
    debugger;
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

let divEl7 = document.createElement("div");
divEl7.classList.add("main");
divEl7.style.display = "flex";
mainDivEl.appendChild(divEl7);


let divEl1 = document.createElement("div");
divEl1.classList.add("stories");
divEl7.appendChild(divEl);

let divEl8 = document.createElement("div");
divEl8.classList.add("story");
divEl1.appendChild(divEl8);

storyNames.forEach((ele) => {

    let rslt = createAStory(ele);

    divEl8.appendChild(rslt);
    divEl7.appendChild(divEl1);
});

let addBtn = document.createElement("button");
addBtn.classList.add("addBtn");
addBtn.innerHTML = "+";
addBtn.onclick = () => {
    let divEl4 = document.createElement("div");
    divEl4.classList.add("information");

    let inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");

    let postBtnEl = document.createElement("button");
    postBtnEl.innerHTML = "Post";
    postBtnEl.onclick = () => {
        let ele = {
            Name: "vinay",
            image: inputEl.value,
        };
        storyNames.push(ele);

        let result = createAStory(ele);
        divEl8.appendChild(result);
        divEl8.appendChild(addBtn);
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.onclick = () => {
        divEl4.remove();
    }

    divEl4.append(inputEl, postBtnEl, deleteBtn);
    divEl1.appendChild(divEl4);
}
divEl8.appendChild(addBtn);
let count = 0;
function createAStory(ele) {


    let divEl2 = document.createElement("div");
    let storyBtnEl = document.createElement("button");
    storyBtnEl.classList.add("roundbutton");
    storyBtnEl.innerHTML = `<img src="` + ele.image + `" width=40 height=40>`;
    storyBtnEl.onclick = () => {

        let divEl3 = document.createElement("div");
        divEl3.classList.add("storyinner");


        let closeBtn = document.createElement("button");
        closeBtn.classList.add("closebtn");
        closeBtn.innerHTML = "X";

        closeBtn.onclick = () => {
            divEl3.remove();
        }

        let headEl = document.createElement("h1");
        headEl.innerHTML = `<img src="` + ele.image + `" width=200 height=200>`;

        divEl3.innerHTML = `<img src="` + ele.image + `" width=50 height=50>`;

        let personName = document.createElement("span");
        personName.classList.add("personame");
        personName.innerHTML = ele.Name;
        divEl3.append(personName, closeBtn, headEl);

        mainDivEl.appendChild(divEl3);

    }
    divEl2.appendChild(storyBtnEl);

    let breakEl = document.createElement("br");
    divEl2.appendChild(breakEl);

    let storyPerson = document.createElement("span");
    storyPerson.innerHTML = ele.Name;
    divEl2.appendChild(storyPerson);
    return divEl2;
}


function createPost(post) {


    const postCard = document.createElement("div");
    postCard.classList.add("card");


    // Collection
    const collection = document.createElement("ul");
    collection.classList.add("collection");

    const li = document.createElement("li");
    li.classList.add("collection-item", "avatar");


    const authorImage = document.createElement("img");
    authorImage.setAttribute("src", post.author.image);
    authorImage.classList.add("circle");

    const authorName = document.createElement("span");
    authorName.classList.add("title");
    authorName.innerHTML = post.author.id;

    const location = document.createElement("p");
    location.innerHTML = post.location;

    const aEl = document.createElement("a");
    aEl.classList.add("secondary-content");
    aEl.href = "#!";

    const iEl = document.createElement("i");
    iEl.classList.add("material-icons");
    iEl.innerHTML = "more_vert";
    aEl.appendChild(iEl);

    li.append(authorImage, authorName, location, aEl);
    collection.appendChild(li);

    //End  Collection

    const cardImage = document.createElement("div");
    cardImage.classList.add(
        "card-image",
        "waves-effect",
        "waves-block",
        "waves-light"
    );

    const activatorimgEl = document.createElement("img");
    activatorimgEl.classList.add("activator");
    activatorimgEl.setAttribute("src", post.images);
    cardImage.appendChild(activatorimgEl);



    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const pEl2 = document.createElement("p");
    pEl2.classList.add("icons", "activator", "grey-text", "text-darken-4");

    const iEl1 = document.createElement("i");
    iEl1.classList.add("material-icons", "love");
    iEl1.innerHTML = "favorite_border";
    iEl1.onclick = () => {
        iEl1.style.color = "red";
        spanEl1.innerHTML = ++count + " " + "like";
    }

    const iEl2 = document.createElement("i");
    iEl2.classList.add("material-icons");
    iEl2.innerHTML = "comment";

    const iEl3 = document.createElement("i");
    iEl3.classList.add("material-icons");
    iEl3.innerHTML = "send";

    const iEl4 = document.createElement("i");
    iEl4.classList.add("material-icons", "right");
    iEl4.innerHTML = "bookmark_border";

    pEl2.append(iEl1, iEl2, iEl3, iEl4);

    const spanEl1 = document.createElement("span");
    spanEl1.classList.add("activator", "grey-text", "text-darken-4");
    spanEl1.innerHTML = post.like_count + " " + "like";

    const pEl5 = document.createElement("span");
    pEl5.id = "caption";
    pEl5.innerHTML = post.caption;


    const pEl3 = document.createElement("p");
    const spanEl2 = document.createElement("span");
    spanEl2.classList.add("author-name");
    spanEl2.innerHTML = post.author.id + " " + pEl5.innerHTML;
    pEl3.append(spanEl2);


    const pEl4 = document.createElement("p");
    pEl4.classList.add("activator", "grey-text", "text-darken-4");
    pEl4.innerHTML = "view all " + count + "comments";

    cardContent.append(pEl2, spanEl1, pEl3, pEl4);

    postCard.append(collection, cardImage, cardContent);

    return postCard;
};

/*
const divEl11 = document.createElement("div");

const divEl12 = document.createElement("div");
divEl12.style.display = "flex";
const divEl13 = document.createElement("div");
//divEl13.style.display = "flex";
const imgEl = document.createElement("img");
imgEl.setAttribute("src", "vi.jpg");
imgEl.classList.add("circle");

const spanEl3 = document.createElement("p");
spanEl3.innerHTML = "Vinay kumar golla";


//const breakEl12 = document.createElement("br");


const spanEl4 = document.createElement("p");
spanEl4.innerHTML = "pedakallepalli";

const divEl14 = document.createElement("div");


const aEl = document.createElement("a");
aEl.classList.add("rightSwitch");
aEl.innerHTML = "Switch";
divEl14.appendChild(aEl);
divEl12.append(divEl13, divEl14);

divEl13.append(imgEl, spanEl3, spanEl4);
divEl11.appendChild(divEl12);
divEl7.appendChild(divEl11);
*/















