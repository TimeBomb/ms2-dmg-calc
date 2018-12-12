import React from 'react';
import TextField from './form/TextField';
import CheckboxField from './form/CheckboxField';
import { fields } from '../../util/constants';

export default class ItemStatForm extends React.Component {
    render() {
        return <div className="buff-stats stat-form">
            <fieldset>
                <CheckboxField label="Assassin Crit Rate Buff" name={fields.sinCritBuff} value={this.props.values[fields.sinCritBuff]} onChange={this.props.setStats} />
            </fieldset>
            <fieldset>
                <TextField label="Weapon Attack Buff %" name={fields.buffWepAtk} value={this.props.values[fields.buffWepAtk]} onChange={this.props.setStats} />
                <TextField label="Elemental Damage Buff %" name={fields.buffEDmg} value={this.props.values[fields.buffEDmg]} onChange={this.props.setStats} />
                <TextField label="Damage Buff %" name={fields.buffDmg} value={this.props.values[fields.buffDmg]} onChange={this.props.setStats} />
                <TextField label="Physical/Magical Attack Buff %" name={fields.buffPmAtk} value={this.props.values[fields.buffPmAtk]} onChange={this.props.setStats} />
            </fieldset>
            <fieldset>
                <TextField label="Increase Damage Taken Debuff %***" name={fields.debuffDmgTaken} value={this.props.values[fields.debuffDmgTaken]} onChange={this.props.setStats} />
                <TextField label="Decrease Defense Debuff %" name={fields.debuffDefense} value={this.props.values[fields.debuffDefense]} onChange={this.props.setStats} />
            </fieldset>
        </div>;
    }
}