---
title: BCC Utils
description: A RedM standalone Development API system.
---

> A RedM standalone Development API system.

## How to install
* Download this repo
* Copy and paste `bcc-utils` folder to `resources/bcc-utils`
* Add `ensure bcc-utils` to your `server.cfg` file (ABOVE any scripts that use it)
* Now you are ready to get coding!


## Features
- Discord Webhook API
- Github Script Version Check API
- Youtube Audio API

## API Docs

### Initial Setup
- Place this atop your client file!
```lua
local BccUtils = {}
TriggerEvent('bcc:getUtils', function(bccutils)
    BccUtils = bccutils
end)
```

### Audio Player Documentation

- To play audio from youtube in your code! (This is not network synces, client specific)
```lua
function playsound()
    BccUtils.YtAudioPlayer.PlayAudio(embedlink , videoid, volume, looped)
end

--Filled out example
function playsound()
    BccUtils.YtAudioPlayer.PlayAudio("https://www.youtube.com/embed/TMeP3kI_2ng" , "TMeP3kI_2ng", 50, 0)
end

-- To Stop Audio
function stopaudio()
    BccUtils.YtAudioPlayer.StopAudio()
end

```
- Make sure you stop all audio before trying to play a new bit of audio!

### Versioner Documentation

- Github Release based checks
_How to use [Github Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)_

> Create a Release and tag  with the version number

_Correct: `1.0.0`_

_Wrong: `v1.1.0`_

> Add the following contents to your lua server
```lua
local repo = 'https://github.com/BryceCanyonCounty/bcc-anticheat'
BccUtils.Versioner.checkRelease(GetCurrentResourceName(), repo)
```

- Github File Based Checks
> Create a file called `version` with the following contents
```txt
<1.3>
- More awesome updates
<1.1>
- Some awesome updates
<1.0>
- My first Update
```

> Add the following contents to your lua server
```lua
local repo = 'https://github.com/BryceCanyonCounty/bcc-anticheat'
BccUtils.Versioner.checkFile(GetCurrentResourceName(), repo)
```

### Discord Webhooks

This API allows you to easily add [Discord webhooks](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) messages to your scripts.

#### Send One Time Message

```lua

-- (webhookurl, webhookname, webhookavatar, name, description, embeds)
BccUtils.Discord.sendMessage('webhookurl', 'My Script', 'https://cdn2.iconfinder.com/data/icons/frosted-glass/256/Danger.png', 'user123', 'this user is awesome')
```

#### Create Discord Re-usable instance

```lua
-- (webhookurl, webhookname, webhookavatar)
local discord = BccUtils.Discord.setup('webhookurl', 'My Script', 'https://cdn2.iconfinder.com/data/icons/frosted-glass/256/Danger.png')

-- (name, description, embeds)
discord:sendMessage('user123', 'this user is awesome')

discord:sendMessage('user456', 'this user is ALSO awesome')

discord:sendMessage('user789', 'this user kinda really awesome', {
    {
        color = 11342935,
        title = 'Embed Item 1',
        description = 'Items awesome description?'
    },
    {
        color = 11342935,
        title = 'Embed Item 2',
        description = 'Item 2 awesome description!'
    },
})

```



#### Custom Embeds

> Add custom [embeds](https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html)

```lua
-- (webhookurl, webhookname, webhookavatar, name, description, embeds)
BccUtils.Discord.sendMessage('webhookurl', 'My Script', 'https://cdn2.iconfinder.com/data/icons/frosted-glass/256/Danger.png', 'user123', 'this user is awesome'{
  {
    {
      color = 11342935,
      title = 'some times',
      description = 'awesomesauce'
    },
   {
      color = 11342935,
      title = 'some other time',
      description = 'awesomesauce'
    },
  }
})
```


## TODO
- Multi-instanced yt audio player
- Native html audio file support
