
import Operation from './Operation';

const isNum = ['1','2','3','4','5','6','7','8','9','0'];
const calculator = (obj, buttonName) => {

    
    if(buttonName === 'AC')
    {
        return{
            total: null,
            next: null, 
            operation: null,
        };
    }

    if(buttonName in isNum)
    {
        if(buttonName === '0' && obj.next === '0' )
        {
            return{};
        }

        // if there is operation 

        if(obj.operation)
        {
            if(obj.next){
                return { next: obj.next + buttonName };
            }
            return{next: buttonName};
        }

        // if there is no operation
        if(obj.next)  // more than one number.
        {
            const next = obj.next === '0'? buttonName : obj.next + buttonName;

            return{
                next,
                total: null
            };
        }
        return {
            next: buttonName,    // initial value
            total: null
        };

       
    }

    if ( buttonName === "=")
    {
        if(obj.next && obj.operation)
        {
            return {
                total: Operation(obj.total, obj.next, obj.operation),
                next: null,
                operation: null

            };
        }
        else{
            return{};
        }
        
    }

    if( buttonName === '+/-')
    {
        if (obj.next) {
        return { next: (-1 * parseFloat(obj.next)).toString() };
          }
       if (obj.total) {
        return { total: (-1 * parseFloat(obj.total)).toString() };
       }
       return {};
    }

    // User pressed an operation button and there is an existing operation
    if (obj.operation) {
    return {
      total: Operation(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

   // save the operation and shift 'next' into 'total'
   return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}

export default calculator;