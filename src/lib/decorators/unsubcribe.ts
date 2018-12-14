/**
 * Cancela automaticamente una subcripción previa antes de realizar una nueva consulta.
 * La función donde se use el decorador debe retornar el elemento Subcriber de Angular.
 * Util para evitar varios request a la API.
 */
export function Unsubscribe() {
    return (target, key, descriptor) => {
        const original = descriptor.value;
        let subscriptions;
        descriptor.value = function () {
            if (subscriptions && subscriptions.unsubscribe) {
                subscriptions.unsubscribe();
                subscriptions = null;
            }
            subscriptions = original.apply(this, arguments);
            return subscriptions;
        };
    };
}
