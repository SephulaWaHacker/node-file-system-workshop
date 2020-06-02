const fs = require("fs");

class Page{
    constructor(title, body, author, publisher){
        this.title = title;
        this.body= body;
        this.author = author;
        this.publisher = publisher;
    }

    create(filename){
        let page = `
        ${this.title}
        ${this.author}
        ${this.publisher}

        ${this.body}
        `;
        
        fs.writeFile(`./pages/${filename}`, page, function(err){
            if(err) throw err;
            console.log(`${filename} created succefully!`);
        })
    };

    read(page){
        fs.readFile(`./pages/${page}`, "utf8", function(err, file){
            if(err) throw err;
            console.log(file)
        })
    };

    update(page, data){
        let updateData = `
        ${data.title}
        ${data.author}
        ${data.publisher}

        ${data.body}
        `;

        fs.appendFile(`./pages/${page}`, updateData, function(err) {
            if (err) throw err;
            console.log(`${page} updated succefully!`);
        });
    };

    delete(page){
        fs.unlink(`./pages/${page}`, function(err) {
            if (err) throw err;
            console.log(`${page} deleted succefully!`);
        });
    }

}

let page = new Page(
    "Dulamela Lefatshe",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sweetbeard",
    "Umuzi"
)

let updateData = {
    title: "Hello World",
    body: ".murobal tse di mina tillom tnuresed aiciffo iuq apluc ni tnus ,tnediorp non tatadipuc taceacco tnis ruetpecxE .rutairap allun taiguf ue erolod mullic esse tilev etatpulov ni tiredneherper ni rolod eruri etua siuD .tauqesnoc odommoc ae xe piuqila tu isin sirobal ocmallu noitaticrexe durtson siuq ,mainev minim da mine tU .auqila angam erolod te erobal tu tnudidicni ropmet domsuie od des ,tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL",
    author: "draebteewS",
    publisher: "some publisher"
}

page.create("file1.txt")
// page.read("page1")
// page.update("page1", updateData)
// page.delete("file1.txt")