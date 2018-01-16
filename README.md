This is an example webpage of an existing report used at Mozilla. It combines R packages with D3.js plots to create a cohesive document that isn't bound by the tool of choice (in this case, R+RMarkdown).

The webpage is hosted [here](https://metrics.mozilla.com/bmiroglio/rmarkdown-examples/interactive-webpage/index.html).


To build and hack locally, one needs to:

* Clone this repo
* Make sure `R` and the `rmarkdown` package are installed
  + once R is installed, you install `rmarkdown` by running `install.packages('rmarkdown')` from the R console
* Run the following command from the root directoy of the repo

      Rscript -e "rmarkdown::render('index.Rmd')" && open index.html
