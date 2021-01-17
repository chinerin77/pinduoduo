export function Emoji(){
    return (target: any, key:string)=>{
        let val = target[key];
        
        const getter = ()=>{
            return val;
        }

        const setter = (value:string) =>{
            val = `😊${value}😊`;
        }

        Object.defineProperty(target,key,{
            get:getter,
            set:setter,
            enumerable:true,
            configurable:true
        });



    }
}

export function Confirmable(message: string){
    return (target:object, key:string, descriptor:PropertyDescriptor) =>{
        const original =descriptor.value;
        descriptor.value= (...args: any) => { 
            const allow = window.confirm(message);
            if(allow){
                const result = original.apply(newFunction(), args)
                return result;
            }
            return null;
        }
        return descriptor;
   

    }


    // function newFunction(): any {
    //     return this;
    // }
}

function newFunction(this: any): any {
    return this;
}
