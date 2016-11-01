CURRENT CASH -

Synopsis-
This full-stack application looks at the currency of
a given country, and compares it to other currencies of 
the world. Values are given by the European Central bank 
and updated daily. With guest-only access, the user can
view all the countries that use a given currency. Once 
signed up and logged in, the user can view that country 
list, as well as currency comparisons.

Main Technologies-
Used a Node.js environment, express.js server 
setup, and mongoDB for user information storage.

APIs- 
fixer.io - Daily currency rates with conversion.
https://restcountries.eu/ - Country list for currency types.

Unsolved Problems-
-Remove items from watchlist (delete favorites)
is failing.
-Logout post/delete user id from session failing.
-Better specificity about exchange rates when saving. 
Should include what rate it is being compared to.
-More data models - track exchange rates over time.
-More interesting data from Countries API
-Better user directions
-Better displays when navigating. Page should continue
to display countries after selecting 'save'.

User Story-
It starts with curiosity, a desire for some factoids 
about currencies. I can select from a dropdown menu
of about 40 of the world's most used currencies, and 
I can see which countries it. As a signed in user, 
I can also see its value as it compares to other 
currencies of the world. I can even save a certain 
comparison to a currencies-to-watch list.




