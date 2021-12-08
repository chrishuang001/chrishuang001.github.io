DESIGN DOCUMENT
Chris Huang

The motivation behind this project was to use what I learned with manipulating variables/data in CS50 to do real-world data analysis/exploration.
Then I wanted to take what I found (the observations and insights from the analysis) and use what we studied with
web development to make it easily accessible and actually availble to the world.

First came the research process. I had to find the proper data to first do exploration and analysis with. I initially
started with trying to do my project on unfair healthcare pricing as it was a topic I was really interested in. However,
it was hard to find that type of data as medical information is usually not publically available and hosptials intentionally
hide their pricing. Thus, I pivoted to another topic I was interested in which is child mortality rates around the world.
There is a lot of great, reliable data sources on this from international organizations such as the UN.

I started off by finding some data that I found interesting after researching. Then, I downloaded them as xlsx and csv file.
Both of theses files can be opened in excel, however, I found that I needed to do more with it. Thus, I used python
to do some elementary exploration of the data. I used the pandas and numpy library in a google collaboratory. I loaded the files into
the notebook and then put them into a dataframe object using pandas. From here, it was easy to do some simple exploration of the tables
and, more importantly, do some indexing to find exactly the data I wanted in a massive set of data. It was here where I mapped out exactly what
type of data I wanted to visualize and show off.

Then, came the creation of the website. I started off with a finding a bootstrap template online. I wanted to make sure
the website was visually pleasing with everything being very smooth. I find that a frictionless website experience makes
me more receptive to the information, so I wanted smooth transitions and good styling. I choose the Moderna template from Bootstrapmade.com

Most of the included features of the template website were extraneous and distracting to my purpose, so a good amount of time was spent selectively
deciding what to include, what to delete, and what to adapt. Some parts were adapted. For example, there was once section initially meant to showcase the
services a business provided with four showcards in a row. I changed the html and icons to change that section into a showcase on places to donate to
child health organizations. Similarly, there was one section with a video showcase and text, which I transformed into a video direct to a UNICEF promotion
video along with a part about volunteering at this United Nations branch that focuses on humanitarian aid for children.

Aside from those features, I mostly used the <div class="row" data-aos="fade-up"> generously to give the smooth transition effect
to the graphs and text I had as a viewer scrolls through the webpage, giving it a more flowing user experience.

From there, I needed to do the actually data visualization. I initally started off by trying to use a library
called d3.js which is a powerful data visualization library for javascript. However, it turned out to be too complicated
for me to understand and grapple with, so I was forced to switch to simpler options after a few hours of trying. This led me
to a library called chart.js, this is an easier library (though still relatively hard for me to understand) that was more
accessible thatn d3.js at the exchange of less power.

From there, I created all my graphs within the main.js file using the chart.js library. This involved selecting a tag
within the html and then creating a chart object with a lot of specification embedded variable delcarations to set data and adjust settings.
I manually inputted the data I found in the python exploration part

After all this (I skipped over the frustrating majority of the time where I spent banging my head on my desk, flailing to figure out errors causing my entire website
to disappear, and reading esoteric documentation to no avail.), I had a website. From here, I wanted to actually get it partly into the world
so other people could see it, not have it trapped within my local computer. I looked for different options. Hosting seems to be overkill and costs money,
but I found an option with github pages that allows you to host static webpages on their site. I thought it was perfect as we already used github a lot
and my website was static as it did not do any real server calls or that sort of operation. Thus, I pushed my files onto github and not it is available for anyone
to see at: https://chrishuang001.github.io/
