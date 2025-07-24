# DaalBot API Key Transfer
If you are viewing this page, you have probably just been asked by a application to grant access to manage DaalBot. But what does that mean? This page will explain what happens when you grant access to a application, and what the application can do with that access.

## Okay but what is the DaalBot API?
The DaalBot API much like any API is a way for applications to interact with one another, in this case, it allows the application to interact with the DaalBot data and perform actions on behalf of the user. This is done by using a API key, a DaalBot user API key is just a discord OAuth2 Token with the scope of `identify` and `guilds` which means that the application can see all the data we could about who you are such as your username, avatar, and a bunch of other information which you can see [here](https://discord.com/developers/docs/resources/user#user-object), to be clear they/we **cannot** see your email, password or any other sensitive information.

## What can the application find out about me? (Based off of Discords API)
The application can find out the following information about you:
- The aforementioned [User Object](https://discord.com/developers/docs/resources/user#user-object)
- A list of all the servers you are in, its id (unique identifier), name, icon, banner, your permissions in it and whether or not you own it, and the "features" of the server (such as if it is a partnered server, or if it has a vanity url, etc). This is called a partial [Guild Object](https://discord.com/developers/docs/resources/user#get-current-user-guilds).

## What can a application do if I grant it access?
The application can do the following:
- Find the aforementioned information about you and the servers you are in.
- Use the DaalBot API to perform actions on your behalf within DaalBot, such as sending messages, managing automatically granted roles, and pretty much anything that you could do from the DaalBot dashboard.

## What happens if I deny access?
Denying access is almost the same as simply closing the tab, except the application will specifically be told that you denied access. This isn't used for anything official; however, it may be used by the application to determine if you simply left or if you actually denied access. That's it, nothing else happens. You can always come back and grant access again if you change your mind.

## Notes
- You will **never** be asked for your password or any other sensitive information. If you are, it is a scam and you should leave immediately and if you have already entered your password, you should change it immediately.
- The official DaalBot website will never ask you to grant access to a application, official applications will automatically be granted access, so if you asked to grant access to a application saying that is is official, they are lying. The only time you will be asked to grant access is if you are using a third party application that is not affiliated with DaalBot.
- The application will perform actions as you, in logs it will show that the action was performed by you, not the application. This is important to note as it means that if the application does something bad, you may be held responsible for it. This is why you should only grant access to applications that you trust.