# Welcome to social-image-kodyfire 👋
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/nooqta/kodyfire#install-a-kody)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/nooqta/kodyfire/blob/main/LICENSE)
[![Twitter: anis\_marrouchi](https://img.shields.io/twitter/follow/anis\_marrouchi.svg?style=social)](https://twitter.com/anis\_marrouchi)

> Generate a dynamic image for social media sharing based on HTML templates using Kodyfire cli
![social-image-kodyfire demo](assets/social-image-kodyfire.gif)
### 🏠 [Homepage](https://github.com/nooqta/kodyfire)

## Requirements

social-image-kodyfire requires the kodyfire-cli to be installed

```sh
npm install -g kodyfire-cli
```
## Install

```sh
npm install social-image-kodyfire
```

## Usage

Refer to the kodyfire ["install a kody"](https://github.com/nooqta/kodyfire#install-a-kody) section.
Once your project is initialized and ready for kody, run the following command to generate your images.
```sh
kody run -s kody-social-image.json
```
### Available Templates (credits: [puppeteer-social-image](https://github.com/chrisvxd/puppeteer-social-image))
#### `basic`

> Renders text on a background image.

<img style="margin-bottom: 16px;" src="assets/basic.png" width=400 />

##### Params

- `title` _string_ - text to render
- `logo` _string_ - URL for the logo
- `imageUrl` _string_ - URL for the background image
- `background` _string_ - Valid CSS background color
- `color` _string_ - Valid CSS color
- `watermark` _string_ - (optional) text for footer

#### `article`

> Display a title and subtitle on a background image, with an optional eyebrow

<img style="margin-bottom: 16px;" src="assets/article.png" width=400 />

##### Params

- `title` _string_ - title text
- `subtitle` _string_ - subtitle text
- `eyebrow` _string_ - eyebrow text that renders above the title. Use for date
- `logo` _string_ - URL for the logo
- `imageUrl` _string_ - URL for the background image
- `background` _string_ - Valid CSS background color
- `color` _string_ - Valid CSS color
- `watermark` _string_ - (optional) text for footer


#### `fiftyfifty`

> Tempate with split content

<img style="margin-bottom: 16px;" src="assets/fiftyfifty.png" width=400 />

##### Params

- `title` _string_ - title text
- `subtitle` _string_ - subtitle text
- `logo` _string_ - URL for the logo
- `imageUrl` _string_ - URL for the background image
- `background` _string_ - Valid CSS background color
- `color` _string_ - Valid CSS color
- `watermark` _string_ - (optional) text for footer


Add the following params to your generated concepts. As an example, the final updated concepts might look like the following:
```json
{
      "name": "image-3",
      "template": "fiftyfifty.html.template",
      "split": "diagonal",
      "fontWeight": "medium",
      "fontSize": "80px",
      "title": "Hello World!",
      "subtitle": "Your subtitle",
      "eyebrow": "17 July 2022",
      "logo": "https://noqta.tn/_next/image?url=%2Fimages%2Flogo.svg&w=256&q=75",
      "background": "#fff",
      "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=1950&q=80",
      "color": "#000",
      "includeWatermark": true,
      "watermark": "social-image-kodyfire",
      "size": "facebook",
      "outputDir": ""
    }
```

## Run tests

```sh
TODO
```

## Author

👤 **Anis Marrouchi**

* Website: https://noqta.tn
* Twitter: [@anis\_marrouchi](https://twitter.com/anis\_marrouchi)
* GitHub: [@anis-marrouchi](https://github.com/anis-marrouchi)
* LinkedIn: [@marrouchi](https://linkedin.com/in/marrouchi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/anis-marrouchi/social-image-kodyfire/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## Credits

- [puppeteer-social-image](https://github.com/chrisvxd/puppeteer-social-image) by [chrisvxd](https://github.com/chrisvxd) Big Thanks for the provided templates.
- [puppeteer](https://github.com/puppeteer/puppeteer) by [puppeteer](https://github.com/puppeteer)

## 📝 License

Copyright © 2022 [Anis Marrouchi](https://github.com/anis-marrouchi).

This project is [MIT](https://github.com/nooqta/kodyfire/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-kodyfire](https://github.com/nooqta/readme-kodyfire)_
