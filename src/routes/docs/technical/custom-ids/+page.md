---
title: Custom IDs for DaalBot
description: The master list of custom IDs that DaalBot uses to identify various features and components.
---

# Custom IDs

> ⚠️ This page is a work in progress, it does not contain anywhere near all of the custom IDs that DaalBot uses. If you have a specific ID you would like to know about, please see below in the [How to find custom IDs](#how-to-find-custom-ids) section.

## What are Custom IDs?
Custom IDs are a discord feature that allows bots to identify specific components. Every button, select menu, and modal has a custom ID, using this list you can configure your messages to automatically trigger these functionalities.

## How to find custom IDs
1. Open the channel where the message is located in the browser version of Discord.
2. Bring up the developer tools (F12, Ctrl + Shift + I, or right-click and select "Inspect").
3. Click on the "Network" tab in the developer tools.
4. Reload the page (F5, Ctrl + R). <br/>
Note: This guide from this point on is written for chromium-based browsers, but the process is similar in other browsers.
5. In the "Filter" text box, type `messages`
6. Click on the first request that appears (typically `messages?limit=50`).
7. Find the message you are interested in, you can use `Ctrl + F` to search for it by content.
8. Under the components array you should be able to find the custom ID of the component.<br/>
8a. Optionally you can contribute the custom ID to this page by opening a pull request [here](https://github.com/NotPiny/DaalBot-Docs/edit/main/src/routes/docs/technical/custom-ids/%2Bpage.md).


## Buttons

### Roles
- **selfrole-[Role ID]** - Assigns the role to the user triggering it or removes it if they already have it.

### Tickets

### Economy
- **handler_shop_manage** - Opens the shop management menu for the server.

### Information
- **levelUpMenu** - Displays the menu where a user can see info relating to their level and XP.