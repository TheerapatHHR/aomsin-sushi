import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

interface AmountCountProps {
    amount: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
    plateCost?: number;
    setTotalCosts?: React.Dispatch<React.SetStateAction<number>>;
}


export function AmountCount({ amount, setAmount, plateCost, setTotalCosts }: AmountCountProps) {
    const addAmount = () => {
        setAmount(prev => prev + 1);
        if (setTotalCosts && plateCost !== undefined) {
            setTotalCosts(prev => prev + plateCost);
        }
    }
    const subtractAmount = () => {
        if (amount === 0) return;
        setAmount(prev => Math.max(0, prev - 1));
        if (setTotalCosts && plateCost !== undefined) {
            setTotalCosts(prev => prev - plateCost);
        }
    }
    return (
        <div className="flex flex-wrap justify-between items-center gap-4">
            <div 
            className="rounded-lg bg-red-500 text-white p-2" 
            onClick={subtractAmount}
            >
                <FaMinus />
            </div>
            <div className="rounded-lg bg-gray-300 py-2 px-4">
                {amount}
            </div>
            <div 
            className="rounded-lg bg-blue-500 text-white p-2" 
            onClick={addAmount}
            >
                <FaPlus />
            </div>
        </div>
    );
}