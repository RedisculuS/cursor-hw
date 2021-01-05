export function getMiddleTaxes() {
    return +((this?.middleSalary * this?.tax).toFixed(2));
}