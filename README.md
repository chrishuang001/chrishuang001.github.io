README DOCUMENTATION
Chris Huang
Link to Youtube video: https://youtu.be/AfsZGbdXJxc

My CS50 Project at its core is meant to be a data visualization and presentation project.
The core motive is to use computer science to both understand data as it pertains to the serious issue of child mortality in our world
AND to present this information to viewers in a very easily digestable and understandable way as possible.

The main component of the project is a website, and the easiest way to view the site is by this link: https://chrishuang001.github.io/
That link will bring any user to my github page where they can view my project result without downloading any IDE, code, or files.

This is the intended usecase: simply visiting the webpage and quickly learning more about child mortality.

However, now I will go into further details about the files submitted.
In the root directory, there contains an assets directory, python_code directory, index.html, README.md, and DESIGN.md

The index.html contains the html file for the entirety of the website which is a singular page. The html is adapted from a the Moderna Bootstrap template
to give the website more visual appeal with smooth transitions and styling to improve the user experience (original attributions have been kept within the file).
Link to the Moderna Template: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/download/

The website uses chart.js as a graphing library to create all the data visualizations. The library does not have to be locally downloaded, however, as it is automatically
called within the index.html file using a <script src>.

This index.html file can be ran in any IDE live server function so long as the assets directory is included.
The assets directory includes the website's CSS for styling, main.js for all the javascript code, along with images and other extra files included with the Moderna Bootstrap template

The CSS file is purely from the template and I have made no alteration to it.

The main.js file includes all the javascript for the data visualizations I created. I wrote the code for the graphs, however there is extra javascript
for the website animations from the Bootstrap template. The Boostrap code comes after my graphing code and is clearly labeled to be not my own work.

Finally in the python_code directory, there contains the ipynb which I imported and explored the data I would then manually move to the javascript file to create graphs.
This ipynb was created using google collaboratory which I used as my IDE and would recommend using as well. However, any other IDE such as jupyter notebook can work as long as
it has the libraries numpy and pandas installed.

The data directory within python_code includes two datasets (attribution/source is found in the ipynb file) which is loaded into the ipynb for exploration. 
