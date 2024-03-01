// Input data
const commandMapGuild = [
    'addemote',
    'autorole',
    'config',
    'logs',
    'ticket',
    'verify',
    'welcome'
]

const commandMapInfo = [
    'cmds',
    'stats'
]

const commandMapMessage = [
    'embed',
    'selfrole',
    'send'
]

const commandMapModeration = [
    'ban',
    'cc',
    'kick',
    'role',
    'warn'
]

const commandMapOther = [
    'hello',
    'invite',
    'ping',
    'poll',
    'randomhexvalue',
    'site',
    'userinfo',
    'beta'
]

const commandMapPen = [
    'explanation',
]

const commandMapRoleplay = [
    'heart',
    'kill',
    'revive'
]

const commandMapSocial = [
    'social-link'
]

const commandMapUtility = [
    'decode',
    'define',
    'encode',
    'lookup'
]

const commandMapXP = [
    'level',
    'xp',
    'xp-reward'
]

// Processing
/**
 * @type {Array<{name: string, url: string}>}
*/
let commandMap = []

for (let i = 0; i < commandMapGuild.length; i++) {
    commandMap.push({
        name: commandMapGuild[i],
        url: '/commands/guild/' + commandMapGuild[i]
    })
}

for (let i = 0; i < commandMapInfo.length; i++) {
    commandMap.push({
        name: commandMapInfo[i],
        url: '/commands/info/' + commandMapInfo[i]
    })
}

for (let i = 0; i < commandMapMessage.length; i++) {
    commandMap.push({
        name: commandMapMessage[i],
        url: '/commands/message/' + commandMapMessage[i]
    })
}

for (let i = 0; i < commandMapModeration.length; i++) {
    commandMap.push({
        name: commandMapModeration[i],
        url: '/commands/moderation/' + commandMapModeration[i]
    })
}

for (let i = 0; i < commandMapOther.length; i++) {
    commandMap.push({
        name: commandMapOther[i],
        url: '/commands/other/' + commandMapOther[i]
    })
}

for (let i = 0; i < commandMapPen.length; i++) {
    commandMap.push({
        name: commandMapPen[i],
        url: '/commands/pen/' + commandMapPen[i]
    })
}

for (let i = 0; i < commandMapRoleplay.length; i++) {
    commandMap.push({
        name: commandMapRoleplay[i],
        url: '/commands/roleplay/' + commandMapRoleplay[i]
    })
}

for (let i = 0; i < commandMapSocial.length; i++) {
    commandMap.push({
        name: commandMapSocial[i],
        url: '/commands/social/' + commandMapSocial[i]
    })
}

for (let i = 0; i < commandMapUtility.length; i++) {
    commandMap.push({
        name: commandMapUtility[i],
        url: '/commands/utility/' + commandMapUtility[i]
    })
}

for (let i = 0; i < commandMapXP.length; i++) {
    commandMap.push({
        name: commandMapXP[i],
        url: '/commands/xp/' + commandMapXP[i]
    })
}

console.log(`/**@type {Array<{name: string, url: string}>}*/const commandMap = JSON.parse('${JSON.stringify(commandMap)}');export default commandMap`)