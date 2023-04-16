# BCC Website

> This is the codebase that drives bcc-scripts.com

## Support & collaboration

## Dependencies

- [nodejs ^14.18.0](https://nodejs.org/)

## Stack

- [Vue 3.2](https://vuejs.org/)
- [Pinia 2.0](https://pinia.vuejs.org/)
- [Router 4.1](https://router.vuejs.org/)
- [Tailwind CSS 3.1](https://tailwindcss.com/)
- eslint 8.5
- prettier 2.5
- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader)

## Install

```
npm
```

## Run / Develop

```

npm run dev

```

## Build

```

npm run generate

```

## Preview

```

npm run preview

```

## Lint

```

npm run lint

```

## How to Add/Edit content

- `data/team.json` Feeds the team page data.

  - "username": The name to display for the team member
  - "position": The position of the team member
  - "avatar": A URL/link to a picture for the member
  - "github": A URL/link to the members github (optional)
  - "youtube": A URL/link to the members youtube (optional)
  - "twitch": A URL/link to the members twitch (optional)

- `data/resources.json` Feeds the resources page

    ```json
    "name-of-script": {
        "image": "A URL/Link to an image for script (optional)",
        "title": "A more presentable title for the script",
        "description": "Describes the script",
        "link": "A URL/Link for the script",
        "categories": ["scripts"], -- a list of what categories this script is in options include ('scripts', 'utility', 'development')
        "action": "what the button should say (optional)",
        "docs": true or false -- This toggle if the resource should link to a docs page 
    },
    ```

- `content/doc/*` Feeds the team page data.

    This is a file based system that utilizes Markdown to make content management easier for documentation.

    **Example:**
    `content/docs/name-of-script` will create a docment page. You can then view this page by setting "docs": true, within the associated resource within `data/resources.json`.
    
    NOTE: `name-of-script` MUST match the resouce key within the `data/resources.json` file. 

