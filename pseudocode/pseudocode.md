## Initial Pseudocode

#### Project Requirements:

[X] make some wireframes for the website design (include them as photos in repo)

[] Generate the following information
>> [] the restaurant's name
>> [] the restaurant's address
>> [] the restaurant's hours of operations 

[X] Install bootstrap and npm

[] Access the API using Axios installed with npm

[] Create a dynamic restaurant menu
>> chose a specific menu section type to display (appetizers, Past, sandwiches, etc)
>> Dynamically render at least 15 menu items
>> the menu section you decide to display should have its own view as an organism (for example, a bootstrap accordion or nav tabs)
>> each menu item must be a molecule (for example, using a bootstrap card or list item with the name, and the price, etc)

[] Manage the React Component State

###### Additional Requirements

[] Website must me responsive

[] Website must be styled

[] Use the tools and technologies covered in class to complete the website

###### Stretch goals I might actually try for???

[] Pepper emojis/icons/pictures for spicy level

###### Will I finish early? 

[] continue to add your own content, additions, and pages to your site to improve the styling

[] add info to project's README.md file

#### thoughts starting out 

Atoms

> about page link (want it to go somewhere?)
> list items within menu dropdown(breakfast & lunch, dinner, late night bites, drinks)
> contact page link (want it to go somewhere?)
> "come have a bite & enjoy your favorite book" element
> images around landing page
> scroll function
> "menu => scroll for more" element

Molecules

> images in title organism
> individual menu items that are listed (as cards)
> menu dropdown

Organisms

> menu categories container
> nav bar (make sticky)
> title "books & bites" (make sticky)

###### How do i want to walk through formatting this restaurant site?

> top down?
>> Start with putting each of the components of the page, starting with the main things (organisms)
>> get the title of the restaurant on the page, then nav bar, then the landing display, then the menu scroll for more
>> do I need to add a scroll function or will it automatically give me a scroll when the information will be outside the initial landing page window

> this I will work within each organism to add the atoms and molecules
>> within title: image of books? image of food item?
>> within nav bar: about (link) menu (with dropdown) contact us(link)
>> main titles of the menu items (breakfast & lunch, dinner, drinks, late night bites?)

> then I need to start making the cards of the menu items 
>> do I want to have one cuisine type throughout the menu? (ie american, mexican, or italian?)

> what do I want on the cards: 
>> title
>> description
>> price
>> spice level
>>> category will be defined where the dish will be placed within the menu: breakfast, dinner, etc
