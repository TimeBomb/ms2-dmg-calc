import data from './data';

// There's likely some sort of missing coefficient on defense, as the final calculated number is ~4-5x less than what your dama ge is ingame
// Info mostly from KR tests
export const getDmgDealt = (player) => {
    const stats = player.stats;
    const buffs = player.buffs;
    const itemStats = player.item;

    const bonusAtkCoefficient = data.bonusAtkCoefficient[stats.wepRarity][stats.class];
    const totalDmg = stats.tDmg + stats.bDmg + stats.eDmg + stats.mrDmg + buffs.buffEDmg;
    const totalBonusAtk = stats.bAtk + (stats.pbAtk * data.petBonusAtkMultiplier) + (itemStats.batkGems * data.gems.bonusAtk[itemStats.batkGemLvl]);
    const totalWepAtk = (stats.wepAtk + (totalBonusAtk * bonusAtkCoefficient)) * (1 + (buffs.buffWepAtk / 100));
    const totalPierce = stats.pierce + (itemStats.varrWingsBuff ? data.item.varrWingsBuffAvgPierce : 0);
    const totalPmAtk = (stats.pmAtk
        + (itemStats.mainStatGems * data.gems.stat[itemStats.mainStatGemLvl] * data.mainStatToPMAtk[stats.class]))
        * (1 + ((
            buffs.buffPmAtk
            + (itemStats.varrHornsBuff ? data.item.varrHornsBuffAvgPmAtk : 0)
            + (itemStats.murpBuff ? (data.item.murp.pmAtk[stats.dungeon] || data.item.murp.pmAtk.default) * data.item.murp.uptime : 0)
            + (itemStats.namedEpic1HBuff ? data.item.namedEpic1HBuffPmAtk : 0)
            + (itemStats.namedEpic2HBuff ? data.item.namedEpic2HBuffPmAtk : 0)
            + (itemStats.namedEpicMHBuff ? data.item.namedEpicMHBuffPmAtk : 0)
        ) / 100));

    const totalDmgMultiplier = (1 + (totalDmg / 100));
    const bossDefMultiplier = 1 / (data.boss[stats.dungeon].def * (1 - (buffs.debuffDefense / 100)));
    const pierceMultiplier = (1 / Math.max(1 - (totalPierce / 100), 0.7));
    const pmPierceResisMultiplier = Math.min(1, ((1500 * (1 + (stats.pmPierce / 100)) - data.boss[stats.dungeon].pmResis) / 1500));
    const buffMultiplier = (1 + ((buffs.buffDmg
            + buffs.debuffDmgTaken
            + (itemStats.mslBuff ? (data.item.msl.dmg[stats.dungeon] || data.item.msl.dmg.default) * data.item.msl.uptime : 0)
        ) / 100));

    return totalWepAtk
        * totalPmAtk
        * totalDmgMultiplier
        * pierceMultiplier
        * pmPierceResisMultiplier
        * buffMultiplier
        * bossDefMultiplier;
};

export const getAvgDmgDealtWithCrit = (player) => {
    const critRate = getCritRate(player);
    const dmgDealt = getDmgDealt(player);
    const critDmg = player.stats.critDmg;
    return ((dmgDealt * (1 - critRate)) + (dmgDealt * critRate * (critDmg / 100))) / 2;
};

// Algorithm datamined from client
export const getCritRate = (player) => {
    const stats = player.stats;
    const buffs = player.buffs;
    const itemStats = player.item;
    const finalLuck = stats.luck + (data.classesWithLuck.includes(stats.class) ? itemStats.mainStatGems * data.gems.stat[itemStats.mainStatGemLvl] : 0);
    const critRate = ((finalLuck * data.critRateCoefficient[stats.class]) + (stats.critRate * 5.3)) / (data.boss[stats.dungeon].critEvasion * 2) * 0.015;
    const additionalCritRate = (buffs.sinCritBuff ? data.buffs.sinCritBuffUptime : 0);
    return Math.min(critRate + additionalCritRate, data.critRateCap);
}