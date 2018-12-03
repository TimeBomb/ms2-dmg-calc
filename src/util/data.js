export default {
    boss: { // Info from English MS2 Wiki, is datamined
        fd: {
            // Appears to be the higher def one, not lower def one on wiki. 23000011 has hidden HP stat that matches our hard mode FD
            name: 'Pyrros Fard',
            def: 681,
            pmResis: 120,
            critEvasion: 50,
            evasion: 97,
            luck: 0,
        },
        cdev: {
            name: 'Devorak',
            def: 681,
            pmResis: 249,
            critEvasion: 50,
            evasion: 98,
            luck: 0,
        },
        cmoc: {
            name: 'Captain Moc',
            def: 681,
            pmResis: 249,
            critEvasion: 50,
            evasion: 98,
            luck: 0,
        },
        cpap: {
            name: 'Papulatus',
            def: 936,
            pmResis: 249,
            critEvasion: 50,
            evasion: 101,
            luck: 0,
        },
        tdummy: {
            name: 'Training Dummy',
            def: 567,
            pmResis: 90,
            critEvasion: 50,
            evasion: 87,
            luck: 0
        }
    },
    petBonusAtkMultiplier: 0.4, // Amount of pet bonus atk that affects your bonus atk, came from Saintone
    bonusAtkCoefficient: { // Coefficient may different slightly depending on wep type, ignoring for now until we have more certain data
        epic: { // From https://docs.google.com/document/d/1h3kmoDic7x8VldqJ2DxxXgwTI674Ft-riEKXY3SnJuU/edit
            knight: 2,
            wiz: 2.75,
            archer: 2.75,
            thief: 2.25,
            rune: 2.75,
            zerk: 2.75,
            priest: 2,
            hg: 2.75,
            sin: 2.25,
            sb: 2.75,
            striker: 2.75,
        },
        legendary: { // Came from Saintsone
            knight: 4,
            wiz: 5.5,
            archer: 5.5,
            thief: 4.5,
            rune: 5.5,
            zerk: 5.5,
            priest: 4,
            hg: 5.5,
            sin: 4.5,
            sb: 5.5,
            striker: 5.5,
        }
    },
    mainStatToPMAtk: {
        knight: 0.62,
        wiz: 0.56,
        archer: 0.62,
        thief: 0.62,
        rune: 0.62,
        zerk: 0.62,
        priest: 0.48,
        hg: 0.62,
        sin: 0.62,
    },
    buffs: {
        sinCritBuffUptime: 17 / 60,
    },
};