import rules from './rules';

export default class Validator
{
    constructor(validations) {
        this.validations = this.normalize(validations);
        this.errors = {};
        this.rules = rules;
    }

    attach(name, checks) {
        checks.split('|').forEach(rule => {
            if (! this.validations[name]) {
                this.validations[name] = [];
            }

            this.validations[name].push(this.normalizeRule(rule));
        });
    }

    create(validations) {
        return new Validator(validations);
    }

    validateAll(values) {
        let test = true;
        this.errors = {};
        Object.keys(values).forEach(property => {
            test = this.validate(property, values[property]);
        });

        return test;
    }

    validate(name, value) {
        let test = true;
        this.errors[name] = [];
        this.validations[name].forEach(rule => {
            test = this.test(name, value, rule);
        });

        return test;
    }

    /**
     * Normalizes the validations object.
     * @param  {object} validations
     * @return {object} Normalized object.
     */
    normalize(validations) {
        const normalized = {};
        Object.keys(validations).forEach(property => {
            validations[property].split('|').forEach(rule => {
                if (! normalized[property]) {
                    normalized[property] = [];
                }

                normalized[property].push(this.normalizeRule(rule));
            });
        });

        return normalized;
    }

    normalizeRule(rule) {
        let params = null;
        if (~rule.indexOf(':')) {
            params = rule.split(':')[1].split(',');
        }

        return {
            name: rule.split(':')[0],
            params
        };
    }

    /**
     * test a single input value against a rule.
     *
     * @param  {*} name The name of the field.
     * @param  {*} value  [description]
     * @param  {object} rule the rule object.
     * @return {boolean} Wether if it passes the check.
     */
    test(name, value, rule) {
        const validator = this.rules[rule.name];
        const valid = validator.validate(value, rule.params);

        if (! valid) {
            this.errors[name].push(validator.msg(name, rule.params));
        }

        return valid;
    }
}
