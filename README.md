## Project Link : https://chinmoybhattacharyaelectrochemistry.com
## Project Name : Chinmoy-Bhattacharya-Research-Group.
## Project type : Single Page.
## Online Reposetories : GitHub.
## Github Reposetories : https://github.com/Chinmoysir
## Project Info : {
Project-Owner : Dr. Chinmoy Bhattacharya.
Project-Manager : Mr. Aditya Poddar.
Project-Description : 
(
Chinmoy-Bhattacharya-Research-Group is a electrochemistry lab located in shibpur howrah westbengal.
The perpose of making this project to showcase the work of chinmoy bhattacharya's research work.
Chinmoy-Bhattacharya-Research-Group has done lot of project releted to electrochemistry if you re 
interested to know about. please checkout the site. thankyou.
)
}


## Developer Info : {
Developer-Name : Mr. Kunal Chandra Das.
Developer-Email : kunalchandradas5@gmail.com.
Developer-Contact : 9874353723.
Experience : 2years.
Stack : Full-Stack.
Fields : Web.
## Github Profile : https://github.com/KUNAL-DA
}


## Technologies : {
# React + Vite,
# Bootstrap-5,
# Javascript + SWC
# JSON,
# Css-3
# EmailJS
}


## Dependencies : {
    react : 18.2.0,
    react-bootstrap : 2.10.0,
    bootstrap: 5.3.2,
    react-dom : 18.2.0,
    react-router-dom : 6.21.3,
    react-lazy-load-image-component : 1.6.0,
    emailjs/browser": 4.3.3,
    react-helmet: 6.1.0,
}


## Installation Setup : {
1. https://github.com/Chinmoysir/CB-S-Research-Group.git
2. npm install
2. npm run dev
3. npm run build
4. npm run preview
}
## Description : {
Open powershell terminal and write (git clone https://github.com/Chinmoysir/CB-S-Research-Group.git)
after complete cloneing write [ (npm i) or (npm install) ] underneath. then write (npm run dev) to 
run the project in development server. to run on production server just write (npm run build) then write 
(npm run preview).
}

## emailjs install command : (
```bash
  npm install @emailjs/browser --save
```
)


## PROJECT ARCITECHTURE : {
// Currently we are not having backend server support.

1. Image-Source => Asset/images
2. Icon-Source =>  Asset/icons
3. Font-Name => Poppins
4. Font-Source => Asset/fonts
5. Information-Source => database
}


## Folder Stucture :  {
1. database/folder : All informations are store in this folder
2. public/folder : for favicon
3. src/folder : main root folder
3. eslintrc.cjs/file : linting setup and dependencies
4. .gitignore/file : ignore file
5. index.html/file : entry point
6. package.json/file : informations about dependencies and packages
7. package-lock.json/file : deep info of all dependencies
8. readme/file : documentation
9. vite.config.js/file : vite configarations
}


## Folder-Stucture/database : {
1. homePage.json/file => (it containing the all text content of the home page.)
2. professorPage.json/file => (it containing the all text content of the professor page.)
3. researchPage.json/file => (it containing the all text content of the research page.)
4. publicationPage.json/file => (it containing the all text content of the publication page.)
5. alumni.json/file => (it containing the all text content of the alumni page and members page.)
6. instument.json/file => (it containing the all text content of the instument page.)
6. accordion.json/file => (it's only used in accordion dropdown menu, located inside professor page.)
}


## Folder-Stucture/src : {
1. assets/folder => (Fonts, icons, and images )_all images and icons stored here.
2. components/folder => (All reusable components are stored inside common folder.
                    and all single use components are stored inside main folder.)
3. page/folder => (All routes page are stored here.)
4. app.jsx/file => (The navbar footer and main body of the application are define here).
5. main.jsx/file => (The main root of routes and the entry point of the application.)
}
## src/Components : {

##  Whatever you can see underneath of this text, these all are folder of the component, these are mot component. Inside of these folder you'll get two file first one will be JSX file and Second one will be CSS file. The JSX file is the component. and for style i have used module css the Css file is for that component you are seeing.  


## Common/folder => 
## The Common folder is used for Reusable Component.

[
1. ## accordion : 
 (it's a normal dropdown which is used inside of the professor page to showcase professional recognizion of sir.)

2. ## card : 
(it has multiple uses, first is alumny page to showcase alumni image name and info, and second is in members page to showcase same info as alumni.)

3. ## carousel : 
(it's an image slider, used in research page.)

4. ##  footer :  
(it's the footer of the page)

5. ##  heading : 
(is's a common heading which is used in lots of page. fecilty of heading is it is look bold and responsive.)

6. ##  Navbar : 
(it's the only navbar of page inside this it has two dropdown)

7. ## pills : 
it's used inside of alumni page it's use for to navigate project student to phd student page.

8. ## PublicationTitle : 
( Main Content of the publication page. with toggle section and link to navigate coresponding publication page.) 

9. ## Publicationyear : 
(This is for the colourful heading of the the publication page. which is containing the year.)

9. ## qualificationssec : 
(In professor page the teachers qualification is containing qualificationssec )

10. ## skeleton : 
(It is the preloading state visual representation of the page. inside this it has preloadSkeleton folder it is for the preloading search icon of the website).

11. ## SocialHandles : 
( Inside of the Professor page the second component which is containing all the social media handle of Dr. chinmoy bhattacharya.)

12. ## ToggleItem : 
(It's the Toggle section of the publication page which has the information about yearly publication ) 

13. ## totalListItemSection : 
(Inside this it has Two JSX file one is LiContent.jsx // And second one is UnorderListitem.jsx. All type of list items make by this two component. it located all over the application but the main purpose to make this component is to use it on publication page. the maxium uses of these component inside the publication page.)

14. ## totalListItemSection : 
(It's the Shibpur College Logo on top of the page.)


15. ## Alertbox : 
(It's a custom alert box.)
]





## Main/folder =>
## The Main folder is used for single used component  
[
1. ## bannerhome : 
(It is the home banner used in home page.)

2. ## contactus : 
(It is the form field of the contact us page )

3. ## currentmembers : (
## mscmembers : 
(It is containing all MSC current students information with images)
## phdmembers : 
(It is containing all PHD current students information with images)
)

4. ## Gallary : 
(It is used in GroupNews page to showcase some of the photo of group member with professor of other country and state)

5. ## Instumentalsection : 
(It is the main content of the instument page. Containing instument photo and name and info)

6. ## memberhome : 
(It is the Home Banner of the member page)

7. ## professorOverview : 
(It is the home page 1st component work of this to display Professor's achivment. inside of this it has another component refference whis is showcase professor's achivments )

8. ## publicationbanner : 
(It is acctually a reusable component. it has usedin sevral places like Publication page, Alumni page and lab-Instument page. it is used to display the home banner of the page as like bannerhome or memberhome.)

9. ## researchhero : 
(It's the grid layout used in research page. the total research page is made by this component. except carousel.)

10. ## researchOverview : 
(It's the same as Professor overview. the purpose of this component is to display the over view of research,
it is used in home page.)
]
}

## PAGES/ROUTS => {

1. ## home : The Home Pages.

2. ## professor : Information about teacher.

3. ## research :  Information about research topics.

4. ## publication :  Information about previous publication topics.

5. ## current member :  Information about current students.

6. ## group news :  Information about admisston and vacencies.

7. ## Alumni :  Information about passout students.

8. ## Lab instuments :  Information about fecelitys.

9. ## contact :  For Contacts Us Form.

10. ## Error :  For Bad Request.

}
  
This template provides a setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
#   C B - S - R e s e a r c h - G r o u p 
 
 
