# geekyness-assingment

#Geekyness-Technical-Assessment:
Create a UI mockup for an e-commerce website's product page, with emphasis on user-friendly design, which includes features like search, filters, product details, reviews, and related product suggestions.

-first to start the app : npm install

cd folder_name / project_name

npm start -and installed materail ui related pkgs.. here , i created the E-Commerce website using frontend Reactjs librarie, and The technology that are used here: REACT, MATERIAL UI, BOOTSTRAP, JAVASCRIPT

firstly i used the dummy json data where i copy some data of API where it includes the product -images, price, color, description , brand etc.

from data.josn folder i import that data into parent compoent, and where i render the child compoent their and pass the property as props to child compoent

then in child compoent i create the card and using props i destructed that all data and pass dynamicaly to card. and created it's css where all the website

it will get responsive for all the types of devices. and styled well to the cards. used media query.

then for functionality of search and filterd i used usedState hooks and from dashbord i.e (parent compoent) i passed the proerty to child compoent i.e. name as (parent)

where , passed state values i.e. searchTerm and setSerachTerm to child compoent and from theri the compoent get changes when user enter the value inside of search filed.

and filtered i pass the data.json to component and render inside of dashbored and then the functionality i.e. for selected like color, price, brand names on the basis of that

i filtered the product.
