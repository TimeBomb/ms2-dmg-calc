export default {
    boss: { // Info from English MS2 Wiki, is datamined
        fd: {
            // Appears to be the higher def one, not lower def one on wiki. 23000011 has hidden HP stat that matches our hard mode FD
            name: 'Pyrros Fard',
            def: 681,
            pmResis: 120,
            critEvasion: 50,
            evasion: 97,
        },
        cdev: {
            name: 'Devorak',
            def: 681,
            pmResis: 249,
            critEvasion: 50,
            evasion: 98,
        },
        cmoc: {
            name: 'Captain Moc',
            def: 681,
            pmResis: 249,
            critEvasion: 50,
            evasion: 98,
        },
        cpap: {
            name: 'Papulatus',
            def: 936,
            pmResis: 249,
            critEvasion: 50,
            evasion: 101,
        },
        irog: {
            name: 'Infernog',
            def: 567,
            pmResis: 150,
            critEvasion: 90,
            evasion: 130,
        },
        tdummy: {
            name: 'Training Dummy',
            def: 567,
            pmResis: 90,
            critEvasion: 50,
            evasion: 87,
        }
    },
    petBonusAtkMultiplier: 0.4, // Amount of pet bonus atk that affects your bonus atk, came from Saintone
    bonusAtkCoefficient: { // Coefficient may different slightly depending on wep type, ignoring for now until we have more certain data
        epic: { // From https://docs.google.com/document/d/1h3kmoDic7x8VldqJ2DxxXgwTI674Ft-riEKXY3SnJuU/edit
            knight: 2,
            wiz: 2.5, // Void found this to be roughly 2.75, changed to 2.5 to match pattern of epic coeff = 1/2 of legendary coeffs, TODO: Needs more testing
            archer: 2.5,
            thief: 2.25,
            rune: 2.5,
            zerk: 2.5,
            priest: 2,
            hg: 2.5,
            sin: 2.25,
            sb: 2.5,
            striker: 2.5,
        },
        legendary: { // Came from Saintsone
            knight: 4,
            wiz: 5,
            archer: 5,
            thief: 4.5,
            rune: 5,
            zerk: 5,
            priest: 4,
            hg: 5,
            sin: 4.5,
            sb: 5,
            striker: 5,
        }
    },
    gems: { // From https://docs.google.com/document/d/1h3kmoDic7x8VldqJ2DxxXgwTI674Ft-riEKXY3SnJuU/edit
        bonusAtk: {
            1: 30,
            2: 55,
            3: 75,
            4: 95,
            5: 115,
            6: 130,
            7: 145,
            8: 160,
            9: 170,
            10: 180,
        },
        stat: {
            1: 2,
            2: 4,
            3: 7,
            4: 10,
            5: 13,
            6: 16,
            7: 20,
            8: 25,
            9: 30,
            10: 36,
        },
    },
    mainStatToPMAtk: { // From https://www.meowuniverse.com/stats
        knight: 0.62249,
        wiz: 0.5665,
        archer: 0.62249,
        thief: 0.62249,
        rune: 0.62249,
        zerk: 0.62249,
        priest: 0.4704,
        hg: 0.62249,
        sin: 0.62249,
        sb: 0.5665, // TODO: Guessing, can confirm upon release
        striker: 0.62249, // TODO: Guessing, can confirm upon release
    },
    critRateCoefficient: { // Datamined
        knight: 3.78,
        zerk: 4.305,
        wiz: 3.40375,
        priest: 7.34125,
        archer: 6.4575,
        hg: 2.03875,
        thief: 0.60375,
        sin: 0.55125,
        rune: 3.78,
        striker: 2.03875,
        sb: 3.40375,
    },
    critRateCap: 0.4,
    classesWithLuck: ['sin', 'thief'], // Classes with luck main stat. Used to calculate additional crit rate
    item: {
        varrHornsBuffAvgPmAtk: 11.5 * 8 / 24,
        varrWingsBuffAvgPierce: 10 * 8 / 24,
        msl: {
            uptime: 20/24,
            dmg: {
                default: 4.5,
                cdev: 4.5 * 4,
                cmoc: 4.5 * 4,
                cpap: 4.5 * 4,
            }
        },
        murp: {
            uptime: 11/24,
            pmAtk: {
                default: 9,
                cdev: 9 * 4,
                cmoc: 9 * 4,
                cpap: 9 * 4,
            },
        },
        namedEpic2HBuffPmAtk: 22 * 30 / 45,
        namedEpicMHBuffPmAtk: 17 * 30 / 45,
        namedEpic1HBuffPmAtk: 11 * 30 / 45,
    },
    buffs: {
        sinCritBuffUptime: 17 / 60,
    },
};