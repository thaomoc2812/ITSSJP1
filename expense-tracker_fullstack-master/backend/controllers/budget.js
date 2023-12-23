const BudgetSchema= require("../models/BudgetModel")


exports.addBudget = async (req, res) => {
    const { incomebudget, expensebudget}  = req.body

    const budget = BudgetSchema({
        incomebudget,
        expensebudget
    })

    try {  

        if(!incomebudget || !expensebudget){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(incomebudget <= 0 || !incomebudget === 'number'){
            return res.status(400).json({message: 'Incomebudget must be a positive number!'})
        }
        if(expensebudget <= 0 || !expensebudget === 'number'){
            return res.status(400).json({message: 'Expensebudget must be a positive number!'})
        }
        await budget.save()
        res.status(200).json({message: 'budget Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(budget)
}

exports.getBudgets = async (req, res) =>{
    try {
        const budgets = await BudgetSchema.find().sort({createdAt: -1})
        res.status(200).json(budgets)
    } catch (error) {
        // res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteBudget = async (req, res) =>{
    const {id} = req.params;
    BudgetSchema.findByIdAndDelete(id)
        .then((budget) =>{
            res.status(200).json({message: 'Budget Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}