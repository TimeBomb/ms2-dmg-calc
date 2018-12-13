export const defaultState = {
    player: {
        stats: {
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
            critRate: 50,
            luck: 20,
            critDmg: 125,
        },
        item: {
            batkGems: 0,
            batkGemLvl: 10,
            mainStatGems: 0,
            mainStatGemLvl: 10,
            varrWingsBuff: false,
            varrHornsBuff: false,
            murpBuff: false,
            mslBuff: false,
            varrSwordBuff: false,
            pyrrosOrbBuff: false,
        },
        buffs: {
            sinCritBuff: false,
            buffWepAtk: 0,
            buffEDmg: 0,
            buffDmg: 0,
            buffPmAtk: 0,
            debuffDmgTaken: 0,
            debuffDefense: 0,
        }
    },
    comparison: {
        stats: {
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
            critRate: 50,
            luck: 20,
            critDmg: 125,
        },
        item: {
            batkGems: 0,
            batkGemLvl: 10,
            mainStatGems: 0,
            mainStatGemLvl: 10,
            varrWingsBuff: false,
            varrHornsBuff: false,
            murpBuff: false,
            mslBuff: false,
            varrSwordBuff: false,
            pyrrosOrbBuff: false,
        },
        buffs: {
            sinCritBuff: false,
            buffWepAtk: 0,
            buffEDmg: 0,
            buffDmg: 0,
            buffPmAtk: 0,
            debuffDmgTaken: 0,
            debuffDefense: 0,
        }
    }
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
    critRate: 'critRate',
    critDmg: 'critDmg',
    luck: 'luck',
    batkGems: 'batkGems',
    batkGemLvl: 'batkGemLvl',
    mainStatGems: 'mainStatGems',
    mainStatGemLvl: 'mainStatGemLvl',
    sinCritBuff: 'sinCritBuff',
    buffWepAtk: 'buffWepAtk',
    buffEDmg: 'buffEDmg',
    buffDmg: 'buffDmg',
    buffPmAtk: 'buffPmAtk',
    debuffDmgTaken: 'debuffDmgTaken',
    debuffDefense: 'debuffDefense',
    varrWingsBuff: 'varrWingsBuff',
    varrHornsBuff: 'varrHornsBuff',
    murpBuff: 'murpBuff',
    mslBuff: 'mslBuff',
    varrSwordBuff: 'varrSwordBuff',
    pyrrosOrbBuff: 'pyrrosOrbBuff',
};

export const gemQuantities = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
};

export const gemLevels = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
};

export const comparisonTypes = {
    add: 'Add Stats',
    replace: 'Replace All Stats'
}

export const classes = {
    knight: 'Knight',
    wiz: 'Wizard',
    archer: 'Archer',
    thief: 'Thief',
    rune: 'Runeblade',
    zerk: 'Berserker',
    priest: 'Priest',
    hg: 'Heavy Gunner',
    sin: 'Assassin',
    sb: 'Soul Binder',
    striker: 'Striker',
};

export const dungeons = {
    cdev: 'Shadow Altar',
    cmoc: 'Moonlight Fortress',
    cpap: 'Ludibrium Clock Tower',
    fd: 'The Fire Dragon',
    tdummy: 'Training Dummy',
};

export const wepRarities = {
    epic: 'Epic',
    legendary: 'Legendary',
};