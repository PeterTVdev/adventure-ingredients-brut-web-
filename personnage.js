class Personnage {
    constructor() {
        this.Level;
        this.xp;
        this.xpMax;
        this.atk;
        this.def;
        this.life;
        this.lifeMax;
        this.fatigue;
        this.fatigueMax;
        this.gold;
        this.isStats = false;
        this.isBag = false;
    }

    addHero(pLevel, pXp, pXpMax, pAtk, pDef, pLife, pLifeMax, pFatigue, pFatigueMax, pGold) {
        this.Level = pLevel;
        this.xp = pXp;
        this.xpMax = pXpMax;
        this.atk = pAtk;
        this.def = pDef;
        this.life = pLife;
        this.lifeMax = pLifeMax;
        this.fatigue = pFatigue;
        this.fatigueMax = pFatigueMax;
        this.gold = pGold;
    }

    addMechant(pLevel, pXp, pXpMax, pAtk, pDef, pLife, pLifeMax, pGold) {
        this.Level = pLevel;
        this.xp = pXp;
        this.xpMax = pXpMax;
        this.atk = pAtk;
        this.def = pDef;
        this.life = pLife;
        this.lifeMax = pLifeMax;
        this.gold = pGold;
    }
}