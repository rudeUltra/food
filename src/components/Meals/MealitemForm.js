import classes from './MealForm.module.css';
import Input from '../UI/input';
const MealItemForm=props=>{
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{id:'amount',type:'number',min:'0',max:'5',step:'1',defaultValues:'1'}}></Input>
            <button>Add +</button>
        </form>
    )

};

export default MealItemForm;