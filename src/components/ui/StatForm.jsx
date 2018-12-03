import React from 'react';
import DropdownField from './form/DropdownField';
import TextField from './form/TextField';
import { fields, classes, dungeons, wepRarities } from '../../util/constants';

export default class StatForm extends React.Component {
    render() {
        return (
            <div>
                <fieldset>
                    <DropdownField label="Class" name={fields.class} selected={this.props.values[fields.class]} values={classes} onChange={this.props.setStats} />
                    <DropdownField label="Dungeon" name={fields.dungeon} selected={this.props.values[fields.dungeon]} values={dungeons} onChange={this.props.setStats} />
                </fieldset>
                <fieldset>
                    <TextField label="Weapon Attack" name={fields.wepAtk} value={this.props.values[fields.wepAtk]} onChange={this.props.setStats} />
                    <TextField label="Bonus Attack" name={fields.bAtk} value={this.props.values[fields.bAtk]} onChange={this.props.setStats} />
                    <TextField label="Pet Bonus Attack" name={fields.pbAtk} value={this.props.values[fields.pbAtk]} onChange={this.props.setStats} />
                    <DropdownField label="Weapon Rarity" name={fields.wepRarity} selected={this.props.values[fields.wepRarity]} values={wepRarities} onChange={this.props.setStats} />
                </fieldset>
                <fieldset>
                    <TextField label="Pierce %" name={fields.pierce} value={this.props.values[fields.pierce]} onChange={this.props.setStats} />
                    <TextField label="Phys/Mag Pierce %" name={fields.pmPierce} value={this.props.values[fields.pmPierce]} onChange={this.props.setStats} />
                    <TextField label="Phys/Mag Attack" name={fields.pmAtk} value={this.props.values[fields.pmAtk]} onChange={this.props.setStats} />
                    <TextField label="Total Damage %" name={fields.tDmg} value={this.props.values[fields.tDmg]} onChange={this.props.setStats} />
                    <TextField label="Boss Damage %" name={fields.bDmg} value={this.props.values[fields.bDmg]} onChange={this.props.setStats} />
                    <TextField label="Elemental Damage %" name={fields.eDmg} value={this.props.values[fields.eDmg]} onChange={this.props.setStats} />
                    <TextField label="Melee/Ranged Damage %" name={fields.mrDmg} value={this.props.values[fields.mrDmg]} onChange={this.props.setStats} />
                </fieldset>
            </div>
        );
    }
}