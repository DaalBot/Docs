/**
 * @type {Array<{name: string, url: string, permissions: Array<String>}>}
*/
const featureMap = [
    {
        name: 'Auto Role',
        url: '/features/auto-role',
        permissions: [
            'Manage Roles'
        ]
    },
    {
        name: 'Logging',
        url: '/features/logging',
        permissions: [
            'View Audit Log'
        ]
    },
    {
        name: 'Ticket System',
        url: '/features/ticket',
        permissions: [
            'Manage Channels',
            'Manage Messages'
        ]
    },
    {
        name: 'Verification',
        url: '/features/verification',
        permissions: [
            'Manage Roles'
        ]
    },
    {
        name: 'Welcome Messages',
        url: '/features/welcome',
        permissions: []
    },
    {
        name: 'Social Links',
        url: '/features/social-links',
        permissions: []
    },
    {
        name: 'Leveling',
        url: '/features/leveling',
        permissions: []
    }
]

export default featureMap;