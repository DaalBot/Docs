---
title: Templating
description: Learn how to use templating in DaalBot to create dynamic and personalized messages
---

> ⚠️ This page covers features that are not fully implemented yet, it also contains examples that may or may not function. You shouldn't use this page as a direct source instead it should be used to learn how to use these features yourself.

# Templating in DaalBot
DaalBot offers a powerful templating system that allows you to create dynamic and personalized messages for your server. By using placeholders and variables, you can customize responses based on user input, server data, and more.

## Basic Syntax
Templating in DaalBot uses the following syntax for placeholders `%%{placeholder}%%`. You can use these placeholders in various areas of DaalBot for things such as logging, welcome messages, and custom commands.

## Available Placeholders
The available placeholders may vary depending on the context in which you're using them. For example, in welcome messages, you might have access to placeholders like `%%{user.username}%%` or `%%{server.name}%%`. Refer to the specific documentation for each feature to see which placeholders are supported.

## Advanced Templating
DaalBot also supports more advanced templating features, such as default values and conditional statements. This allows you to create more complex templates that can adapt based on certain conditions.

### Default Values
You can provide default values for placeholders in case the data is not available. You can do this by using the following syntax: `%%{placeholder|default_value}%%`. If the placeholder data is not available, DaalBot will use the specified default value instead.

You can actually chain multiple defaults like so: `%%{placeholder|default1|default2}%%`. DaalBot will use the first available value in the chain. If you just want to use a string as a default, you can wrap it in quotes: `%%{placeholder|"Default String"}%%`.

### Conditional Statements
You can create simple conditional statements using the following syntax: `%%{#condition[true_value][false_value]}%%`. If the condition is met, DaalBot will use the first value; otherwise, it will use the second value. For example:<br/> `Welcome, %%{#user.isAdmin=true["Admin"]["User"]}%%!`.

A condition is made up of three parts: the placeholder to check, the operator to use, and the value to compare against. 

Placeholder Modification: You can convert a placeholder into lowercase by putting a `_` and uppercase using `-`

Supported operators are below:
* `=` Equal to (type coercion)
* `==` Strictly equal to (type and value)
* `!=` Not equal to (type coercion)
* `!==` Strictly not equal to (type and value)
* `>` Greater than
* `<` Less than
* `>=` Greater than or equal to
* `<=` Less than or equal to
* `^=` Starts with
* `*=` Contains (raw, be warey to not Clbuttic yourself)
* `~=` Contains word
* `$=` Ends with

### Nesting Placeholders
You can simply put another placeholder inside a placeholder to nest them. For example: `%%{user.%%{custom_field_name}%%}%%`. This will first resolve the inner placeholder and then use that value to resolve the outer placeholder. You can nest as many levels deep as you want wherever you want, but remember that *Just because you can, doesn't mean you should!* Nesting too deeply can make your templates hard to read and maintain. also, be aware that excessive nesting may lead to performance issues as each level of nesting requires additional processing to resolve the placeholders correctly or even placeholder resolution failures if you cause a stack overflow but that's unlikely unless you go overboard.

### Arrays
You can loop through a array using the `Array*varName[expression]` syntax, for example a leaderboard like so:<br/>

`game.leaderboard*player[player.name]`

#### Slicing
You can slice a array using the `Array<start,end>` so to get the first 10 entries that would be `Array<0,9>` (Note: Arrays start from 0). Like with javascript you can just negative numbers so to instead get the last 10 items it would be `Array<-1,-10>`.

#### Accessing specific entries
Accessing array entries is as simple as it is in javascript simple do `Array[index]`

## Escaping
You can escape sequences by doing the following:<br/>

* `%%{`, `}%%`, `|`, & `\` - Put a `\` before
* `[`, & `]` - So long as it is within double quotes (`"`) it shouldn't be processed. To be clear it has to be directly under the quotes if its in a nested placeholder.

## Examples
### Welcome message
`Welcome into the server%%{#_user.displayName^="[cool] "[" looking especially cool today"][""]}%%... %%{user.displayName}%%`<br/>

Output:<br/>
`Welcome to the server looking especially cool today... [Cool] PickleLord`

### Leaderboard
`game.leaderboard<0,9>*player["%%{player.name}%%: %%{player.score}%%\n"]`<br/>

Output:<br/>
```
Alice - 20<br/>
Bob - 10<br/>
Charlie - 5
```