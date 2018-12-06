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
    const totalPmAtk = (stats.pmAtk + (itemStats.mainStatGems * data.gems.stat[itemStats.mainStatGemLvl] * data.mainStatToPMAtk[stats.class])) * (1 + (buffs.buffPmAtk / 100));
    const bossDef = data.boss[stats.dungeon].def;

    const initialDmg = totalWepAtk * totalPmAtk * (1 + (totalDmg / 100));
    const piercingDmg = initialDmg / bossDef * (1 / Math.max(1 - (stats.pierce / 100), 0.7));

    const damageDealt = piercingDmg
        * Math.min(1, ((1500 * (1 + (stats.pmPierce / 100)) - data.boss[stats.dungeon].pmResis) / 1500))
        * (1 + ((buffs.buffDmg + buffs.debuffDmgTaken) / 100));

    return damageDealt;
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
    const critRate = ((stats.luck * data.critRateCoefficient[stats.class]) + (stats.critRate * 5.3)) / (data.boss[stats.dungeon].critEvasion * 2) * 0.015;
    const additionalCritRate = (buffs.sinCritBuff ? data.buffs.sinCritBuffUptime : 0)
        + (buffs.critRateBuff / 100);
    return Math.min(critRate + additionalCritRate, data.critRateCap);
}