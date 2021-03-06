import React from 'react';
import DropdownField from './form/DropdownField';
import CheckboxField from './form/CheckboxField';
import { fields, gemQuantities, gemLevels } from '../../util/constants';

export default class ItemStatForm extends React.Component {
    render() {
        return (
            <div className="item-stats stat-form">
                <fieldset>
                    <CheckboxField label="MSL Weapon (Average +Damage)****" name={fields.mslBuff} value={this.props.values[fields.mslBuff]} onChange={this.props.setStats} />
                    <CheckboxField label="Murp Weapon (Average +Phys/Mag Atk)" name={fields.murpBuff} value={this.props.values[fields.murpBuff]} onChange={this.props.setStats} />
                    <CheckboxField label="Named Epic 2H Orb Buff (Average +Phys/Mag Atk)" name={fields.namedEpic2HBuff} value={this.props.values[fields.namedEpic2HBuff]} onChange={this.props.setStats} />
                    <CheckboxField label="Named Epic 1H Buff (Average +Phys/Mag Atk)" Atk name={fields.namedEpic1HBuff} value={this.props.values[fields.namedEpic1HBuff]} onChange={this.props.setStats} />
                    <CheckboxField label="Named Epic Main-hand Buff (Average +Phys/Mag Atk)" Atk name={fields.namedEpicMHBuff} value={this.props.values[fields.namedEpicMHBuff]} onChange={this.props.setStats} />
                </fieldset>
                <fieldset>
                    <CheckboxField label="Varrakent's Wings (Average +Piercing)" name={fields.varrWingsBuff} value={this.props.values[fields.varrWingsBuff]} onChange={this.props.setStats} />
                    <CheckboxField label="Varrakent's Horns (Average +Phys/Mag Atk)" name={fields.varrHornsBuff} value={this.props.values[fields.varrHornsBuff]} onChange={this.props.setStats} />
                </fieldset>
                <fieldset>
                    <DropdownField label="# of Additional Bonus Atk Gems" name={fields.batkGems} selected={this.props.values[fields.batkGems]} values={gemQuantities} onChange={this.props.setStats} />
                    <DropdownField label="Bonus Atk Gem Level" name={fields.batkGemLvl} selected={this.props.values[fields.batkGemLvl]} values={gemLevels} onChange={this.props.setStats} />
                </fieldset>
                <fieldset>
                    <DropdownField label="# of Additional Main Stat Gems" name={fields.mainStatGems} selected={this.props.values[fields.mainStatGems]} values={gemQuantities} onChange={this.props.setStats} />
                    <DropdownField label="Main Stat Gem Level" name={fields.mainStatGemLvl} selected={this.props.values[fields.mainStatGemLvl]} values={gemLevels} onChange={this.props.setStats} />
                </fieldset>
            </div>
        );
    }
}