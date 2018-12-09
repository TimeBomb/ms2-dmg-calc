import React from 'react';
import DropdownField from './form/DropdownField';
import CheckboxField from './form/CheckboxField';
import { fields, gemQuantities, gemLevels } from '../../util/constants';

export default class ItemStatForm extends React.Component {
    render() {
        return (
            <div className="item-stats stat-form">
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