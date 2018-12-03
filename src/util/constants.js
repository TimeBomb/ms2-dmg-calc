export const defaultState = {
    playerStats: {
        class: 'knight',
        dungeon: 'cdev',
        wepAtk: 2000,
        bAtk: 0,
        pbAtk: 0,
        wepRarity: 'epic',
        pierce: 5,
        pmPierce: 5,
        pmAtk: 300,
        tDmg: 0,
        bDmg: 0,
        eDmg: 0,
        mrDmg: 0,
    },
};

export const fields = {
    class: 'class',
    dungeon: 'dungeon',
    wepAtk: 'wepAtk',
    bAtk: 'bAtk',
    pbAtk: 'pbAtk',
    wepRarity: 'wepRarity',
    pierce: 'pierce',
    pmPierce: 'pmPierce',
    pmAtk: 'pmAtk',
    tDmg: 'tDmg',
    bDmg: 'bDmg',
    eDmg: 'eDmg',
    mrDmg: 'mrDmg',
};

export const classes = [
    {
        val: 'knight',
        text: 'Knight',
    },
    {
        val: 'wiz',
        text: 'Wizard',
    },
    {
        val: 'archer',
        text: 'Archer',
    },
    {
        val: 'thief',
        text: 'Thief',
    },
    {
        val: 'rune',
        text: 'Runeblade',
    },
    {
        val: 'zerk',
        text: 'Berserker',
    },
    {
        val: 'priest',
        text: 'Priest',
    },
    {
        val: 'hg',
        text: 'Heavy Gunner',
    },
    {
        text: 'Assassin',
        val: 'sin',
    },
    {
        val: 'sb',
        text: 'Soul Binder',
    },
    {
        val: 'striker',
        text: 'Striker',
    },
];

export const dungeons = [
    {
        val: 'cdev',
        text: 'Shadow Altar',
    },
    {
        val: 'cmoc',
        text: 'Moonlight Fortress',
    },
    {
        val: 'cpap',
        text: 'Ludibrium Clock Tower',
    },
    {
        val: 'fd',
        text: 'The Fire Dragon',
    },
    {
        val: 'tdummy',
        text: 'Training Dummy',
    },
];

export const wepRarities = [
    {
        val: 'epic',
        text: 'Epic',
    },
    {
        val: 'legendary',
        text: 'Legendary',
    },
];