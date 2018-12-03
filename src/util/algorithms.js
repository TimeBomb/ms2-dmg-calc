import data from './data';

// There's likely some sort of missing coefficient on their defense, as the final calculated number is ~4-5x less than what your dama ge is ingame
export const getDamageDealt = (stats) => {
    try {
        const bonusAtkCoefficient = data.bonusAtkCoefficient[stats.wepRarity][stats.class];
        const totalDmg = stats.tDmg + stats.bDmg + stats.eDmg + stats.mrDmg;
        const totalWepAtk = stats.wepAtk + ((stats.bAtk + (stats.pbAtk * data.petBonusAtkMultiplier)) * bonusAtkCoefficient);
        const bossDef = data.boss[stats.dungeon].def;

        const initialDmg = totalWepAtk * stats.pmAtk * (1 + (totalDmg / 100));
        const piercingDmg = initialDmg / bossDef * (1 / Math.max(1 - (stats.pierce / 100), 0.7));

        const damageDealt = piercingDmg * Math.min(1, ((1500 * (1 + (stats.pmPierce / 100)) - data.boss[stats.dungeon].pmResis) / 1500));

        return Math.floor(damageDealt).toLocaleString('en');
    } catch (e) {
        console.error('getDamageDealt failed with error:', e);
        return `ERROR`;
    }
};