## Contractor

This project is pretty fun. Every programmer reaches a point where they go "so now what?" and they have to start figuring things out for themselves. This is more or less what this project represents. I wanted to make something a little more than just a landing page, and something that used a lot more JavaScript. So I came up with an idea for a businessy type website where a user could enter a trade of contractor they were looking for and then be presented with options. And what better framework to learn than the Next big React one?

### SPA: Single Page Application

This project is an app in Next.js that renders 3 cards based on the occupation selected from the dropdown menu at the start. In order to accommodate, Next.js comes with a kind of in-house, almost serverless solution, if you will. You can build your own APIs very easily by just making a js file in the root directory of your project called "data.js". There, you enter your data, which in my case was just an array of objects. In fact, you can create multiple, and their names don't even have to be data.js, as you can see from the project directory.

![Data dot jay es](https://user-images.githubusercontent.com/54646908/105099583-31b8c700-5aac-11eb-9256-e3c9561841a5.png)
###### Data dot jay es :robot:

This data is then fetched on the front end. Well, I say "fetch". Really, it's a simple import statement at the top of a component file. Then, this data is filtered with a simple .filter method. And lastly, this data is mapped over into a Card-like component.

![All in the cards](https://user-images.githubusercontent.com/54646908/105099579-31203080-5aac-11eb-9d62-9aede87ff6d3.png)
###### All in the cards :spades:

Not quite as complex as it seemed before I delved deeper into the programming rabbithole, but that's the jist of it. As with anything I now know, it took a while to figure out, and today this stuff is easy as html:5 in VsCode.

### Not hooks, but classes?

This project is so old it almost makes me blush. Before I started to adapt to my environment, and leave my rocks for rayguns, I used an ancient React code known as "class components". Demons to some, angels to others. Mostly on their way out, really. In the big select menu on the mainpage, then, we have little more than an imported dataset mapped over the select options, and then have the component state update with the user selection. If the state is not empty, the "Content" component gets unmounted in favour of the Card component, which then of course takes the state as a prop to determine its contents. This blew my little programmer mind back when I wrote it, but nowadays seems trivial. Clean, to be sure, but very basic.

![Select your item from the menu](https://user-images.githubusercontent.com/54646908/105099585-32515d80-5aac-11eb-8f8f-5db0512acea0.png)
###### Select your item from the menu :hamburger:

One pretty cool thing is coming up.

### Profiles based on prop

Another great feature of Next.js is the built-in Link component it provides. Its aim is to replace React Router, and it does so adequately. In order to take advantage of dynamic paths, the Link component in the Card component takes a template literal with a parameter from the imported data in order to link to a related page. So when a user asks for a plumber, and then gets all the plumbers returned, they can click on the link that says to take the user to the specific profile page, and the Link component takes care of the rest: the user is presented with the related profile page. Pretty neat stuff, all by specifying the "as" attribute in the component.

![It's dangerous to go alone](https://user-images.githubusercontent.com/54646908/105099584-32515d80-5aac-11eb-829f-d0efddbb62bb.png)
###### It's dangerous to go alone :hocho:

Lastly, the ProfilePage component again imports the profiles, filters them, and then renders a whole bunch of JSX. Not much in the way of fancy state and props in this project, but a necessary exercise to train a budding programmer's <i>Fingerspitzengefühl</i>.

![Follow me on Contractor](https://user-images.githubusercontent.com/54646908/105099586-32e9f400-5aac-11eb-91fb-19cdaa761e99.png)
###### Follow me on Contractor :+1:

Not much to see on their profiles. Not quite Facebook yet!

### Styling

For this project, I stuck with the built-in CSS option of CSS modules. Works pretty well for smaller scale projects, but can definitely turn into a bit of an untraverseable mess over time. Maybe with better file structure, this problem can be avoided too. Not much else to say about it: they're simple CSS files that take on the name of the component you wish to stylise, and then you import those styles into their respective components. 

### Conclusion

This project used to be my crown jewel, and now it looks like something a much greener programmer than the one I am today would make. Great learning experience, and very humbling then. But now I'm a little embarrassed I applied for jobs with only this project in my portfolio. I've certainly come a long way since this project, but then a lot of the basic principles that I still use in React projects are in this one. Good practice, and the foundation for many more React projects still to come.

### What I can still do

There is so much that I could change about this project. File structure, styling and best practices, redundant code, class components to functional ones, ES6 function syntax, expand the app's functionality, authentication, database setup, more content, ... The list really does go on. Maybe someday I'll return to this project and do stuff like searchbars and filter options along with database integrations and authentication. For now, it's best to give thanks to the project that gave me hours of good practice and learning opportunity, and then let it rest.
