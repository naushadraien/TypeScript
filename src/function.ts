function calculateTax (income: number, tax_year ?: number) : number //this number shows the return type of number
{
    if(tax_year || 2022 < 2023){ //the question mark indicates that if the tax_year is number or something else
        return income *1.2;
    }else
    return income * 1;
}