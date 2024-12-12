export namespace Execute {
    export function executeJS(block: any, container: any) {
        let execute_func = new Function('lib', block) as (arg: Object) => void
        execute_func({
            dom: {
                container: container
            }
        })
    }
}