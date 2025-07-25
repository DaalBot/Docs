---
title: Events Overview
description: Learn how to create and use events to automate actions in your Discord server
---

# Events

## What is a event?
Events are a way to automate actions when events happen in your server. For example, you can create a event that will send a message to a channel when a user joins your server or create a event that only allows users to count in a channel. Events are a powerful way to automate actions in your server.

## How do I create a event?
To create a event, you need to have the `Manage Server` permission for accessing the dashboard. Once you have the permission, you can create a event by going to the dashboard and selecting `Server -> Events`. From there, you can create a event by selecting the `+` button.

## What are the different types of events?
DaalBot uses discord.js under the hood, which means pretty much any valid DJS event is supported.

## How do i modify a event?
To modify a event, you can click on the event you want to modify and you will be given info about it and some options to modify it including `Toggle`, `Edit` and `Delete`. Clicking on `Edit` will put you into a code editor we are currently working on a visual editor.

## How do I use events?
Events are ran automatically when the event happens. You can write code in javascript using discord.js like you would in a normal bot so you should refer to the discord.js documentation for more information. The code you write will be ran in an async callback.

## Example
Here is a example of how we can create a command (we will use `messageCreate` for this example but you can use any event like `interactionCreate`) that will send a message containing a value from a variable and then set the value to the current date and time.

```js
const newValue = new Date().toString();
message.channel.send(util.variables.get('lastValue', false) ?? 'No current value');
util.variables.set('lastValue', newValue);
```
Simple right? You can do a lot more with events so feel free to experiment and see what you can do! for more info on the util object, check out the [events util page](/docs/events/util).