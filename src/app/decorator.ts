export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Called: ${propertyKey} with args: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

export function LogClass<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log(`Applying LogClass decorator to ${constructor.name}`);
    return class extends constructor {
        newProperty = 'This is a new property';

        constructor(...args: any[]) {
            super(...args);
            console.log(`New instance `);
            console.log(`newProperty`);
        }
    };
}