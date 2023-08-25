# Punk API Project

![beer-garden:head](https://github.com/nmWolfe/beer-garden/assets/125403716/37176572-5954-4ae0-896c-17f0b49b3204)

The Punk API project has been created for the beer lovers out there. It allows you to search the Punk API, which consists of the BrewDog beer range. You can then filter by ABV, IBU, EBC, or alternatively, sort the entire range, so you can view them all.

## Features

### Complete API Search Functionality

- Users can search the full catalogue of BrewDogs beers, directly from the API by name. A further update will allow more complex searches.

### Filters

- Users can filter the results from the API by ABV, IBU and even brewed dates! Future updates will allow multiple filters concurrently.

### Sort

- Users can sort the currently filtered range by both ascending and descending order, with things such as Name, ABV, created dates and IBU.

### Detailed Beer information

- Users can expand each separate beer by clicking on the corresponding card, to find out a wealth of information, from things like created dates, to brewing tips, to my favorite - FOOD PAIRINGS!

## Getting Started

To get started in the Beer Garden:

1 - Clone down the repo: `git clone https://github.com/nmWolfe/beer-garden.git`

2 - Navigate into the project directory: `cd beer-garden`

3 - Install dependencies: `npm install`

4 - Run a development server: `npm run dev`

5 - CMD click/Open web browser, and head to the specified port: `http://localhost:5173`

Alternatively, if you don't want to run it locally, head [here](https://nmwolfe.github.io/beer-garden/#/) for the hosted page on GH-Pages.

## Check it out!

### Home

![beer-garden:home](https://github.com/nmWolfe/beer-garden/assets/125403716/36a09f40-197d-454a-bc4d-943264df6d49)

### The beer!

![beer-garden:info](https://github.com/nmWolfe/beer-garden/assets/125403716/d7c9d1c7-ebb2-488e-9199-839ab45bb5dc)

## My Favorite Code Slices

#### The main call to the api

I used an if-else here to allow for easier filter readability, and to separate the main search filters, from the radio filters.

```typescript
const getBeers = async () => {
  try {
    if (filter.searchText.length >= 1) {
      const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beerDisplayAmount}&beer_name=${filter.searchText}`;
      const response = await fetch(url);
      const data: Beer[] = await response.json();
      setBeers(data);
    } else if (filter.radioSelect !== "all") {
      const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beerDisplayAmount}&${filter.radioSelect}`;
      const response = await fetch(url);
      const data: Beer[] = await response.json();
      setBeers(data);
    } else {
      const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beerDisplayAmount}`;
      const response = await fetch(url);
      const data: Beer[] = await response.json();
      setBeers(data);
    }
  } catch (error) {
    console.log("There was an error" + error);
  }
};
```

#### Handling the radio-input filters

This makes the highlight reel due to the time it saved me, I initially had if/else checks, until I converted the radioOptions variable from an Array, to an Object. Accessing the key:values made for much cleaner code.

```typescript
const handleRadioFilter = (event: ChangeEvent<HTMLInputElement>) => {
  const userSelection = event.currentTarget.value;
  for (const key in radioOptions) {
    if (userSelection === key) {
      setFilter({
        ...filter,
        radioSelect: radioOptions[key as keyof RadioInput],
      });
    }
  }
};
```

### Testing

I wrote two simple tests to check if elements were actually rendering, this was done in retrospect, and I learnt the valuable lesson of hindsight.

If you want to run these tests, you will need to install the following devDependencies:

```
    "@testing-library/dom": "^9.3.1",
    "@testing-library/jest-dom": "^6.1.2",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
```

Create a test folder and a file named setup.ts inside to contain this import:

```
import "@testing-library/jest-dom";
```

Also ensure you have the following config in your vite.config file:

```
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "/src/components/test/setup.ts",
  },
```

Other dependencies you will need:

```
  "dependencies": {
    "jsdom": "^22.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0",
    "sass": "^1.66.0",
    "vitest": "^0.34.2"
  },
```

Add the testing script also:

```
    "test": "vitest"
```

Now you can create your own tests, or run `npm run test` to check the tests out.
